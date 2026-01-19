"use client"

import { useState, useEffect } from "react"
import { Search, RefreshCw, Eye, X, Mail, User, MessageSquare, ChevronLeft, ChevronRight, Trash2 } from "lucide-react"
import axios from "axios"

interface ContactInquiry {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  subject: string
  message: string
  origin: string
  email_sent: number
  email_sent_to: string
  created_at: string
}

const ContactInquiriesManagement = () => {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [filterOrigin, setFilterOrigin] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [isDeleting, setIsDeleting] = useState(false)
  const itemsPerPage = 25

  useEffect(() => {
    fetchInquiries()
  }, [])

  const fetchInquiries = async () => {
    setIsLoading(true)
    setError(null)
    try {
      // Fetch all pages to get complete data
      const firstResponse = await axios.get("/api/contact-inquiries?page=1&limit=100", {
        timeout: 30000,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })

      let firstPageData = []
      let total = 0
      let totalPages = 1

      if (firstResponse.data && typeof firstResponse.data === "object") {
        if (firstResponse.data.data && Array.isArray(firstResponse.data.data)) {
          firstPageData = firstResponse.data.data
          total = firstResponse.data.total || firstPageData.length
          totalPages = firstResponse.data.totalPages || Math.ceil(total / 100)
        } else if (Array.isArray(firstResponse.data)) {
          firstPageData = firstResponse.data
          total = firstPageData.length
        }
      }

      // If there are more pages, fetch them all
      let allData = [...firstPageData]

      if (totalPages > 1) {
        console.log(`Fetching ${totalPages} pages of contact inquiries...`)
        const remainingPages = []
        for (let page = 2; page <= totalPages; page++) {
          remainingPages.push(
            axios.get(`/api/contact-inquiries?page=${page}&limit=100`, {
              timeout: 30000,
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
          )
        }

        const remainingResponses = await Promise.all(remainingPages)
        const remainingData = remainingResponses.flatMap((response) => {
          if (response.data && typeof response.data === "object") {
            if (response.data.data && Array.isArray(response.data.data)) {
              return response.data.data
            } else if (Array.isArray(response.data)) {
              return response.data
            }
          }
          return []
        })

        allData = [...allData, ...remainingData]
        console.log(`Fetched ${allData.length} total contact inquiries from ${totalPages} pages`)
      }

      setInquiries(allData)

      if (allData.length === 0) {
        setError("No contact inquiries found.")
      } else {
        console.log(`Successfully loaded ${allData.length} contact inquiries`)
      }
    } catch (error) {
      console.error("Error fetching contact inquiries:", error)
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          setError("Request timeout - API took too long to respond")
        } else {
          setError(`API Error: ${error.response?.status} - ${error.response?.statusText || error.message}`)
        }
      } else {
        setError("Failed to fetch contact inquiries. Please check your API connection.")
      }
      setInquiries([])
    } finally {
      setIsLoading(false)
    }
  }

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.message?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      filterOrigin === "all" ||
      inquiry.origin?.toLowerCase() === filterOrigin.toLowerCase()

    return matchesSearch && matchesFilter
  })

  // Sort by most recent first
  const sortedInquiries = [...filteredInquiries].sort((a, b) => {
    if (a.created_at && b.created_at) {
      const dateA = new Date(a.created_at).getTime()
      const dateB = new Date(b.created_at).getTime()
      return dateB - dateA
    }
    return (b.id || 0) - (a.id || 0)
  })

  // Pagination calculations
  const totalPages = Math.ceil(sortedInquiries.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedInquiries = sortedInquiries.slice(startIndex, endIndex)

  // Reset to page 1 when search or filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, filterOrigin])

  const handleViewDetails = (inquiry: ContactInquiry) => {
    setSelectedInquiry(inquiry)
    setShowDetailsModal(true)
  }

  const handleDeleteInquiry = async (id: number) => {
    if (!id) return

    const ok = window.confirm("Are you sure you want to delete this inquiry?")
    if (!ok) return

    setIsDeleting(true)
    try {
      const res = await axios.delete(`/api/contact-inquiries?id=${id}`)

      if (res?.data?.success) {
        // Remove from list immediately
        setInquiries((prev) => prev.filter((inq) => inq.id !== id))
        // Close modal
        setShowDetailsModal(false)
        setSelectedInquiry(null)
      } else {
        alert("Failed to delete inquiry")
      }
    } catch (e) {
      console.error("Delete inquiry failed:", e)
      alert("Failed to delete inquiry")
    } finally {
      setIsDeleting(false)
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A"
    try {
      return new Date(dateString).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } catch {
      return dateString
    }
  }

  // Get unique origins for filter
  const uniqueOrigins = Array.from(new Set(inquiries.map((inq) => inq.origin).filter(Boolean)))

  const totalCount = inquiries.length
  const talkToExpertCount = inquiries.filter((inq) => inq.origin === "Talk_To_Expert").length
  const contactCount = inquiries.filter((inq) => inq.origin === "contact").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-purple-600" />
            Contact Inquiries Management
          </h1>
          <p className="text-gray-600 mt-1">View and manage all form submissions and email inquiries</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total Inquiries</p>
              <p className="text-3xl font-bold mt-2">{totalCount}</p>
            </div>
            <MessageSquare className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Talk to Expert</p>
              <p className="text-3xl font-bold mt-2">{talkToExpertCount}</p>
            </div>
            <User className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Contact Form</p>
              <p className="text-3xl font-bold mt-2">{contactCount}</p>
            </div>
            <Mail className="w-8 h-8 opacity-80" />
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex gap-2 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="search"
                placeholder="Search by Name, Email, Phone, Subject..."
                className="w-full pl-10 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={filterOrigin}
              onChange={(e) => setFilterOrigin(e.target.value)}
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Origins</option>
              {uniqueOrigins.map((origin) => (
                <option key={origin} value={origin}>
                  {origin}
                </option>
              ))}
            </select>
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              onClick={fetchInquiries}
              disabled={isLoading}
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <RefreshCw className="h-8 w-8 animate-spin text-purple-500" />
            <span className="ml-2 text-gray-600">Loading inquiries...</span>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-red-500 text-lg font-medium">{error}</div>
            <p className="text-gray-500 mt-2">Please try refreshing the page</p>
          </div>
        ) : sortedInquiries.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No inquiries found</div>
            <p className="text-gray-400 mt-2">
              {searchTerm || filterOrigin !== "all" ? "Try adjusting your search or filter criteria" : "No contact inquiries available"}
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <tr>
                    <th className="pl-6 pr-2 py-2 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-2 py-2 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-2 py-2 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-2 py-2 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                      Origin
                    </th>
                    <th className="pl-2 pr-1 py-2 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="pl-1 pr-3 py-2 text-center text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="pl-6 pr-2 py-2 whitespace-nowrap">
                        <div className="text-xs font-medium text-gray-900">
                          {inquiry.first_name} {inquiry.last_name}
                        </div>
                      </td>
                      <td className="px-2 py-2 whitespace-nowrap">
                        <div className="text-xs text-gray-900">{inquiry.email}</div>
                        {inquiry.phone && (
                          <div className="text-[10px] text-gray-500">{inquiry.phone}</div>
                        )}
                      </td>
                      <td className="px-2 py-2">
                        <div className="text-xs text-gray-900 max-w-xs truncate">{inquiry.subject || "N/A"}</div>
                      </td>
                      <td className="px-2 py-2 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-[10px] font-semibold rounded-full bg-blue-100 text-blue-800">
                          {inquiry.origin || "Unknown"}
                        </span>
                      </td>
                      <td className="pl-2 pr-1 py-2 whitespace-nowrap">
                        <div className="text-xs text-gray-900">{formatDate(inquiry.created_at)}</div>
                      </td>
                      <td className="pl-1 pr-3 py-2 whitespace-nowrap text-center">
                        <button
                          className="bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 text-purple-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 flex items-center mx-auto"
                          onClick={() => handleViewDetails(inquiry)}
                        >
                          <Eye className="mr-1.5 h-3 w-3" />
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="bg-white border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-semibold">{startIndex + 1}</span> to{" "}
                  <span className="font-semibold">{Math.min(endIndex, sortedInquiries.length)}</span> of{" "}
                  <span className="font-semibold">{sortedInquiries.length}</span> inquiries
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum
                      if (totalPages <= 5) {
                        pageNum = i + 1
                      } else if (currentPage <= 3) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i
                      } else {
                        pageNum = currentPage - 2 + i
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-3 py-2 text-sm font-medium rounded-lg ${
                            currentPage === pageNum
                              ? "bg-purple-600 text-white"
                              : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                  </div>
                  
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Inquiry Details Modal */}
      {showDetailsModal && selectedInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                    Inquiry Details
                  </h2>
                  <p className="text-gray-500 mt-1">Submitted on {formatDate(selectedInquiry.created_at)}</p>
                </div>
                <button
                  onClick={() => {
                    setShowDetailsModal(false)
                    setSelectedInquiry(null)
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Personal Information</h3>
                  <div>
                    <p className="text-sm text-gray-600">Full Name</p>
                    <p className="text-base font-medium">{selectedInquiry.first_name} {selectedInquiry.last_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-base">{selectedInquiry.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-base">{selectedInquiry.phone || "N/A"}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Inquiry Information</h3>
                  <div>
                    <p className="text-sm text-gray-600">Subject</p>
                    <p className="text-base font-medium">{selectedInquiry.subject || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Origin</p>
                    <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
                      {selectedInquiry.origin || "Unknown"}
                    </span>
                  </div>
                </div>

                {selectedInquiry.message && (
                  <div className="md:col-span-2 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Message</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-base text-gray-700 whitespace-pre-wrap">{selectedInquiry.message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 flex justify-end gap-3 border-t border-gray-200">
              <button
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                disabled={isDeleting}
              >
                <Trash2 className={`w-4 h-4 ${isDeleting ? "animate-pulse" : ""}`} />
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => {
                  setShowDetailsModal(false)
                  setSelectedInquiry(null)
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactInquiriesManagement
