"use client"

import React, { useEffect, useState } from "react"
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Calendar,
  User,
  Tag,
  Image as ImageIcon,
  ExternalLink,
  FileText,
  Clock,
  TrendingUp,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Image from 'next/image';

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author_name: string
  author_email: string
  author_bio?: string
  status: "draft" | "published" | "archived"
  featured: boolean
  image_filename?: string
  image_path?: string
  tags: string[]
  publish_date: string
  created_at: string
  updated_at: string
  views: number
  meta_title?: string
  meta_description?: string
}

type ViewMode = "list" | "create" | "edit" | "view"

const BlogManagement = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [currentBlog, setCurrentBlog] = useState<BlogPost | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>("list")
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [featuredFilter, setFeaturedFilter] = useState<string>("all")

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author_name: "",
    author_email: "",
    author_bio: "",
    status: "draft" as "draft" | "published" | "archived",
    featured: false,
    tags: [] as string[],
    publish_date: "",
    meta_title: "",
    meta_description: "",
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const [tagInput, setTagInput] = useState("")

  const parseTags = (tags: any): string[] => {
    if (!tags) return []
    if (Array.isArray(tags)) return tags
    if (typeof tags === "string") {
      try {
        return JSON.parse(tags)
      } catch {
        return []
      }
    }
    return []
  }

  const fixImagePath = (imagePath: string): string => {
    if (!imagePath) return ""
    if (imagePath.startsWith("public/")) {
      return imagePath.replace("public/", "/")
    }
    if (!imagePath.startsWith("/")) {
      return "/" + imagePath
    }
    return imagePath
  }

  const fetchBlogs = async () => {
    setIsLoading(true)
    try {
      const token = localStorage.getItem("adminAuth")
      const response = await fetch(
        "https://edueye.co.in/ensurekar/existing-site/create_get_update_blog_posts.php",
        {
          headers: {
            "X-API-Key": token || "",
          },
        }
      )

      if (response.ok) {
        const data = await response.json()
        if (data && data.status === "success" && Array.isArray(data.data)) {
          const blogsWithParsedTags = data.data.map((blog: any) => ({
            ...blog,
            tags: parseTags(blog.tags),
          }))
          setBlogs(blogsWithParsedTags)
        } else if (Array.isArray(data)) {
          const blogsWithParsedTags = data.map((blog: any) => ({
            ...blog,
            tags: parseTags(blog.tags),
          }))
          setBlogs(blogsWithParsedTags)
        } else if (data && Array.isArray(data.blogs)) {
          const blogsWithParsedTags = data.blogs.map((blog: any) => ({
            ...blog,
            tags: parseTags(blog.tags),
          }))
          setBlogs(blogsWithParsedTags)
        } else if (data && Array.isArray(data.data)) {
          const blogsWithParsedTags = data.data.map((blog: any) => ({
            ...blog,
            tags: parseTags(blog.tags),
          }))
          setBlogs(blogsWithParsedTags)
        } else if (data && data.success && Array.isArray(data.result)) {
          const blogsWithParsedTags = data.result.map((blog: any) => ({
            ...blog,
            tags: parseTags(blog.tags),
          }))
          setBlogs(blogsWithParsedTags)
        } else {
          setBlogs([])
        }
      } else {
        setBlogs([])
      }
    } catch (error) {
      setBlogs([])
    } finally {
      setIsLoading(false)
    }
  }

  const fetchBlog = async (id: number) => {
    setIsLoading(true)
    try {
      const token = localStorage.getItem("adminAuth")
      const response = await fetch(
        `https://edueye.co.in/ensurekar/existing-site/create_get_update_blog_posts.php?id=${id}`,
        {
          headers: {
            "X-API-Key": token || "",
          },
        }
      )

      if (response.ok) {
        const data = await response.json()
        let normalized: any = data
        if (data && data.status === "success") {
          if (Array.isArray(data.data)) {
            normalized = data.data[0] || {}
          } else if (data.data && typeof data.data === "object") {
            normalized = data.data
          }
        }
        if (data && Array.isArray(data.data) && data.data.length === 1) {
          normalized = data.data[0]
        }
        if (data && Array.isArray(data.blogs) && data.blogs.length === 1) {
          normalized = data.blogs[0]
        }

        const blogData = {
          ...normalized,
          tags: parseTags(normalized?.tags),
        }

        setCurrentBlog(blogData)
        setFormData({
          title: blogData.title || "",
          slug: blogData.slug || "",
          excerpt: blogData.excerpt || "",
          content: blogData.content || "",
          author_name: blogData.author_name || "",
          author_email: blogData.author_email || "",
          author_bio: blogData.author_bio || "",
          status: blogData.status || "draft",
          featured: blogData.featured || false,
          tags: blogData.tags || [],
          publish_date: blogData.publish_date || "",
          meta_title: blogData.meta_title || "",
          meta_description: blogData.meta_description || "",
        })
        if (blogData.image_path) {
          setImagePreview(fixImagePath(blogData.image_path))
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  const openEditView = async (id: number) => {
    await fetchBlog(id)
    setViewMode("edit")
  }

  const openReadView = async (id: number) => {
    await fetchBlog(id)
    setViewMode("view")
  }

  const uploadImage = async (file: File) => {
    const formDataToSend = new FormData()
    formDataToSend.append("image", file)
    formDataToSend.append("folder", "blogImage")

    const response = await fetch("/api/upload-image", {
      method: "POST",
      body: formDataToSend,
    })

    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error("Failed to upload image")
    }
  }

  const createBlog = async () => {
    setIsLoading(true)
    try {
      const token = localStorage.getItem("adminAuth")

      let imageData = null as any
      if (selectedImage) {
        imageData = await uploadImage(selectedImage)
      }

      const blogData = {
        ...formData,
        ...(imageData && {
          image_filename: imageData.filename,
          image_path: imageData.path,
        }),
      }

      const response = await fetch(
        "https://edueye.co.in/ensurekar/existing-site/create_get_update_blog_posts.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": token || "",
          },
          body: JSON.stringify(blogData),
        }
      )

      if (response.ok) {
        alert("Blog created successfully!")
        setViewMode("list")
        resetForm()
        fetchBlogs()
      } else {
        const errorData = await response.json()
        alert(`Failed to create blog: ${errorData.error}`)
      }
    } catch (error) {
      alert("Error creating blog")
    } finally {
      setIsLoading(false)
    }
  }

  const updateBlog = async () => {
    if (!currentBlog) return
    setIsLoading(true)
    try {
      const token = localStorage.getItem("adminAuth")

      let imageData = null as any
      if (selectedImage) {
        imageData = await uploadImage(selectedImage)
      }

      const blogData = {
        id: currentBlog.id,
        ...formData,
        views: typeof currentBlog.views === "number" ? currentBlog.views : undefined,
        ...(imageData && {
          image_filename: imageData.filename,
          image_path: imageData.path,
        }),
      }

      const response = await fetch(
        "https://edueye.co.in/ensurekar/existing-site/create_get_update_blog_posts.php",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": token || "",
          },
          body: JSON.stringify(blogData),
        }
      )

      if (response.ok) {
        alert("Blog updated successfully!")
        setViewMode("list")
        resetForm()
        fetchBlogs()
      } else {
        const errorData = await response.json()
        alert(`Failed to update blog: ${errorData.error}`)
      }
    } catch (error) {
      alert("Error updating blog")
    } finally {
      setIsLoading(false)
    }
  }

