"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { RefreshCw, Edit, Eye, X, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { logout } from "@/store/themeConfigSlice"

interface Admin {
  id: string
  name: string
  email: string
  password: string
  role?: string
}

interface Toast {
  id: string
  title: string
  description: string
  variant?: "default" | "destructive"
}

export default function AdminManagement() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [admins, setAdmins] = useState<Admin[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [adminToDelete, setAdminToDelete] = useState<Admin | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", password: "" })
  const [toasts, setToasts] = useState<Toast[]>([])
  const [currentUserEmail, setCurrentUserEmail] = useState<string>("")

  const API_URL = "/api/admin-register"

  // Helper function to parse email from localStorage
  // Format: "admin_authtoss125training%40gmail.com" -> "toss125training@gmail.com"
  const parseEmailFromLocalStorage = (value: string): string => {
    if (!value) return ""
    // Remove "admin_auth" prefix
    let email = value.replace(/^admin_auth/, "")
    // Decode URL encoding (%40 -> @)
    email = decodeURIComponent(email)
    return email
  }

  // Helper function to format email for localStorage
  // Format: "toss125training@gmail.com" -> "admin_authtoss125training%40gmail.com"
  const formatEmailForLocalStorage = (email: string): string => {
    if (!email) return ""
    // URL encode the email (@ -> %40)
    const encodedEmail = encodeURIComponent(email)
    // Add "admin_auth" prefix
    return `admin_auth${encodedEmail}`
  }

  // Get current email from localStorage
  const getLocalStorageEmail = (): string => {
    if (typeof window === "undefined") return ""
    const stored = localStorage.getItem("adminAuth")
    if (!stored) return ""
    return parseEmailFromLocalStorage(stored)
  }

  // Update email in localStorage
  const updateLocalStorageEmail = (newEmail: string): void => {
    if (typeof window === "undefined") return
    const formatted = formatEmailForLocalStorage(newEmail)
    localStorage.setItem("adminAuth", formatted)
    setCurrentUserEmail(newEmail)
  }

  const showToast = (title: string, description: string, variant: "default" | "destructive" = "default") => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: Toast = { id, title, description, variant }
    setToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 5000)
  }

  const Button = ({
    children,
    onClick,
    variant = "default",
    size = "default",
    disabled = false,
    className = "bf-",
    type = "button",
  }: {
    children: React.ReactNode
    onClick?: () => void
    variant?: "default" | "outline" | "destructive"
    size?: "default" | "sm"
    disabled?: boolean
    className?: string
    type?: "button" | "submit"
  }) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none !opacity-100 !visible"
    const variantClasses = {
      default: "bg-blue-600 text-white hover:bg-blue-700 !opacity-100 !visible",
      outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 !opacity-100 !visible",
      destructive: "bg-red-600 text-white hover:bg-red-700 !opacity-100 !visible",
    }
    const sizeClasses = {
      default: "h-10 py-2 px-4",
      sm: "h-8 px-3 text-sm",
    }

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        style={{
          visibility: "visible",
          opacity: 1,
          display: "inline-flex",
          position: "relative",
          zIndex: 10,
          backgroundColor: variant === "default" ? "#2563eb" : variant === "destructive" ? "#dc2626" : "#ffffff",
          color: variant === "default" || variant === "destructive" ? "#ffffff" : "#111827",
          border: variant === "outline" ? "1px solid #d1d5db" : "none",
        }}
      >
        {children}
      </button>
    )
  }

  const Input = ({
    className = "",
    ...props
  }: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) => (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )

  Input.displayName = "Input"

  const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}>{children}</div>
  )

  const CardHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col space-y-1.5 p-6">{children}</div>
  )

  const CardTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold leading-none tracking-tight">{children}</h3>
  )

  const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`p-6 pt-0 ${className}`}>{children}</div>
  )

  const Label = ({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) => (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  )

  const Badge = ({
    children,
    variant = "default",
  }: { children: React.ReactNode; variant?: "default" | "secondary" }) => {
    const variantClasses = {
      default: "bg-blue-600 text-white",
      secondary: "bg-green-100 text-green-800",
    }

    return (
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantClasses[variant]}`}
      >
        {children}
      </span>
    )
  }

  const Modal = ({
    isOpen,
    onClose,
    title,
    children,
  }: {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
  }) => {
    if (!isOpen) return null

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
        <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    )
  }

  const ToastContainer = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`p-4 rounded-md shadow-lg max-w-sm ${toast.variant === "destructive" ? "bg-red-600 text-white" : "bg-white border border-gray-200 text-gray-900"
            }`}
        >
          <div className="font-semibold">{toast.title}</div>
          <div className="text-sm opacity-90">{toast.description}</div>
        </div>
      ))}
    </div>
  )

  // Fetch all admins (GET request)
  const fetchAdmins = async () => {
    setLoading(true)
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        const data = await response.json()
        setAdmins(Array.isArray(data) ? data : [])
      } else {
        showToast("Error", "Failed to fetch admin data", "destructive")
      }
    } catch (error) {
      showToast("Error", "Network error while fetching data", "destructive")
    } finally {
      setLoading(false)
    }
  }

  // Update admin email in localStorage only
  const updateAdmin = async () => {
    if (!formData.email) {
      showToast("Error", "Please enter an email", "destructive")
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      showToast("Error", "Please enter a valid email address", "destructive")
      return
    }

    // Only allow updating if it's the current user
    if (!selectedAdmin || selectedAdmin.email.toLowerCase() !== currentUserEmail.toLowerCase()) {
      showToast("Error", "You can only edit your own details", "destructive")
      return
    }

    try {
      // Update localStorage only
      updateLocalStorageEmail(formData.email)
      showToast("Success", "Email updated successfully in localStorage")
      setIsEditModalOpen(false)
      setSelectedAdmin(null)
      setFormData({ name: "", email: "", password: "" })
      // Refresh to see updated data
      fetchAdmins()
    } catch (error) {
      showToast("Error", "Failed to update email", "destructive")
    }
  }

  // Delete admin (POST request)
  // const deleteAdmin = async (adminemail: string) => {
  //   console.log("Deleting admin with ID:", adminemail)
  //   try {
  //     const response = await fetch(API_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         action: "delete",
  //         id: adminemail,
  //       }),
  //     })

  //     if (response.ok) {
  //       showToast("Success", "Admin deleted successfully")
  //       setIsDeleteModalOpen(false)
  //       setAdminToDelete(null)
  //       fetchAdmins()
  //     } else {
  //       showToast("Error", "Failed to delete admin", "destructive")
  //     }
  //   } catch (error) {
  //     showToast("Error", "Network error while deleting admin", "destructive")
  //   }
  // }
  const deleteAdmin = async (adminEmail: string): Promise<void> => {
    // Only remove adminAuth from localStorage (logout)
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminSessionStartTime");
    localStorage.removeItem("adminLastActivityTime");
    
    // Dispatch logout to clear Redux state
    dispatch(logout());
    
    // Close modal
    setIsDeleteModalOpen(false);
    setAdminToDelete(null);
    
    // Show success message
    showToast("Success", "Logged out successfully. Redirecting to login...");
    
    // Redirect to login page after a short delay
    setTimeout(() => {
      router.push("/admin/Login");
    }, 1000);
  };



  // Filter admins to show only logged-in user's data
  const filteredAdmins = admins.filter((admin) => {
    if (!currentUserEmail) return false
    // Show only the admin whose email matches the localStorage email
    return admin.email.toLowerCase() === currentUserEmail.toLowerCase()
  })

  // Handle modal operations
  const handleEdit = useCallback((admin: Admin) => {
    // Only allow editing if it's the current user
    if (admin.email.toLowerCase() !== currentUserEmail.toLowerCase()) {
      showToast("Error", "You can only edit your own details", "destructive")
      return
    }
    setSelectedAdmin(admin)
    // Get email from localStorage for editing
    const localStorageEmail = getLocalStorageEmail()
    setFormData({ 
      name: admin.name, 
      email: localStorageEmail || admin.email, 
      password: admin.password 
    })
    setIsEditModalOpen(true)
  }, [currentUserEmail])

  const handleView = useCallback((admin: Admin) => {
    setSelectedAdmin(admin)
    setIsViewModalOpen(true)
  }, [])

  const handleDeleteClick = useCallback((admin: Admin) => {
    // Only allow deleting if it's the current user
    if (admin.email.toLowerCase() !== currentUserEmail.toLowerCase()) {
      showToast("Error", "You can only delete your own account", "destructive")
      return
    }
    setAdminToDelete(admin)
    setIsDeleteModalOpen(true)
  }, [currentUserEmail])



  const handleInputBlur = useCallback((field: keyof typeof formData) => {
    return (e: React.FocusEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setFormData((prev) => ({ ...prev, [field]: newValue }))
    }
  }, [])

  useEffect(() => {
    // Get current user email from localStorage
    const email = getLocalStorageEmail()
    setCurrentUserEmail(email)
    fetchAdmins()
  }, [])

  const editForm = (
    <div className="space-y-4">
      <div>
        <Label htmlFor="edit-name">Name</Label>
        <Input
          id="edit-name"
          defaultValue={formData.name}
          disabled
          className="bg-gray-100 cursor-not-allowed"
          placeholder="Enter admin name"
        />
        <p className="text-xs text-gray-500 mt-1">This field cannot be edited</p>
      </div>
      <div>
        <Label htmlFor="edit-email">Email (Editable)</Label>
        <Input
          id="edit-email"
          type="email"
          defaultValue={formData.email}
          onBlur={handleInputBlur("email")}
          placeholder="Enter admin email"
        />
        <p className="text-xs text-gray-500 mt-1">Email will be updated in localStorage</p>
      </div>
      <div>
        <Label htmlFor="edit-password">Password</Label>
        <Input
          id="edit-password"
          type="password"
          defaultValue={formData.password}
          disabled
          className="bg-gray-100 cursor-not-allowed"
          placeholder="Enter admin password"
        />
        <p className="text-xs text-gray-500 mt-1">This field cannot be edited</p>
      </div>
      <div className="flex gap-2 pt-4">
        <Button onClick={updateAdmin} className="flex-1 !visible !opacity-100">
          Update Email
        </Button>
        <Button variant="outline" onClick={() => setIsEditModalOpen(false)} className="flex-1 !visible !opacity-100">
          Cancel
        </Button>
      </div>
    </div>
  )

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <ToastContainer />

      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600 mt-1">View and edit your personal information</p>
          </div>
          <div className="flex gap-4">
            <Card className="px-4 py-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{admins.length}</div>
                <div className="text-sm text-gray-500">Total Admins</div>
              </div>
            </Card>
            <Card className="px-4 py-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{admins.length}</div>
                <div className="text-sm text-gray-500">Active Admins</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 items-center">
          <Button onClick={fetchAdmins} variant="outline" disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Admin Table */}
      <Card>
        <CardHeader>
          <CardTitle>My Details</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">Loading admins...</p>
            </div>
          ) : filteredAdmins.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No profile found. Please check your localStorage adminAuth key.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAdmins.map((admin) => (
                <div
                  key={admin.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {admin.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold">
                        {admin.name}
                        {admin.role && admin.role.toLowerCase() === "superadmin" && (
                          <span className="text-yellow-500 ml-1">*</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">ID: {admin.id}</div>
                    </div>
                  </div>
                  <div className="flex-1 px-4">
                    <div className="text-sm text-gray-600">{admin.email}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Active</Badge>
                    <Button variant="outline" size="sm" onClick={() => handleView(admin)}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleEdit(admin)}
                      disabled={admin.email.toLowerCase() !== currentUserEmail.toLowerCase()}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDeleteClick(admin)}
                      disabled={admin.email.toLowerCase() !== currentUserEmail.toLowerCase()}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-300"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit My Profile">
        {editForm}
      </Modal>

      {/* View Modal */}
      <Modal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} title="My Profile Details">
        {selectedAdmin && (
          <div className="space-y-4">
            <div>
              <Label>ID</Label>
              <p className="text-sm text-gray-600 mt-1">{selectedAdmin.id}</p>
            </div>
            <div>
              <Label>Name</Label>
              <p className="text-sm text-gray-600 mt-1">
                {selectedAdmin.name}
                {selectedAdmin.role && selectedAdmin.role.toLowerCase() === "superadmin" && (
                  <span className="text-yellow-500 ml-1">*</span>
                )}
              </p>
            </div>
            <div>
              <Label>Email</Label>
              <p className="text-sm text-gray-600 mt-1">{selectedAdmin.email}</p>
            </div>
            <div>
              <Label>Password</Label>
              <p className="text-sm text-gray-600 mt-1">••••••••</p>
            </div>
            <Button onClick={() => setIsViewModalOpen(false)} className="w-full !visible !opacity-100">
              Close
            </Button>
          </div>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Logout">
        {adminToDelete && (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Are you sure you want to logout? This will remove your authentication and redirect you to the login page.
            </p>
            <div className="flex gap-2 pt-4">
              <Button
                variant="destructive"
                onClick={() => deleteAdmin(adminToDelete.email)}
                className="flex-1 !visible !opacity-100"
              >
                Logout
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsDeleteModalOpen(false)}
                className="flex-1 !visible !opacity-100"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
