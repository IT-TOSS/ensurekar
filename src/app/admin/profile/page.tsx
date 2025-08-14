"use client"

import { useState, useEffect } from "react"
import { Search, RefreshCw, Eye, X } from "lucide-react"
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

const UserAccountsManagement = () => {
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editFormData, setEditFormData] = useState<UserData | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)
  const [users, setUsers] = useState<UserData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log("UserAccountsManagement component mounted")
    return () => {
      console.log("UserAccountsManagement component unmounted")
    }
  }, [])

  const fetchUsers = async () => {
    console.log("=== FETCH USERS STARTED ===")
    setIsLoading(true)
    setError(null)
    try {
      console.log("Making API call to:", "https://edueye.co.in/ensurekar/existing-site/userinfo_get.php")

      const response = await axios.get("https://edueye.co.in/ensurekar/existing-site/userinfo_get.php", {
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

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.contactNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleViewUser = (user: UserData) => {
    setSelectedUser(user)
    setShowUserDetailsModal(true)
    setIsEditMode(false)
    setEditFormData(null)
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

    console.log("Updating user with data:", editFormData)
    setIsUpdating(true)
    try {
      const response = await axios.post("https://edueye.co.in/ensurekar/existing-site/userinfo_post.php", editFormData)

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
    } catch (error) {
      console.error("Error updating user:", error)
      alert("Error updating user. Please try again.")
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">User Account Management</h1>
              <p className="text-gray-600 mt-1">Manage user accounts and their information</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Total Users</div>
                  <div className="text-2xl font-bold text-blue-600">{users.length}</div>
                </div>
              </div>
              <div className="flex gap-2 bg-green-50 px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Active Users</div>
                  <div className="text-2xl font-bold text-green-600">
                    {users.filter((user) => getUserStatus(user) === "Complete").length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="search"
                  placeholder="Search users..."
                  className="pl-10 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <button
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
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
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm mb-4">
          <strong>Debug Info:</strong> Users: {users.length} | Loading: {isLoading.toString()} | Error:{" "}
          {error || "None"} | Filtered: {filteredUsers.length}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <RefreshCw className="h-8 w-8 animate-spin text-blue-500" />
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
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                              {user.firstName.charAt(0)}
                              {user.lastName.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.firstName} {user.lastName}
                            </div>
                            <div className="text-sm text-gray-500">ID: {user.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.company}</div>
                        <div className="text-sm text-gray-500">{user.organisationType}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.email}</div>
                        <div className="text-sm text-gray-500">{user.contactNo}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(getUserStatus(user))}`}
                        >
                          {getUserStatus(user)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button
                          className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center mx-auto"
                          onClick={() => handleViewUser(user)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* User Details Modal */}
      {showUserDetailsModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{isEditMode ? "Edit User" : "User Details"}</h2>
                  <p className="text-gray-600">
                    {selectedUser.firstName} {selectedUser.lastName}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {!isEditMode ? (
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
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
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-3 px-4 font-semibold text-gray-800 border-b border-gray-200 w-1/3">
                        Personal Information
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800 border-b border-gray-200 w-1/3">
                        Contact & Address
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800 border-b border-gray-200 w-1/3">
                        Business & Financial
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm border-b border-gray-100 align-top">
                        <div className="space-y-3">
                          <div>
                            <span className="font-medium text-gray-700">User ID</span>
                            <div className="text-gray-900">{selectedUser.id}</div>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Username</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.userName || ""}
                                onChange={(e) => handleInputChange("userName", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.userName}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">First Name</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.firstName || ""}
                                onChange={(e) => handleInputChange("firstName", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.firstName}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Last Name</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.lastName || ""}
                                onChange={(e) => handleInputChange("lastName", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.lastName}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Father's Name</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.fatherName || ""}
                                onChange={(e) => handleInputChange("fatherName", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.fatherName}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Date of Birth</span>
                            {isEditMode ? (
                              <input
                                type="date"
                                value={editFormData?.DOB || ""}
                                onChange={(e) => handleInputChange("DOB", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{formatDate(selectedUser.DOB)}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Gender</span>
                            {isEditMode ? (
                              <select
                                value={editFormData?.sex || ""}
                                onChange={(e) => handleInputChange("sex", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              </select>
                            ) : (
                              <div className="text-gray-900">{selectedUser.sex}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Marital Status</span>
                            {isEditMode ? (
                              <select
                                value={editFormData?.maritalStatus || ""}
                                onChange={(e) => handleInputChange("maritalStatus", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                              </select>
                            ) : (
                              <div className="text-gray-900">{selectedUser.maritalStatus}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm border-b border-gray-100 align-top">
                        <div className="space-y-3">
                          <div>
                            <span className="font-medium text-gray-700">Primary Email</span>
                            {isEditMode ? (
                              <input
                                type="email"
                                value={editFormData?.email || ""}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.email}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Secondary Email</span>
                            {isEditMode ? (
                              <input
                                type="email"
                                value={editFormData?.secondaryEmail || ""}
                                onChange={(e) => handleInputChange("secondaryEmail", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.secondaryEmail || "Not provided"}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Primary Contact</span>
                            {isEditMode ? (
                              <input
                                type="tel"
                                value={editFormData?.contactNo || ""}
                                onChange={(e) => handleInputChange("contactNo", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.contactNo}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Secondary Contact</span>
                            {isEditMode ? (
                              <input
                                type="tel"
                                value={editFormData?.secondaryContact || ""}
                                onChange={(e) => handleInputChange("secondaryContact", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.secondaryContact || "Not provided"}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Address</span>
                            {isEditMode ? (
                              <textarea
                                value={editFormData?.address || ""}
                                onChange={(e) => handleInputChange("address", e.target.value)}
                                rows={3}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.address}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">City</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.city || ""}
                                onChange={(e) => handleInputChange("city", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.city}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">State</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.state || ""}
                                onChange={(e) => handleInputChange("state", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.state}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm border-b border-gray-100 align-top">
                        <div className="space-y-3">
                          <div>
                            <span className="font-medium text-gray-700">Company</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.company || ""}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.company}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Organisation Type</span>
                            {isEditMode ? (
                              <select
                                value={editFormData?.organisationType || ""}
                                onChange={(e) => handleInputChange("organisationType", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
                                <option value="Private">Private</option>
                                <option value="Public">Public</option>
                                <option value="Government">Government</option>
                                <option value="NGO">NGO</option>
                              </select>
                            ) : (
                              <div className="text-gray-900">{selectedUser.organisationType}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">PAN</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.pan || ""}
                                onChange={(e) => handleInputChange("pan", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                                maxLength={10}
                              />
                            ) : (
                              <div className="text-gray-900 font-mono">{selectedUser.pan}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Aadhar</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.aadhar || ""}
                                onChange={(e) => handleInputChange("aadhar", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                                maxLength={12}
                              />
                            ) : (
                              <div className="text-gray-900 font-mono">
                                {selectedUser.aadhar ? `****-****-${selectedUser.aadhar.slice(-4)}` : "Not provided"}
                              </div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">DIN</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.din || ""}
                                onChange={(e) => handleInputChange("din", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.din || "Not provided"}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Bank</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.bank || ""}
                                onChange={(e) => handleInputChange("bank", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="text-gray-900">{selectedUser.bank}</div>
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Account Number</span>
                            {isEditMode ? (
                              <input
                                type="text"
                                value={editFormData?.accountNumber || ""}
                                onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                              />
                            ) : (
                              <div className="text-gray-900 font-mono">
                                {selectedUser.accountNumber
                                  ? `****-****-${selectedUser.accountNumber.slice(-4)}`
                                  : "Not provided"}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="p-6 flex justify-end">
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => {
                  setShowUserDetailsModal(false)
                  setIsEditMode(false)
                  setEditFormData(null)
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

export default UserAccountsManagement
