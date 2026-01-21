"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  RefreshCw,
  Save,
  X,
  ListPlus,
  AlertCircle,
  ArrowLeft,
  Building2,
  FileText,
} from "lucide-react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
  category: string;
  routeName: string[]; // stored as array in API response
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};

type CategoryItem = {
  category: string;
  totalCount: number;
  activeCount: number;
  inactiveCount: number;
  firstCreated?: string;
  lastUpdated?: string;
};

function getAuthHeaders() {
  // Authentication removed - return basic headers
  return { "Content-Type": "application/json" };
}

function routesToInput(routes: string[]) {
  return (routes || []).join(", ");
}

function inputToRoutes(input: string) {
  return input
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function FaqManagementPage() {
  const [viewMode, setViewMode] = useState<"categories" | "faqs">("categories");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Initialize hasToken by checking localStorage immediately (client-side only)
  const [hasToken, setHasToken] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("superAdminToken");
    }
    return false;
  });
  const [isReadOnly, setIsReadOnly] = useState(!hasToken);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 25;

  // Check for token on mount and update state
  useEffect(() => {
    const checkToken = () => {
      const token = typeof window !== "undefined" ? localStorage.getItem("superAdminToken") : null;
      const tokenExists = !!token;
      setHasToken(tokenExists);
      setIsReadOnly(!tokenExists);
    };
    
    checkToken();
    // Also listen for storage changes (in case user logs in/out in another tab)
    if (typeof window !== "undefined") {
      window.addEventListener("storage", checkToken);
      return () => window.removeEventListener("storage", checkToken);
    }
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [categorySearchTerm, setCategorySearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterRoute, setFilterRoute] = useState("all");
  const [filterActive, setFilterActive] = useState("all");

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editing, setEditing] = useState<FaqItem | null>(null);
  const didInit = useRef(false);
  const pageRef = useRef(page);

  const [form, setForm] = useState({
    question: "",
    answer: "",
    category: "",
    routeName: "global",
    isActive: true,
  });

  const categoryList = useMemo(() => {
    const set = new Set<string>();
    for (const f of faqs) if (f.category) set.add(f.category);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [faqs]);

  const routes = useMemo(() => {
    const set = new Set<string>();
    for (const f of faqs) for (const r of f.routeName || []) set.add(r);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [faqs]);

  const fetchCategories = async () => {
    setIsLoadingCategories(true);
    setError(null);
    try {
      const token =
        (typeof window !== "undefined" && localStorage.getItem("superAdminToken")) || "";

      const url = token
        ? "/api/faqs?list=categories&includeInactive=1"
        : "/api/faqs?list=categories";

      const res = await fetch(url, {
        headers: token ? getAuthHeaders() : { Accept: "application/json" },
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setIsReadOnly(false);
        setHasToken(true);
        setCategories(Array.isArray(data?.data) ? data.data : []);
      } else {
        if (res.status === 401 || res.status === 403) {
          setIsReadOnly(true);
          setHasToken(false);
          // Try without auth for read-only view
          const res2 = await fetch("/api/faqs?list=categories", {
            headers: { Accept: "application/json" },
          });
          const data2 = await res2.json().catch(() => ({}));
          if (res2.ok) {
            setCategories(Array.isArray(data2?.data) ? data2.data : []);
          } else {
            throw new Error(data2?.error || `HTTP ${res2.status}`);
          }
        } else {
          throw new Error(data?.error || `HTTP ${res.status}`);
        }
      }
    } catch (e: any) {
      setError(e?.message || "Failed to load categories");
      setCategories([]);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  const fetchFaqs = async (pageOverride?: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const token =
        (typeof window !== "undefined" && localStorage.getItem("superAdminToken")) || "";
      const currentPage = pageOverride ?? page;

      const buildUrl = () => {
        const params = new URLSearchParams();
        params.set("page", String(currentPage));
        params.set("limit", String(pageSize));
        params.set("includeInactive", "1"); // Always include inactive for admin view
        if (searchTerm.trim()) params.set("q", searchTerm.trim());
        if (filterCategory !== "all") params.set("category", filterCategory);
        if (filterRoute !== "all") params.set("routeName", filterRoute);
        // Only add isActive filter if not "all" - this allows showing both active and inactive
        if (filterActive !== "all") {
          params.set("isActive", filterActive);
        }
        const url = `/api/faqs?${params.toString()}`;
        console.log("Fetching FAQs with URL:", url);
        return url;
      };

      // Fetch FAQs with inactive included
      const res = await fetch(buildUrl(), { headers: getAuthHeaders() });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setIsReadOnly(false);
        setHasToken(true);
        const totalCount = Number(data?.total || 0);
        const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
        if (totalCount > 0 && currentPage > totalPages) {
          setPage(totalPages);
          return;
        }
        const faqsList = Array.isArray(data?.data) ? data.data : [];
        console.log(`Loaded ${faqsList.length} FAQs (Total: ${totalCount})`);
        console.log("Active FAQs:", faqsList.filter((f: FaqItem) => f.isActive).length);
        console.log("Inactive FAQs:", faqsList.filter((f: FaqItem) => !f.isActive).length);
        setFaqs(faqsList);
        setTotal(totalCount);
      } else {
        throw new Error(data?.error || `HTTP ${res.status}`);
      }
    } catch (e: any) {
      setError(e?.message || "Failed to load FAQs");
      setFaqs([]);
      setTotal(0);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (viewMode === "categories") {
      fetchCategories();
    } else {
      fetchFaqs();
    }
  }, [viewMode, page]);

  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  useEffect(() => {
    if (viewMode === "faqs") {
      if (!didInit.current) {
        didInit.current = true;
        return;
      }
      if (pageRef.current !== 1) {
        setPage(1);
        return;
      }
      fetchFaqs(1);
    }
  }, [viewMode, searchTerm, filterCategory, filterRoute, filterActive]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setFilterCategory(category);
    setViewMode("faqs");
    setPage(1);
  };

  const handleBackToCategories = () => {
    setViewMode("categories");
    setSelectedCategory(null);
    setFilterCategory("all");
    setPage(1);
  };

  const getInitials = (text: string): string => {
    if (!text) return "??";
    const words = text.trim().split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return text.substring(0, 2).toUpperCase();
  };

  const formatDate = (dateStr?: string): string => {
    if (!dateStr) return "N/A";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "N/A";
    }
  };

  // Removed auth check - operations will proceed and API will handle auth

  const getDefaultRoutesForCategory = async (category: string | null): Promise<string> => {
    if (!category) return "global";
    
    try {
      // Fetch all FAQs for this category to get all routes (not just current page)
      const url = `/api/faqs?category=${encodeURIComponent(category)}&limit=200&includeInactive=1`;
      
      const res = await fetch(url, {
        headers: getAuthHeaders(),
      });
      
      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        const allCategoryFaqs = Array.isArray(data?.data) ? data.data : [];
        
        const routeSet = new Set<string>();
        allCategoryFaqs.forEach((faq: FaqItem) => {
          faq.routeName?.forEach((route) => {
            if (route && route !== "global") {
              routeSet.add(route);
            }
          });
        });
        
        const uniqueRoutes = Array.from(routeSet).sort();
        return uniqueRoutes.length > 0 ? uniqueRoutes.join(", ") : "";
      }
    } catch (e) {
      console.error("Failed to fetch routes for category:", e);
    }
    
    // Fallback: use routes from currently loaded FAQs
    const categoryFaqs = faqs.filter((f) => f.category === category);
    const routeSet = new Set<string>();
    
    categoryFaqs.forEach((faq) => {
      faq.routeName?.forEach((route) => {
        if (route && route !== "global") {
          routeSet.add(route);
        }
      });
    });
    
    const uniqueRoutes = Array.from(routeSet).sort();
    return uniqueRoutes.length > 0 ? uniqueRoutes.join(", ") : "";
  };

  const openCreate = async () => {
    setEditing(null);
    
    // Get default routes for the selected category
    const defaultRoutes = selectedCategory 
      ? await getDefaultRoutesForCategory(selectedCategory)
      : "global";
    
    setForm({
      question: "",
      answer: "",
      category: selectedCategory || "",
      routeName: defaultRoutes,
      isActive: true,
    });
    setShowModal(true);
  };

  const openEdit = (faq: FaqItem) => {
    console.log("Opening edit for FAQ:", faq);
    // Always allow opening edit modal - check auth on submit instead
    setEditing(faq);
    setForm({
      question: faq.question,
      answer: faq.answer,
      category: faq.category || "",
      routeName: routesToInput(faq.routeName || ["global"]),
      isActive: !!faq.isActive,
    });
    setShowModal(true);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Ensure all required fields are present
      if (!form.question.trim()) {
        alert("Question is required");
        setIsSubmitting(false);
        return;
      }
      if (!form.answer.trim()) {
        alert("Answer is required");
        setIsSubmitting(false);
        return;
      }

      const payload = {
        question: form.question.trim(),
        answer: form.answer.trim(),
        category: form.category.trim(),
        routeName: inputToRoutes(form.routeName),
        isActive: form.isActive,
      };

      const url = editing ? `/api/faqs/${editing.id}` : "/api/faqs";
      const method = editing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: getAuthHeaders(),
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const errorMsg = data?.error || data?.message || `HTTP ${res.status}`;
        alert(`Error: ${errorMsg}`);
        setIsSubmitting(false);
        return;
      }

      // Verify success
      if (!data?.success) {
        const errorMsg = data?.error || data?.message || "Operation failed";
        alert(`Error: ${errorMsg}`);
        setIsSubmitting(false);
        return;
      }

      // Success!
      alert(editing ? "FAQ updated successfully!" : "FAQ created successfully!");

      setShowModal(false);
      setEditing(null);
      
      // Refresh data
      if (viewMode === "faqs") {
        await fetchFaqs();
      }
      if (viewMode === "categories") {
        await fetchCategories();
      }
    } catch (e: any) {
      console.error("FAQ save error:", e);
      alert(`Error: ${e?.message || "Failed to save FAQ. Please check console for details."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleActive = async (faq: FaqItem) => {
    try {
      const res = await fetch(`/api/faqs/${faq.id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify({ isActive: !faq.isActive }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          throw new Error("Authentication failed. Please refresh the page and try again.");
        }
        const errorMsg = data?.error || data?.message || `HTTP ${res.status}`;
        throw new Error(errorMsg);
      }
      
      if (data?.success) {
        // Status updated successfully - refresh data silently
        if (viewMode === "faqs") {
          await fetchFaqs();
        }
        if (viewMode === "categories") {
          await fetchCategories();
        }
      }
    } catch (e: any) {
      console.error("FAQ toggle active error:", e);
      // Only show error if it's a critical issue
      if (e?.message && !e.message.includes("Authentication")) {
        alert(e.message);
      }
    }
  };

  const remove = async (faq: FaqItem) => {
    if (!confirm(`Are you sure you want to delete this FAQ?\n\nQuestion: "${faq.question}"`)) return;
    try {
      const res = await fetch(`/api/faqs/${faq.id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          throw new Error("Authentication failed. Please refresh the page and try again.");
        }
        const errorMsg = data?.error || data?.message || `HTTP ${res.status}`;
        throw new Error(errorMsg);
      }
      
      if (data?.success && data?.deleted) {
        // Deleted successfully - refresh data silently
      }
      
      if (viewMode === "faqs") {
        await fetchFaqs();
      }
      if (viewMode === "categories") {
        await fetchCategories();
      }
    } catch (e: any) {
      console.error("FAQ delete error:", e);
      // Only show error if it's a critical issue
      if (e?.message && !e.message.includes("Authentication")) {
        alert(e.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      <div className="w-full max-w-none">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2 sm:gap-3">
                <ListPlus className="h-6 w-6 sm:h-8 sm:w-8 text-[#1a8b82]" />
                <span>
                  FAQ Management
                  {viewMode === "faqs" && selectedCategory && (
                    <span className="text-lg sm:text-xl text-[#1a8b82] ml-2">
                      - {selectedCategory}
                    </span>
                  )}
                </span>
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                {viewMode === "categories"
                  ? "Select a category to view and manage its FAQs."
                  : "Create, edit, and control which FAQs appear on each page."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
              {viewMode === "categories" && (
                <div className="relative w-full sm:w-80 lg:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
                  <input
                    type="search"
                    placeholder="Search categories..."
                    className="pl-10 pr-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a8b82] focus:border-[#1a8b82] w-full text-sm bg-white shadow-sm hover:border-gray-400 transition-colors"
                    value={categorySearchTerm}
                    onChange={(e) => setCategorySearchTerm(e.target.value)}
                  />
                </div>
              )}
              {viewMode === "faqs" && (
                <>
                  <button
                    className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center text-sm"
                    onClick={handleBackToCategories}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Categories
                  </button>
                  <button
                    className="bg-gradient-to-r from-[#1a8b82] to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center text-sm"
                    onClick={openCreate}
                    title="Add FAQ"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add FAQ
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Search Bar and Filters - Only show in FAQs view */}
          {viewMode === "faqs" && (
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
                <input
                  type="search"
                  placeholder="Search question/answer/category/route..."
                  className="pl-10 pr-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a8b82] focus:border-[#1a8b82] w-full text-sm bg-white shadow-sm hover:border-gray-400 transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <select
                className="border-2 border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a8b82] focus:border-[#1a8b82] text-sm bg-white shadow-sm hover:border-gray-400 transition-colors min-w-[180px]"
                value={filterActive}
                onChange={(e) => setFilterActive(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          )}
        </div>

        {/* Content */}
        {viewMode === "categories" ? (
          /* Categories View */
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {error ? (
              <div className="p-8 text-center">
                <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-3" />
                <div className="text-red-600 font-medium">{error}</div>
                <p className="text-gray-500 mt-2 text-sm">
                  If you just updated login: please logout and login again to generate a token.
                </p>
              </div>
            ) : isLoadingCategories ? (
              <div className="p-10 text-center text-gray-600">Loading Categories...</div>
            ) : categories.length === 0 ? (
              <div className="p-10 text-center text-gray-600">No categories found.</div>
            ) : (
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categories
                    .filter((cat) => {
                      if (!categorySearchTerm.trim()) return true;
                      const search = categorySearchTerm.toLowerCase();
                      return (
                        cat.category.toLowerCase().includes(search) ||
                        cat.totalCount.toString().includes(search) ||
                        cat.activeCount.toString().includes(search)
                      );
                    })
                    .map((cat) => (
                      <div
                        key={cat.category}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => handleCategoryClick(cat.category)}
                      >
                      {/* Header with teal background */}
                      <div className="bg-gradient-to-r from-[#1a8b82] to-emerald-600 p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1a8b82] font-bold text-lg">
                            {getInitials(cat.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-white font-semibold text-sm truncate">
                              {cat.category || "Uncategorized"}
                            </h3>
                            <p className="text-emerald-100 text-xs mt-1">
                              ID: {cat.category.length}
                            </p>
                          </div>
                        </div>
                        <p className="text-emerald-100 text-xs mt-2">
                          Created: {formatDate(cat.firstCreated)}
                        </p>
                      </div>

                      {/* Body */}
                      <div className="p-4 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <FileText className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Total FAQs:</span>
                          <span>{cat.totalCount}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Building2 className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Active:</span>
                          <span className="text-green-600">{cat.activeCount}</span>
                        </div>

                        {cat.inactiveCount > 0 && (
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <EyeOff className="h-4 w-4 text-gray-500" />
                            <span className="font-medium">Inactive:</span>
                            <span className="text-gray-500">{cat.inactiveCount}</span>
                          </div>
                        )}

                        <button
                          className="w-full mt-3 bg-gradient-to-r from-[#1a8b82] to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 flex items-center justify-center gap-2 text-sm font-semibold"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategoryClick(cat.category);
                          }}
                        >
                          <Eye className="h-4 w-4" />
                          View Details
                        </button>
                      </div>
                    </div>
                    ))}
                </div>
                {categorySearchTerm.trim() && 
                  categories.filter((cat) => {
                    const search = categorySearchTerm.toLowerCase();
                    return (
                      cat.category.toLowerCase().includes(search) ||
                      cat.totalCount.toString().includes(search) ||
                      cat.activeCount.toString().includes(search)
                    );
                  }).length === 0 && (
                    <div className="p-10 text-center text-gray-600">
                      No categories found matching "{categorySearchTerm}"
                    </div>
                  )
                }
              </div>
            )}
          </div>
        ) : (
          /* FAQs View */
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {error ? (
              <div className="p-8 text-center">
                <AlertCircle className="h-10 w-10 text-red-500 mx-auto mb-3" />
                <div className="text-red-600 font-medium">{error}</div>
                <p className="text-gray-500 mt-2 text-sm">
                  If you just updated login: please logout and login again to generate a token.
                </p>
              </div>
            ) : isLoading ? (
              <div className="p-10 text-center text-gray-600">Loading FAQs...</div>
            ) : faqs.length === 0 ? (
              <div className="p-10 text-center text-gray-600">No FAQs found.</div>
            ) : (
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      FAQ
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Routes
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Active
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {faqs.map((faq) => (
                    <tr key={faq.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 align-top">
                        <div className="text-sm font-semibold text-gray-900 line-clamp-2">
                          {faq.question}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {faq.answer}
                        </div>
                      </td>
                      <td className="px-4 py-3 align-top text-sm text-gray-700">
                        {faq.category || <span className="text-gray-400">—</span>}
                      </td>
                      <td className="px-4 py-3 align-top text-xs text-gray-700">
                        {(faq.routeName || []).length ? (
                          <div className="flex flex-wrap gap-1">
                            {faq.routeName.slice(0, 4).map((r) => (
                              <span
                                key={r}
                                className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100"
                              >
                                {r}
                              </span>
                            ))}
                            {faq.routeName.length > 4 && (
                              <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                                +{faq.routeName.length - 4}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 align-top text-center">
                        <button
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold ${
                            faq.isActive
                              ? "bg-green-100 text-green-800 hover:bg-green-200"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                          onClick={() => toggleActive(faq)}
                          title="Toggle active"
                        >
                          {faq.isActive ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                          {faq.isActive ? "Active" : "Inactive"}
                        </button>
                      </td>
                      <td className="px-4 py-3 align-top text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1"
                            onClick={() => openEdit(faq)}
                          >
                            <Edit className="h-4 w-4" />
                            Edit
                          </button>
                          <button
                            className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1"
                            onClick={() => remove(faq)}
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            )}
          </div>
        )}
        {viewMode === "faqs" && !isLoading && !error && total > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 py-3 border border-gray-200 rounded-xl bg-white mt-4">
            <div className="text-xs sm:text-sm text-gray-600">
              Showing {(page - 1) * pageSize + 1}-
              {Math.min(page * pageSize, total)} of {total}
              {selectedCategory && (
                <span className="ml-2 text-[#1a8b82] font-medium">
                  in "{selectedCategory}"
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-lg text-gray-700 disabled:opacity-50"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
              >
                Prev
              </button>
              <div className="text-xs sm:text-sm text-gray-700">
                Page {page} of {Math.max(1, Math.ceil(total / pageSize))}
              </div>
              <button
                className="px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-lg text-gray-700 disabled:opacity-50"
                onClick={() => setPage((p) => p + 1)}
                disabled={page >= Math.ceil(total / pageSize)}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-3 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-3 sm:p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                {editing ? "Edit FAQ" : "Add FAQ"}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditing(null);
                }}
                className="text-gray-400 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={submit} className="p-3 sm:p-4 space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Question</label>
                <input
                  required
                  value={form.question}
                  onChange={(e) => setForm((p) => ({ ...p, question: e.target.value }))}
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a8b82]"
                  placeholder="Enter the FAQ question"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Answer</label>
                <textarea
                  required
                  value={form.answer}
                  onChange={(e) => setForm((p) => ({ ...p, answer: e.target.value }))}
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a8b82] min-h-[100px]"
                  placeholder="Enter the FAQ answer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Category</label>
                  <input
                    value={form.category}
                    onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
                    className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a8b82]"
                    placeholder="e.g. Payments, Company, GST"
                  />
                </div>

                <div className="flex items-center gap-2 pt-5">
                  <input
                    id="isActive"
                    type="checkbox"
                    checked={form.isActive}
                    onChange={(e) => setForm((p) => ({ ...p, isActive: e.target.checked }))}
                    className="h-3.5 w-3.5"
                  />
                  <label htmlFor="isActive" className="text-xs font-medium text-gray-700">
                    Active (visible on website)
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Routes / Pages (comma separated)
                </label>
                <input
                  value={form.routeName}
                  onChange={(e) => setForm((p) => ({ ...p, routeName: e.target.value }))}
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a8b82]"
                  placeholder={selectedCategory ? "e.g. /route1, /route2" : "global, /private-limited-company-registration, /checkout"}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {selectedCategory 
                    ? `Default routes from "${selectedCategory}" category are shown. You can modify them.`
                    : "Tip: use global to show on all pages, or specify specific routes."
                  }
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  className="px-3 py-1.5 text-xs border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  onClick={() => {
                    setShowModal(false);
                    setEditing(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-3 py-1.5 text-xs !bg-[#1a8b82] text-white rounded-lg  disabled:opacity-50 flex items-center gap-1.5 hover:text-black"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-3.5 w-3.5" />
                      Save
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

