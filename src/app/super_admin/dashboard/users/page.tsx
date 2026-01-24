"use client"

import { useState, useEffect } from "react"
import { Search, RefreshCw, Eye, X, Users, UserCheck, Crown, Shield, CreditCard, Receipt, Download } from "lucide-react"
import axios from "axios"

interface UserData {
  id: string
  uid: string
  userName: string
  firstName: string
  lastName: string
  fatherName: string
  DOB: string
  sex: string
  maritalStatus: string
  company: string
  organisationType: string
  pan: string
  aadhar: string
  din: string
  addressProof: string
  addressProofName: string
  nationality: string
  bank: string
  accountNumber: string
  ifsc: string
  address: string
  state: string
  city: string
  pin: string
  email: string
  secondaryEmail: string
  contactNo: string
  secondaryContact: string
  created_at: string
}

// Columns to hide in All Orders (Full Details) modal and Excel export
const ORDER_COLS_HIDDEN = ["image_src", "image_height", "image_width"]

const SuperAdminUsersManagement = () => {
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editFormData, setEditFormData] = useState<UserData | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)
  const [users, setUsers] = useState<UserData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [userOrders, setUserOrders] = useState<any[]>([])
  const [loadingOrders, setLoadingOrders] = useState(false)
  const [showAllOrdersModal, setShowAllOrdersModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12) // 12 items per page (4 rows x 3 columns on desktop)

  useEffect(() => {
    console.log("SuperAdminUsersManagement component mounted")
    return () => {
      console.log("SuperAdminUsersManagement component unmounted")
    }
  }, [])

  const fetchUsers = async () => {
    console.log("=== FETCH USERS STARTED ===")
    setIsLoading(true)
    setError(null)
    try {
      console.log("Making API call to:", "/api/userinfo-get")

      const response = await axios.get("/api/userinfo-get", {
        timeout: 10000, // 10 second timeout
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })

      console.log("=== API RESPONSE RECEIVED ===")
      console.log("Response status:", response.status)
      console.log("Response headers:", response.headers)
      console.log("Full response object:", response)
      console.log("Response data:", response.data)
      console.log("Response data type:", typeof response.data)
      console.log("Response data keys:", response.data ? Object.keys(response.data) : "No keys")

      let data
      if (response.data && typeof response.data === "object") {
        // Check if response has nested data property
        if (response.data.data && Array.isArray(response.data.data)) {
          data = response.data.data
          console.log("✅ Using nested data array, length:", data.length)
        }
        // Check if response.data is directly an array
        else if (Array.isArray(response.data)) {
          data = response.data
          console.log("✅ Using direct data array, length:", data.length)
        }
        // Check if response has success property and data
        else if (response.data.success && response.data.data) {
          data = response.data.data
          console.log("✅ Using success.data array, length:", data.length)
        } else {
          console.log("❌ Unexpected response structure:", response.data)
          console.log("Available keys:", Object.keys(response.data))
          data = []
        }
      } else {
        console.log("❌ Response data is not an object:", response.data)
        data = []
      }

      console.log("=== DATA TRANSFORMATION ===")
      console.log("Final data to transform:", data)
      console.log("Data is array:", Array.isArray(data))
      console.log("Data length:", data?.length)

      if (Array.isArray(data) && data.length > 0) {
        console.log("First item structure:", data[0])
        console.log("First item keys:", Object.keys(data[0]))
      }

      const transformedUsers: UserData[] = Array.isArray(data)
        ? data.map((user: any, index: number) => {
            console.log(`Transforming user ${index + 1}/${data.length}:`, {
              id: user.id,
              userName: user.userName,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            })
            return {
              id: user.id || "",
              uid: user.uid || "",
              userName: user.userName || "",
              firstName: user.firstName || "",
              lastName: user.lastName || "",
              fatherName: user.fatherName || "",
              DOB: user.DOB || "",
              sex: user.sex || "",
              maritalStatus: user.maritalStatus || "",
              company: user.company || "",
              organisationType: user.organisationType || "",
              pan: user.pan || "",
              aadhar: user.aadhar || "",
              din: user.din || "",
              addressProof: user.addressProof || "",
              addressProofName: user.addressProofName || "",
              nationality: user.nationality || "",
              bank: user.bank || "",
              accountNumber: user.accountNumber || "",
              ifsc: user.ifsc || "",
              address: user.address || "",
              state: user.state || "",
              city: user.city || "",
              pin: user.pin || "",
              email: user.email || "",
              secondaryEmail: user.secondaryEmail || "",
              contactNo: user.contactNo || "",
              secondaryContact: user.secondaryContact || "",
              created_at: user.created_at || "",
            }
          })
        : []

      console.log("=== TRANSFORMATION COMPLETE ===")
      console.log("Transformed users count:", transformedUsers.length)
      console.log("First transformed user:", transformedUsers[0])

      console.log("Setting users state with:", transformedUsers.length, "users")
      setUsers(transformedUsers)

      setTimeout(() => {
        console.log("State verification - users length after setState:", transformedUsers.length)
      }, 100)

      if (transformedUsers.length === 0) {
        const errorMsg = "No user data found in the API response."
        console.log("❌", errorMsg)
        setError(errorMsg)
      } else {
        console.log("✅ Successfully loaded", transformedUsers.length, "users")
      }
    } catch (error) {
      console.log("=== API ERROR ===")
      console.error("Error fetching users:", error)

      if (axios.isAxiosError(error)) {
        console.error("Axios error details:", {
          message: error.message,
          code: error.code,
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          headers: error.response?.headers,
        })

        if (error.code === "ECONNABORTED") {
          setError("Request timeout - API took too long to respond")
        } else if (error.response?.status === 0) {
          setError("Network error - Check if API is accessible or CORS is configured")
        } else {
          setError(`API Error: ${error.response?.status} - ${error.response?.statusText || error.message}`)
        }
      } else {
        console.error("Non-axios error:", error)
        setError("Failed to fetch user data. Please check your API connection.")
      }
      setUsers([])
    } finally {
      setIsLoading(false)
      console.log("=== FETCH USERS COMPLETED ===")
    }
  }

  useEffect(() => {
    console.log("Component useEffect triggered - calling fetchUsers")
    fetchUsers()
  }, [])

  useEffect(() => {
    console.log("Users state changed. New length:", users.length)
    if (users.length > 0) {
      console.log("First user in state:", users[0])
    }
  }, [users])

  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase()

    return (
      (user.firstName || "").toLowerCase().includes(term) ||
      (user.lastName || "").toLowerCase().includes(term) ||
      (user.userName || "").toLowerCase().includes(term) ||
      (user.email || "").toLowerCase().includes(term) ||
      (user.contactNo || "").toLowerCase().includes(term) ||
      (user.company || "").toLowerCase().includes(term) ||
      (user.city || "").toLowerCase().includes(term) ||
      (user.state || "").toLowerCase().includes(term) ||
      String(user.id || "").toLowerCase().includes(term)
    )
  })

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem)

  // Reset to page 1 when search term changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const handleViewUser = async (user: UserData) => {
    setSelectedUser(user)
    setShowUserDetailsModal(true)
    setIsEditMode(false)
    setEditFormData(null)
    // Fetch user orders/billing information
    await fetchUserOrders(user.email)
  }

  const fetchUserOrders = async (email: string) => {
    if (!email) return
    setLoadingOrders(true)
    try {
      // Fetch first page to get total count
      const firstResponse = await axios.get("/api/orderid-get?page=1&limit=100", {
        headers: { "Content-Type": "application/json" },
      })
      
      const firstPageData = firstResponse.data?.data || []
      const total = firstResponse.data?.total || 0
      const limit = 100 // Max limit per page
      const totalPages = Math.ceil(total / limit)
      
      // If there are more pages, fetch them all
      let allOrders = [...firstPageData]
      
      if (totalPages > 1) {
        const remainingPages = []
        for (let page = 2; page <= totalPages; page++) {
          remainingPages.push(
            axios.get(`/api/orderid-get?page=${page}&limit=${limit}`, {
              headers: { "Content-Type": "application/json" },
            })
          )
        }
        
        const remainingResponses = await Promise.all(remainingPages)
        const remainingData = remainingResponses.flatMap(
          (response) => response.data?.data || []
        )
        allOrders = [...allOrders, ...remainingData]
      }
      
      // Filter orders by email
      const filteredOrders = allOrders.filter(
        (order: any) => order.customer_email === email || order.billing_email === email
      )
      
      console.log(`Fetched ${allOrders.length} total orders, ${filteredOrders.length} for ${email}`)
      setUserOrders(filteredOrders)
    } catch (error) {
      console.error("Error fetching user orders:", error)
      setUserOrders([])
    } finally {
      setLoadingOrders(false)
    }
  }

  const handleEditUser = () => {
    setIsEditMode(true)
    setEditFormData({ ...selectedUser! })
  }

  const handleCancelEdit = () => {
    setIsEditMode(false)
    setEditFormData(null)
  }

  const handleInputChange = (field: keyof UserData, value: string) => {
    if (editFormData) {
      setEditFormData({
        ...editFormData,
        [field]: value,
      })
    }
  }

  const handleUpdateUser = async () => {
    if (!editFormData) return

    // Transform flat data structure to nested structure expected by API
    const apiData = {
      uid: editFormData.uid || editFormData.id,
      personal: {
        id: editFormData.id,
        userName: editFormData.userName,
        firstName: editFormData.firstName,
        lastName: editFormData.lastName,
        fatherName: editFormData.fatherName,
        DOB: editFormData.DOB,
        sex: editFormData.sex,
        maritalStatus: editFormData.maritalStatus,
      },
      company: {
        company: editFormData.company,
        organisationType: editFormData.organisationType,
      },
      identity: {
        pan: editFormData.pan,
        aadhar: editFormData.aadhar,
        din: editFormData.din,
        addressProof: editFormData.addressProof || null,
        addressProofName: editFormData.addressProofName || null,
        nationality: editFormData.nationality || null,
      },
      bank: {
        bank: editFormData.bank,
        accountNumber: editFormData.accountNumber,
        ifsc: editFormData.ifsc,
      },
      address: {
        email: editFormData.email, // Primary email (needed for WHERE clause)
        secondaryEmail: editFormData.secondaryEmail,
        address: editFormData.address,
        state: editFormData.state,
        city: editFormData.city,
        pin: editFormData.pin,
        contactNo: editFormData.contactNo,
        secondaryContact: editFormData.secondaryContact,
      },
    }

    console.log("Updating user with data:", apiData)
    setIsUpdating(true)
    try {
      const response = await axios.post("/api/userinfo-post", apiData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      console.log("Update response:", response.data)

      if (response.data.success) {
        // Update the user in the local state
        setUsers((prevUsers) => prevUsers.map((user) => (user.id === editFormData.id ? editFormData : user)))
        setSelectedUser(editFormData)
        setIsEditMode(false)
        setEditFormData(null)
        alert("User updated successfully!")
      } else {
        alert("Failed to update user: " + (response.data.message || "Unknown error"))
      }
    } catch (error: any) {
      console.error("Error updating user:", error)
      const errorMessage = error.response?.data?.message || error.message || "Unknown error"
      alert("Error updating user: " + errorMessage)
    } finally {
      setIsUpdating(false)
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A"
    try {
      return new Date(dateString).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    } catch {
      return dateString
    }
  }

  const exportToExcel = () => {
    if (!userOrders || userOrders.length === 0) {
      alert("No order data to export")
      return
    }

    try {
      // Get all unique keys from all orders, excluding hidden columns
      const allKeys = new Set<string>()
      userOrders.forEach((order: any) => {
        Object.keys(order).forEach((key) => {
          if (!ORDER_COLS_HIDDEN.includes(key)) allKeys.add(key)
        })
      })
      const headers = Array.from(allKeys)

      // Create CSV content
      const csvHeaders = headers.map((key) => `"${key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}"`).join(",")
      
      const csvRows = userOrders.map((order: any) => {
        return headers
          .map((key) => {
            const value = order[key]
            // Handle null, undefined, and convert to string
            if (value === null || value === undefined) return '""'
            // Escape quotes and wrap in quotes
            const stringValue = String(value).replace(/"/g, '""')
            return `"${stringValue}"`
          })
          .join(",")
      })

      const csvContent = [csvHeaders, ...csvRows].join("\n")

      // Add BOM for UTF-8 (Excel compatibility)
      const BOM = "\uFEFF"
      const blob = new Blob([BOM + csvContent], { type: "text/csv;charset=utf-8;" })

      // Create download link
      const link = document.createElement("a")
      const url = URL.createObjectURL(blob)
      const fileName = `user_orders_${selectedUser?.firstName || "user"}_${selectedUser?.lastName || "data"}_${new Date().toISOString().split("T")[0]}.csv`
      
      link.setAttribute("href", url)
      link.setAttribute("download", fileName)
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      alert("Order data exported successfully!")
    } catch (error) {
      console.error("Error exporting to Excel:", error)
      alert("Failed to export data. Please try again.")
    }
  }

  const getUserStatus = (user: UserData) => {
    const requiredFields = [user.firstName, user.lastName, user.email, user.contactNo, user.pan]
    const completedFields = requiredFields.filter((field) => field && field.trim() !== "").length

    if (completedFields === requiredFields.length) return "Complete"
    if (completedFields >= 3) return "Partial"
    return "Incomplete"
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "complete":
        return "bg-green-100 text-green-800"
      case "partial":
        return "bg-yellow-100 text-yellow-800"
      case "incomplete":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  console.log("=== RENDER ===")
  console.log("Current state:", {
    usersCount: users.length,
    isLoading,
    error,
    searchTerm,
    filteredUsersCount: filteredUsers.length,
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Users className="w-8 h-8 text-purple-600" />
            User Management
          </h1>
          <p className="text-gray-600 mt-1">Manage all user accounts and their information</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg px-4 py-2">
            <Crown className="w-5 h-5" />
            <span className="text-sm font-medium">Super Admin</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total Users</p>
              <p className="text-3xl font-bold mt-2">{users.length}</p>
            </div>
            <Users className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Complete Profiles</p>
              <p className="text-3xl font-bold mt-2">
                {users.filter((user) => getUserStatus(user) === "Complete").length}
              </p>
            </div>
            <UserCheck className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Partial Profiles</p>
              <p className="text-3xl font-bold mt-2">
                {users.filter((user) => getUserStatus(user) === "Partial").length}
              </p>
            </div>
            <Shield className="w-8 h-8 opacity-80" />
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex gap-2 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none z-10" />
              <input
                type="search"
                placeholder="Search users by name, email, company, or ID..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a8b82] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400"
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#1a8b82'
                  e.currentTarget.style.boxShadow = '0 0 0 2px rgba(26, 139, 130, 0.2)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#d1d5db'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              className="text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center font-medium"
              style={{ backgroundColor: '#1a8b82' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#158876'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1a8b82'
              }}
              onClick={fetchUsers}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Debug Info */}
      {/* <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
        <strong>Debug Info:</strong> Users: {users.length} | Loading: {isLoading.toString()} | Error:{" "}
        {error || "None"} | Filtered: {filteredUsers.length}
      </div> */}

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <RefreshCw className="h-8 w-8 animate-spin text-purple-500" />
            <span className="ml-2 text-gray-600">Loading users...</span>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-red-500 text-lg font-medium">{error}</div>
            <p className="text-gray-500 mt-2">Please try refreshing the page</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No users found</div>
            <p className="text-gray-400 mt-2">
              {searchTerm ? "Try adjusting your search criteria" : "No user data available"}
            </p>
          </div>
        ) : (
          <>
            {/* Responsive Card Grid Layout */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {currentUsers.map((user) => {
                  const cardId = `card-${user.id}`
                  return (
                  <div
                    key={user.id}
                    id={cardId}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:bg-white"
                    onMouseEnter={(e) => {
                      const header = e.currentTarget.querySelector('.card-header') as HTMLElement
                      const avatar = e.currentTarget.querySelector('.card-avatar') as HTMLElement
                      if (header) header.style.backgroundColor = '#fbbf24'
                      if (avatar) avatar.style.color = '#fbbf24'
                    }}
                    onMouseLeave={(e) => {
                      const header = e.currentTarget.querySelector('.card-header') as HTMLElement
                      const avatar = e.currentTarget.querySelector('.card-avatar') as HTMLElement
                      if (header) header.style.backgroundColor = '#1a8b82'
                      if (avatar) avatar.style.color = '#1a8b82'
                    }}
                  >
                    {/* Card Header with Avatar */}
                    <div 
                      className="card-header p-4 transition-colors duration-300" 
                      style={{ backgroundColor: '#1a8b82' }}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="card-avatar h-12 w-12 rounded-full bg-white flex items-center justify-center font-bold text-lg shadow-md transition-colors duration-300" 
                          style={{ color: '#1a8b82' }}
                        >
                          {user.firstName.charAt(0)}
                          {user.lastName.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-sm truncate group-hover:text-gray-900 transition-colors duration-300">
                            {user.firstName} {user.lastName}
                          </h3>
                          <p className="text-white/80 text-xs group-hover:text-gray-700 transition-colors duration-300">ID: {user.id}</p>
                          {user.created_at && (
                            <p className="text-white/70 text-xs group-hover:text-gray-600 transition-colors duration-300 mt-0.5">
                              Created: {formatDate(user.created_at)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 space-y-3 transition-colors duration-300">
                      {/* Company Info */}
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Company</p>
                          <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 truncate transition-colors duration-300">{user.company || "N/A"}</p>
                          <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{user.organisationType || ""}</p>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Email</p>
                          <p className="text-sm text-gray-900 group-hover:text-gray-900 truncate transition-colors duration-300">{user.email}</p>
                        </div>
                      </div>

                      {user.contactNo && (
                        <div className="flex items-start gap-2">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Contact</p>
                            <p className="text-sm text-gray-900 group-hover:text-gray-900 transition-colors duration-300">{user.contactNo}</p>
                          </div>
                        </div>
                      )}

                      {/* Status Badge */}
                      <div className="pt-2 border-t border-gray-100 group-hover:border-gray-300 transition-colors duration-300">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Status</span>
                          <span
                            className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${
                              getUserStatus(user) === "Complete"
                                ? "bg-green-100 text-green-800 group-hover:bg-yellow-100 group-hover:text-yellow-800"
                                : getUserStatus(user) === "Partial"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {getUserStatus(user)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer - Action Button */}
                    <div className="px-4 pb-4">
                      <button
                        className="w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md text-white group-hover:text-gray-900"
                        style={{ backgroundColor: '#1a8b82' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#fbbf24'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#1a8b82'
                        }}
                        onClick={() => handleViewUser(user)}
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                  )
                })}
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-gray-700">
                    Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
                    <span className="font-medium">{Math.min(indexOfLastItem, filteredUsers.length)}</span> of{" "}
                    <span className="font-medium">{filteredUsers.length}</span> users
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
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
                            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                              currentPage === pageNum
                                ? "text-white"
                                : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                            }`}
                            style={currentPage === pageNum ? { backgroundColor: '#1a8b82' } : {}}
                          >
                            {pageNum}
                          </button>
                        )
                      })}
                    </div>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* User Details Modal */}
      {showUserDetailsModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <Crown className="w-6 h-6 text-purple-600" />
                    {isEditMode ? "Edit User" : "User Details"}
                  </h2>
                  <p className="text-gray-600">
                    {selectedUser.firstName} {selectedUser.lastName}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {!isEditMode ? (
                    <button
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2"
                      onClick={handleEditUser}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2 disabled:opacity-50"
                        onClick={handleUpdateUser}
                        disabled={isUpdating}
                      >
                        {isUpdating ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {isUpdating ? "Updating..." : "Save"}
                      </button>
                      <button
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                        onClick={handleCancelEdit}
                        disabled={isUpdating}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setShowUserDetailsModal(false)
                      setIsEditMode(false)
                      setEditFormData(null)
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                      <th className="text-left py-4 px-6 font-semibold text-lg border-b border-gray-300 w-1/3">
                        Personal Information
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-lg border-b border-gray-300 w-1/3">
                        Contact & Address
                      </th>
                      <th className="text-left py-4 px-6 font-semibold text-lg border-b border-gray-300 w-1/3">
                        Business & Financial
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Personal Information Rows */}
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">User ID</div>
                        <div className="text-gray-900 font-mono bg-gray-50 px-2 py-1 rounded">{selectedUser.id}</div>
                      </td>
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">Primary Email</div>
                        <div className="text-gray-600 bg-gray-100 px-3 py-2 rounded-md border border-gray-300 cursor-not-allowed">
                          {selectedUser.email}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">This field cannot be edited</p>
                      </td>
                      <td className="py-3 px-6 text-sm">
                        <div className="font-medium text-gray-700 mb-1">Company</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.company || ""}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.company}</div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">Username</div>
                        <div className="text-gray-600 bg-gray-100 px-3 py-2 rounded-md border border-gray-300 cursor-not-allowed">
                          {selectedUser.userName}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">This field cannot be edited</p>
                      </td>
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">Secondary Email</div>
                        {isEditMode ? (
                          <input
                            type="email"
                            value={editFormData?.secondaryEmail || ""}
                            onChange={(e) => handleInputChange("secondaryEmail", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.secondaryEmail || "Not provided"}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm">
                        <div className="font-medium text-gray-700 mb-1">Organisation Type</div>
                        {isEditMode ? (
                          <select
                            value={editFormData?.organisationType || ""}
                            onChange={(e) => handleInputChange("organisationType", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          >
                            <option value="Private">Private</option>
                            <option value="Public">Public</option>
                            <option value="Government">Government</option>
                            <option value="NGO">NGO</option>
                          </select>
                        ) : (
                          <div className="text-gray-900">{selectedUser.organisationType}</div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">First Name</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.firstName || ""}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.firstName}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">Primary Contact</div>
                        {isEditMode ? (
                          <input
                            type="tel"
                            value={editFormData?.contactNo || ""}
                            onChange={(e) => handleInputChange("contactNo", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.contactNo}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm">
                        <div className="font-medium text-gray-700 mb-1">PAN</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.pan || ""}
                            onChange={(e) => handleInputChange("pan", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
                            maxLength={10}
                          />
                        ) : (
                          <div className="text-gray-900 font-mono">{selectedUser.pan}</div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">Last Name</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.lastName || ""}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.lastName}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">Secondary Contact</div>
                        {isEditMode ? (
                          <input
                            type="tel"
                            value={editFormData?.secondaryContact || ""}
                            onChange={(e) => handleInputChange("secondaryContact", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.secondaryContact || "Not provided"}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm">
                        <div className="font-medium text-gray-700 mb-1">Aadhar</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.aadhar || ""}
                            onChange={(e) => handleInputChange("aadhar", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
                            maxLength={12}
                          />
                        ) : (
                          <div className="text-gray-900 font-mono">
                            {selectedUser.aadhar ? `****-****-${selectedUser.aadhar.slice(-4)}` : "Not provided"}
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">Father's Name</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.fatherName || ""}
                            onChange={(e) => handleInputChange("fatherName", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.fatherName}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">Address</div>
                        {isEditMode ? (
                          <textarea
                            value={editFormData?.address || ""}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            rows={2}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.address}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm">
                        <div className="font-medium text-gray-700 mb-1">DIN</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.din || ""}
                            onChange={(e) => handleInputChange("din", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.din || "Not provided"}</div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">Date of Birth</div>
                        {isEditMode ? (
                          <input
                            type="date"
                            value={editFormData?.DOB || ""}
                            onChange={(e) => handleInputChange("DOB", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{formatDate(selectedUser.DOB)}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">City</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.city || ""}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.city}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm">
                        <div className="font-medium text-gray-700 mb-1">Bank</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.bank || ""}
                            onChange={(e) => handleInputChange("bank", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.bank}</div>
                        )}
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">Gender</div>
                        {isEditMode ? (
                          <select
                            value={editFormData?.sex || ""}
                            onChange={(e) => handleInputChange("sex", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        ) : (
                          <div className="text-gray-900">{selectedUser.sex}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">State</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.state || ""}
                            onChange={(e) => handleInputChange("state", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.state}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm">
                        <div className="font-medium text-gray-700 mb-1">Account Number</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.accountNumber || ""}
                            onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
                          />
                        ) : (
                          <div className="text-gray-900 font-mono">
                            {selectedUser.accountNumber
                              ? `****-****-${selectedUser.accountNumber.slice(-4)}`
                              : "Not provided"}
                          </div>
                        )}
                      </td>
                    </tr>

                    <tr>
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">Marital Status</div>
                        {isEditMode ? (
                          <select
                            value={editFormData?.maritalStatus || ""}
                            onChange={(e) => handleInputChange("maritalStatus", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          >
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                          </select>
                        ) : (
                          <div className="text-gray-900">{selectedUser.maritalStatus}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm border-r border-gray-300">
                        <div className="font-medium text-gray-700 mb-1">PIN Code</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.pin || ""}
                            onChange={(e) => handleInputChange("pin", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        ) : (
                          <div className="text-gray-900">{selectedUser.pin || "Not provided"}</div>
                        )}
                      </td>
                      <td className="py-3 px-6 text-sm">
                        <div className="font-medium text-gray-700 mb-1">IFSC Code</div>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editFormData?.ifsc || ""}
                            onChange={(e) => handleInputChange("ifsc", e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
                          />
                        ) : (
                          <div className="text-gray-900 font-mono">{selectedUser.ifsc || "Not provided"}</div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Billing Information Section */}
            <div className="p-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-purple-600" />
                Billing & Transaction History
              </h3>
              {loadingOrders ? (
                <div className="flex items-center justify-center py-8">
                  <RefreshCw className="h-6 w-6 animate-spin text-purple-500" />
                  <span className="ml-2 text-gray-600">Loading billing information...</span>
                </div>
              ) : userOrders.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Receipt className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No billing/transaction records found for this user.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                        <th className="text-left py-3 px-4 font-semibold border-b border-gray-300">Order ID</th>
                        <th className="text-left py-3 px-4 font-semibold border-b border-gray-300">Date</th>
                        <th className="text-left py-3 px-4 font-semibold border-b border-gray-300">Item</th>
                        <th className="text-left py-3 px-4 font-semibold border-b border-gray-300">Amount</th>
                        <th className="text-left py-3 px-4 font-semibold border-b border-gray-300">Payment Status</th>
                        <th className="text-left py-3 px-4 font-semibold border-b border-gray-300">Payment Mode</th>
                        <th className="text-left py-3 px-4 font-semibold border-b border-gray-300">Tracking ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userOrders.map((order: any) => {
                        // Prefer detailed order_status when available, otherwise fallback to payment_status
                        const rawStatus = (order.order_status || order.payment_status || "Pending") as string
                        const normalizedStatus = rawStatus.toLowerCase()

                        let statusColor = "bg-yellow-100 text-yellow-800"
                        if (normalizedStatus === "success") {
                          statusColor = "bg-green-100 text-green-800"
                        } else if (
                          ["failed", "failure", "invalid", "aborted", "timeout"].includes(normalizedStatus)
                        ) {
                          statusColor = "bg-red-100 text-red-800"
                        }

                        return (
                          <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm font-mono">{order.order_id || "N/A"}</td>
                            <td className="py-3 px-4 text-sm">
                              {order.created_at
                                ? new Date(order.created_at).toLocaleDateString("en-IN", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })
                                : "N/A"}
                            </td>
                            <td className="py-3 px-4 text-sm">{order.item_name || "N/A"}</td>
                            <td className="py-3 px-4 text-sm font-semibold">
                              ₹{parseFloat(order.total_amount || order.amount || 0).toFixed(2)}
                            </td>
                            <td className="py-3 px-4 text-sm">
                              <span
                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColor}`}
                              >
                                {rawStatus}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-sm">{order.payment_mode || "N/A"}</td>
                            <td className="py-3 px-4 text-sm font-mono text-gray-600">
                              {order.tracking_id || "N/A"}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-gray-600">
                    <div>
                      {(() => {
                        const successOrders = userOrders.filter((order: any) => {
                          const status = (order.order_status || order.payment_status || "").toLowerCase()
                          return status === "success"
                        })
                        const successCount = successOrders.length
                        const successTotalAmount = successOrders.reduce(
                          (sum: number, order: any) => sum + parseFloat(order.total_amount || order.amount || 0),
                          0
                        )
                        return (
                          <>
                            <strong>Total Transactions:</strong> {userOrders.length} |{" "}
                            <strong>Success Transactions:</strong> {successCount} |{" "}
                            <strong>Success Total Amount:</strong> ₹{successTotalAmount.toFixed(2)}
                          </>
                        )
                      })()}
                    </div>
                    <button
                      type="button"
                      className="px-4 py-2 rounded-lg border border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors"
                      onClick={() => setShowAllOrdersModal(true)}
                    >
                      View Full Order Details
                    </button>
                  </div>
                </div>
              )}
            </div>

            <hr className="border-gray-200" />

            <div className="p-6 flex justify-end">
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => {
                  setShowUserDetailsModal(false)
                  setIsEditMode(false)
                  setEditFormData(null)
                  setUserOrders([])
                  setShowAllOrdersModal(false)
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* All Orders Raw Data Modal */}
      {showAllOrdersModal && userOrders.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Receipt className="w-6 h-6 text-purple-600" />
                All Orders (Full Details)
              </h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={exportToExcel}
                  className="px-4 py-2 text-white rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-md hover:shadow-lg"
                  style={{ backgroundColor: '#1a8b82' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#158876'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1a8b82'
                  }}
                >
                  <Download className="w-5 h-5" />
                  Export to Excel
                </button>
                <button
                  onClick={() => setShowAllOrdersModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-xs">
                <thead className="bg-gray-100">
                  <tr>
                    {Object.keys(userOrders[0] || {})
                      .filter((key) => !ORDER_COLS_HIDDEN.includes(key))
                      .map((key) => (
                      <th key={key} className="px-3 py-2 border-b border-gray-300 text-left font-semibold capitalize">
                        {key.replace(/_/g, " ")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {userOrders.map((order: any) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      {Object.keys(userOrders[0] || {})
                        .filter((key) => !ORDER_COLS_HIDDEN.includes(key))
                        .map((key) => (
                        <td key={key} className="px-3 py-2 border-b border-gray-200 whitespace-nowrap">
                          {String(order[key] ?? "N/A")}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 flex justify-between items-center border-t border-gray-200">
              <div className="text-sm text-gray-600">
                <strong>Total Orders:</strong> {userOrders.length}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={exportToExcel}
                  className="px-5 py-2 text-white rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-md hover:shadow-lg"
                  style={{ backgroundColor: '#1a8b82' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#158876'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1a8b82'
                  }}
                >
                  <Download className="w-4 h-4" />
                  Export to Excel
                </button>
                <button
                  className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setShowAllOrdersModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SuperAdminUsersManagement