//   const deleteBlog = async (id: number) => {
//     if (!confirm("Are you sure you want to delete this blog?")) return
//     setIsLoading(true)
//     try {
//       const token = localStorage.getItem("adminAuth")

//       const blog = Array.isArray(blogs) ? blogs.find(b => b.id === id) : null
//       if (blog?.image_filename) {
//         await fetch("/api/delete-image", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ filename: blog.image_filename, folder: "blogImage" }),
//         })
//       }

//       const response = await fetch(
//         "https://edueye.co.in/ensurekar/existing-site/delete_blog_post.php",
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             "X-API-Key": token || "",
//           },
//           body: JSON.stringify({ id }),
//         }
//       )

//       if (response.ok) {
//         alert("Blog deleted successfully!")
//         fetchBlogs()
//       } else {
//         const errorData = await response.json()
//         alert(`Failed to delete blog: ${errorData.error}`)
//       }
//     } catch (error) {
//       alert("Error deleting blog")
//     } finally {
//       setIsLoading(false)
//     }
//   }

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      author_name: "",
      author_email: "",
      author_bio: "",
      status: "draft",
      featured: false,
      tags: [],
      publish_date: "",
      meta_title: "",
      meta_description: "",
    })
    setSelectedImage(null)
    setImagePreview("")
    setTagInput("")
    setCurrentBlog(null)
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onload = (ev) => {
        setImagePreview(ev.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] })
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(tag => tag !== tagToRemove) })
  }

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  }

  const filteredBlogs = Array.isArray(blogs) ? blogs.filter(blog => {
    const blogTags = parseTags(blog.tags)
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blogTags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = statusFilter === "all" || blog.status === statusFilter
    const matchesFeatured =
      featuredFilter === "all" ||
      (featuredFilter === "featured" && blog.featured) ||
      (featuredFilter === "not-featured" && !blog.featured)
    return matchesSearch && matchesStatus && matchesFeatured
  }) : []

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  if (viewMode === "list") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">📝 Blog Management</h1>
                <p className="text-lg text-gray-600">Create, edit, and manage your blog content</p>
              </div>
              <button
                onClick={() => setViewMode("create")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <Plus className="w-5 h-5" />
                Create New Blog
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="p-2.5 bg-blue-100 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-xs font-medium text-gray-500">Total Blogs</p>
                  <p className="text-xl font-bold text-gray-900">{Array.isArray(blogs) ? blogs.length : 0}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="p-2.5 bg-green-100 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <p className="text-xs font-medium text-gray-500">Published</p>
                  <p className="text-xl font-bold text-gray-900">{Array.isArray(blogs) ? blogs.filter(b => b.status === "published").length : 0}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="p-2.5 bg-yellow-100 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="ml-3">
                  <p className="text-xs font-medium text-gray-500">Drafts</p>
                  <p className="text-xl font-bold text-gray-900">{Array.isArray(blogs) ? blogs.filter(b => b.status === "draft").length : 0}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search blogs by title, author, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-colors text-sm shadow-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-colors text-sm shadow-sm"
                >
                  <option value="all">All Status</option>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
                <select
                  value={featuredFilter}
                  onChange={(e) => setFeaturedFilter(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-colors text-sm shadow-sm"
                >
                  <option value="all">All Posts</option>
                  <option value="featured">Featured</option>
                  <option value="not-featured">Not Featured</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {isLoading ? (
              <div className="p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-gray-600 mt-4 text-lg">Loading blogs...</p>
              </div>
            ) : (
              <div className="p-6">
                {filteredBlogs.length === 0 ? (
                  <div className="text-center py-12">
                    {!Array.isArray(blogs) ? (
                      <div>
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <AlertCircle className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">API Error</h3>
                        <p className="text-gray-500">API returned invalid data format</p>
                        <p className="text-sm text-gray-400 mt-2">Check console for details</p>
                      </div>
                    ) : (
                      <div>
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No blogs found</h3>
                        <p className="text-gray-500">No blogs match your current filters</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredBlogs.map((blog) => (
                      <div key={blog.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300">
                        <div className="mb-4">
                          {blog.image_filename ? (
                            <Image src={fixImagePath(blog.image_path || '')} alt={blog.title} className="w-full h-48 object-cover rounded-lg" width={640} height={192} />
                          ) : (
                            <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                              <FileText className="w-12 h-12 text-gray-400" />
                            </div>
                          )}
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{blog.title}</h3>
                            {blog.featured && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 ml-2 flex-shrink-0">⭐ Featured</span>
                            )}
                          </div>

                          <p className="text-gray-600 text-sm line-clamp-3">{blog.excerpt}</p>

                          {blog.tags && (
                            <div className="flex flex-wrap gap-1">
                              {(() => {
                                const blogTags = parseTags(blog.tags)
                                return blogTags.slice(0, 3).map((tag, index) => (
                                  <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    <Tag className="w-3 h-3 mr-1" />
                                    {tag}
                                  </span>
                                ))
                              })()}
                              {(() => {
                                const blogTags = parseTags(blog.tags)
                                return blogTags.length > 3 && (
                                  <span className="text-xs text-gray-500 px-2 py-1">+{blogTags.length - 3} more</span>
                                )
                              })()}
                            </div>
                          )}

                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {blog.author_name}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              blog.status === "published"
                                ? "bg-green-100 text-green-800"
                                : blog.status === "draft"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}>{blog.status}</span>
                            <div className="flex items-center text-xs text-gray-500">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(blog.publish_date).toLocaleDateString()}
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-100">
                            <button onClick={() => openReadView(blog.id)} className="w-full sm:flex-1 min-w-[100px] bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors inline-flex items-center justify-center gap-2 text-sm">
                              <Eye className="w-4 h-4" />
                              View
                            </button>
                            <button onClick={() => openEditView(blog.id)} className="w-full sm:flex-1 min-w-[100px] bg-indigo-50 text-indigo-600 px-3 py-2 rounded-lg hover:bg-indigo-100 transition-colors inline-flex items-center justify-center gap-2 text-sm">
                              <Edit className="w-4 h-4" />
                              Edit
                            </button>
                            {/* <button onClick={() => deleteBlog(blog.id)} className="w-full sm:flex-1 min-w-[100px] bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors inline-flex items-center justify-center gap-2 text-sm">
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </button> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (viewMode === "create" || viewMode === "edit") {
    return (
      <div className="space-y-4 bg-white">
        <div className="flex items-center gap-3">
          <button onClick={() => { setViewMode("list"); resetForm() }} className="text-gray-600 hover:text-gray-900">
            <ExternalLink className="w-5 h-5 rotate-180" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{viewMode === "create" ? "Create New Blog" : "Edit Blog"}</h1>
            <p className="text-gray-600 mt-0.5 text-sm">{viewMode === "create" ? "Create a new blog post" : "Edit existing blog post"}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-4">
          <form onSubmit={(e) => { e.preventDefault(); viewMode === "create" ? createBlog() : updateBlog() }} className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input type="text" required value={formData.title} onChange={(e) => { setFormData({ ...formData, title: e.target.value }); if (!formData.slug) { setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) }) } }} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter blog title" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
                <input type="text" required value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="blog-post-slug" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt *</label>
              <textarea required rows={3} value={formData.excerpt} onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Brief description of the blog post" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
              <textarea required rows={3} value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Write your blog content here..." />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author Name *</label>
                <input type="text" required value={formData.author_name} onChange={(e) => setFormData({ ...formData, author_name: e.target.value })} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Author name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author Email *</label>
                <input type="email" required value={formData.author_email} onChange={(e) => setFormData({ ...formData, author_email: e.target.value })} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="author@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Author Bio</label>
              <textarea rows={2} value={formData.author_bio} onChange={(e) => setFormData({ ...formData, author_bio: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Brief author bio" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
              <div className="flex items-center gap-3">
                <input type="file" accept="image/*" onChange={handleImageSelect} className="hidden" id="image-upload" />
                <label htmlFor="image-upload" className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg border border-gray-300 flex items-center gap-2 text-sm">
                  <ImageIcon className="w-4 h-4" />
                  Choose Image
                </label>
                {imagePreview && (
                  <Image src={fixImagePath(imagePreview)} alt="Preview" className="w-16 h-16 object-cover rounded-lg" width={64} height={64} />
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
              <div className="flex gap-2 mb-2">
                <input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())} className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Add a tag and press Enter" />
                <button type="button" onClick={addTag} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">Add</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {tag}
                    <button type="button" onClick={() => removeTag(tag)} className="ml-2 text-blue-600 hover:text-blue-800">×</button>
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value as any })} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
                <input type="datetime-local" value={formData.publish_date} onChange={(e) => setFormData({ ...formData, publish_date: e.target.value })} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="featured" checked={formData.featured} onChange={(e) => setFormData({ ...formData, featured: e.target.checked })} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">Featured Post</label>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">SEO Settings</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                <input type="text" value={formData.meta_title} onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })} className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="SEO title for search engines" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                <textarea rows={3} value={formData.meta_description} onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="SEO description for search engines" />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <button type="button" onClick={() => { setViewMode("list"); resetForm() }} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm">Cancel</button>
              <button type="submit" disabled={isLoading} className="px-5 py-2 bg-[#16a34a]! text-white rounded-lg hover:bg-[#15803d] disabled:opacity-50 inline-flex items-center gap-2 text-sm" style={{ backgroundColor: "#16a34a", color: "#ffffff" }}>
                {isLoading && <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>}
                {viewMode === "create" ? "Create Blog" : "Update Blog"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  if (viewMode === "view" && currentBlog) {
    return (
      <div className="space-y-6 bg-white">
        <div className="flex items-center gap-4 bg-white">
          <button onClick={() => setViewMode("list")} className="text-gray-600 hover:text-gray-900">
            <ExternalLink className="w-5 h-5 rotate-180" />
          </button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">{currentBlog.title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                currentBlog.status === "published"
                  ? "bg-green-100 text-green-800"
                  : currentBlog.status === "draft"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-800"
              }`}>{currentBlog.status}</span>
              {currentBlog.featured && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Featured</span>
              )}
              
            </div>
          </div>
          <button onClick={() => openEditView(currentBlog.id)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 inline-flex items-center gap-2">
            <Edit className="w-4 h-4" />
            Edit
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          {currentBlog.image_filename && (
            <div className="p-6 border-b">
              <Image src={fixImagePath(currentBlog.image_path || '')} alt={currentBlog.title} className="w-full h-64 object-cover rounded-lg" width={640} height={256} />
            </div>
          )}

          <div className="p-6 border-b">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Author</h3>
                <div className="text-sm text-gray-900">{currentBlog.author_name}</div>
                <div className="text-sm text-gray-500">{currentBlog.author_email}</div>
                {currentBlog.author_bio && (
                  <div className="text-sm text-gray-600 mt-1">{currentBlog.author_bio}</div>
                )}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Publication Details</h3>
                <div className="text-sm text-gray-900">Published: {new Date(currentBlog.publish_date).toLocaleDateString()}</div>
                <div className="text-sm text-gray-500">Created: {new Date(currentBlog.created_at).toLocaleDateString()}</div>
                <div className="text-sm text-gray-500">Updated: {new Date(currentBlog.updated_at).toLocaleDateString()}</div>
              </div>
            </div>
          </div>

          {currentBlog.tags.length > 0 && (
            <div className="p-6 border-b">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {currentBlog.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="p-6 border-b">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Excerpt</h3>
            <p className="text-gray-900">{currentBlog.excerpt}</p>
          </div>

          <div className="p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Content</h3>
            <div className="prose max-w-none">
              <div className="whitespace-pre-wrap text-gray-900">{currentBlog.content}</div>
            </div>
          </div>

          {(currentBlog.meta_title || currentBlog.meta_description) && (
            <div className="p-6 border-t bg-gray-50">
              <h3 className="text-sm font-medium text-gray-500 mb-4">SEO Information</h3>
              <div className="space-y-3">
                {currentBlog.meta_title && (
                  <div>
                    <div className="text-sm font-medium text-gray-700">Meta Title</div>
                    <div className="text-sm text-gray-900">{currentBlog.meta_title}</div>
                  </div>
                )}
                {currentBlog.meta_description && (
                  <div>
                    <div className="text-sm font-medium text-gray-700">Meta Description</div>
                    <div className="text-sm text-gray-900">{currentBlog.meta_description}</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}

export default BlogManagement
