"use client";

import React, { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  RefreshCw,
  UserPlus,
  Shield,
  CheckCircle,
  XCircle,
  AlertCircle,
  Save,
  X,
  Filter,
  MoreVertical,
  Clock,
} from "lucide-react";

interface Admin {
  id: string;
  email: string;
  password?: string;
  name: string;
  role: string;
  status: string;
  lastupdate: string;
}

const AdminManagement = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [activeTab, setActiveTab] = useState("superadmin");

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "subadmin",
    status: "active",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch admins
  const fetchAdmins = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://edueye.co.in/ensurekar/existing-site/admin-register.php");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Handle different response formats
      let adminData = [];
      if (Array.isArray(data)) {
        adminData = data;
      } else if (data.data && Array.isArray(data.data)) {
        adminData = data.data;
      } else if (data.success && data.data) {
        adminData = data.data;
      }

      setAdmins(adminData);
    } catch (error) {
      console.error("Error fetching admins:", error);
      setError("Failed to fetch admin data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Create/Update admin
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://edueye.co.in/ensurekar/existing-site/admin-register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Submit response:", result);

      if (result.success || result.message) {
        alert(selectedAdmin ? "Admin updated successfully!" : "Admin created successfully!");
        setShowAddModal(false);
        setShowEditModal(false);
        setFormData({
          name: "",
          email: "",
          password: "",
          role: "subadmin",
          status: "active",
        });
        setSelectedAdmin(null);
        fetchAdmins();
      } else {
        throw new Error(result.message || "Failed to save admin");
      }
    } catch (error) {
      console.error("Error saving admin:", error);
      alert("Failed to save admin. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete admin
  const handleDelete = async () => {
    if (!selectedAdmin) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://edueye.co.in/ensurekar/existing-site/admin-register.php", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "delete",
          email: selectedAdmin.email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Delete response:", result);

      if (result.success || result.message) {
        alert("Admin deleted successfully!");
        setShowDeleteModal(false);
        setSelectedAdmin(null);
        fetchAdmins();
      } else {
        throw new Error(result.message || "Failed to delete admin");
      }
    } catch (error) {
      console.error("Error deleting admin:", error);
      alert("Failed to delete admin. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit
  const handleEdit = (admin: Admin) => {
    setSelectedAdmin(admin);
    setFormData({
      name: admin.name,
      email: admin.email,
      password: "",
      role: admin.role,
      status: admin.status,
    });
    setShowEditModal(true);
  };

  // Handle delete confirmation
  const handleDeleteClick = (admin: Admin) => {
    setSelectedAdmin(admin);
    setShowDeleteModal(true);
  };

  // Filter admins based on active tab and other filters
  const filteredAdmins = admins.filter((admin) => {
    const matchesSearch = 
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTab = admin.role.toLowerCase() === activeTab;
    const matchesStatus = filterStatus === "all" || admin.status === filterStatus;

    return matchesSearch && matchesTab && matchesStatus;
  });

  // Get counts for each tab
  const superAdminCount = admins.filter(admin => admin.role.toLowerCase() === "superadmin").length;
  const subAdminCount = admins.filter(admin => admin.role.toLowerCase() === "subadmin").length;

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get role color
  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "superadmin":
        return "bg-purple-100 text-purple-800";
      case "admin":
        return "bg-blue-100 text-blue-800";
      case "subadmin":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      <div className="w-full max-w-none">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2 sm:gap-3">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                <span className="hidden sm:inline">Admin Management</span>
                <span className="sm:hidden">Admins</span>
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">Manage admin accounts and permissions</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-gray-600">Total Admins</div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">{admins.length}</div>
                </div>
              </div>
              <div className="flex gap-2 bg-green-50 px-3 sm:px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-gray-600">Active Admins</div>
                  <div className="text-xl sm:text-2xl font-bold text-green-600">
                    {admins.filter((admin) => admin.status === "active").length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-4 mt-4 sm:mt-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 flex-1">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="search"
                    placeholder="Search admins..."
                    className="pl-10 border border-gray-300 px-3 sm:px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-sm sm:text-base"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <select
                  className="border border-gray-300 px-3 sm:px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                <button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm sm:text-base"
                  onClick={fetchAdmins}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      <span className="hidden sm:inline">Loading...</span>
                      <span className="sm:hidden">Loading</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">Refresh</span>
                      <span className="sm:hidden">Refresh</span>
                    </>
                  )}
                </button>

                <button
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center text-sm sm:text-base"
                  onClick={() => {
                    setFormData({
                      name: "",
                      email: "",
                      password: "",
                      role: activeTab,
                      status: "active",
                    });
                    setShowAddModal(true);
                  }}
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Add {activeTab === "superadmin" ? "Super Admin" : "Sub Admin"}</span>
                  <span className="sm:hidden">Add Admin</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("superadmin")}
              className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-md font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 ${
                activeTab === "superadmin"
                  ? "bg-white text-purple-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Super Admin</span>
              <span className="sm:hidden">Super</span>
              <span className={`px-1 sm:px-2 py-1 rounded-full text-xs ${
                activeTab === "superadmin" 
                  ? "bg-purple-100 text-purple-700" 
                  : "bg-gray-200 text-gray-600"
              }`}>
                {superAdminCount}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("subadmin")}
              className={`flex-1 py-2 sm:py-3 px-3 sm:px-6 rounded-md font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 ${
                activeTab === "subadmin"
                  ? "bg-white text-green-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <UserPlus className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Sub Admin</span>
              <span className="sm:hidden">Sub</span>
              <span className={`px-1 sm:px-2 py-1 rounded-full text-xs ${
                activeTab === "subadmin" 
                  ? "bg-green-100 text-green-700" 
                  : "bg-gray-200 text-gray-600"
              }`}>
                {subAdminCount}
              </span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="h-8 w-8 animate-spin text-blue-500" />
              <span className="ml-2 text-gray-600">Loading admins...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <div className="text-red-500 text-lg font-medium">{error}</div>
              <p className="text-gray-500 mt-2">Please try refreshing the page</p>
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Admin Info
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Update
                    </th>
                    <th className="px-3 sm:px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAdmins.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-3 sm:px-6 py-12 text-center">
                        <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <div className="text-gray-500 text-lg">No admins found</div>
                        <p className="text-gray-400 mt-2">
                          {searchTerm || filterRole !== "all" || filterStatus !== "all"
                            ? "Try adjusting your search criteria"
                            : "No admin data available"}
                        </p>
                      </td>
                    </tr>
                  ) : (
                    filteredAdmins.map((admin) => (
                      <tr key={admin.id} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                                {admin.name.charAt(0).toUpperCase()}
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                              <div className="text-sm text-gray-500">{admin.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(admin.role)}`}>
                            {admin.role}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(admin.status)}`}>
                            {admin.status}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(admin.lastupdate).toLocaleDateString()}
                        </td>
                        <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center"
                              onClick={() => handleEdit(admin)}
                            >
                              <Edit className="mr-1 h-3 w-3" />
                              Edit
                            </button>
                            <button
                              className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center"
                              onClick={() => handleDeleteClick(admin)}
                            >
                              <Trash2 className="mr-1 h-3 w-3" />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden">
                {filteredAdmins.length === 0 ? (
                  <div className="p-8 text-center">
                    <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-10 w-10 text-gray-400" />
                    </div>
                    <div className="text-gray-600 text-lg font-medium mb-2">No admins found</div>
                    <p className="text-gray-400 text-sm">
                      {searchTerm || filterRole !== "all" || filterStatus !== "all"
                        ? "Try adjusting your search criteria"
                        : "No admin data available"}
                    </p>
                  </div>
                ) : (
                  <div className="p-3 space-y-3">
                    {filteredAdmins.map((admin) => (
                      <div key={admin.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-200">
                        {/* Header with Avatar and Info */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {admin.name.charAt(0).toUpperCase()}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-gray-900 truncate">{admin.name}</h3>
                            <p className="text-xs text-gray-500 truncate mt-1">{admin.email}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(admin.role)}`}>
                                {admin.role}
                              </span>
                              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(admin.status)}`}>
                                {admin.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Last Update */}
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 px-1">
                          <Clock className="h-3 w-3" />
                          <span>Updated: {new Date(admin.lastupdate).toLocaleDateString()}</span>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button
                            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                            onClick={() => handleEdit(admin)}
                          >
                            <Edit className="h-4 w-4" />
                            Edit
                          </button>
                          <button
                            className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                            onClick={() => handleDeleteClick(admin)}
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Add Admin Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Add New {activeTab === "superadmin" ? "Super Admin" : "Sub Admin"}</h2>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setFormData({
                      name: "",
                      email: "",
                      password: "",
                      role: activeTab,
                      status: "active",
                    });
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <option value="subadmin">Sub Admin</option>
                  <option value="superadmin">Super Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 !bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Create {activeTab === "superadmin" ? "Super Admin" : "Sub Admin"}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setFormData({
                      name: "",
                      email: "",
                      password: "",
                      role: activeTab,
                      status: "active",
                    });
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Admin Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Edit Admin</h2>
                <button
                  onClick={() => {
                    setShowEditModal(false);
                    setSelectedAdmin(null);
                    setFormData({
                      name: "",
                      email: "",
                      password: "",
                      role: activeTab,
                      status: "active",
                    });
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password (optional)</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Leave empty to keep current password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <option value="subadmin">Sub Admin</option>
                  <option value="superadmin">Super Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 !bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-semibold text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-5 w-5" />
                      Update Admin
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setSelectedAdmin(null);
                    setFormData({
                      name: "",
                      email: "",
                      password: "",
                      role: activeTab,
                      status: "active",
                    });
                  }}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-semibold text-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Delete Admin</h2>
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setSelectedAdmin(null);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-red-400 to-pink-500 flex items-center justify-center text-white font-semibold">
                  {selectedAdmin.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-lg font-medium text-gray-900">{selectedAdmin.name}</div>
                  <div className="text-sm text-gray-500">{selectedAdmin.email}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this admin? This action cannot be undone.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={handleDelete}
                  disabled={isSubmitting}
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Admin
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setSelectedAdmin(null);
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminManagement;