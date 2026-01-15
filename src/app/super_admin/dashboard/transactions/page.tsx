"use client"

import { useState, useEffect } from "react"
import { Search, RefreshCw, Eye, X, Receipt, TrendingUp, DollarSign, CheckCircle, XCircle, Clock } from "lucide-react"
import axios from "axios"

interface TransactionData {
  id: number
  order_id: string
  tracking_id: string
  bank_ref_no: string
  order_status: string
  payment_status: string
  payment_mode: string
  currency: string
  amount: number
  total_amount: number
  customer_name: string
  customer_email: string
  customer_phone: string
  item_name: string
  item_price: number
  item_quantity: number
  created_at: string
  billing_name: string
  billing_email: string
  billing_address: string
  billing_city: string
  billing_state: string
}

const TransactionsManagement = () => {
  const [transactions, setTransactions] = useState<TransactionData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionData | null>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [filterStatus, setFilterStatus] = useState<string>("all")

  useEffect(() => {
    fetchTransactions()
  }, [])

  const fetchTransactions = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await axios.get("/api/orderid-get", {
        timeout: 10000,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })

      let data
      if (response.data && typeof response.data === "object") {
        if (response.data.data && Array.isArray(response.data.data)) {
          data = response.data.data
        } else if (Array.isArray(response.data)) {
          data = response.data
        } else if (response.data.success && response.data.data) {
          data = response.data.data
        } else {
          data = []
        }
      } else {
        data = []
      }

      const transformedTransactions: TransactionData[] = Array.isArray(data)
        ? data.map((txn: any) => ({
            id: txn.id || 0,
            order_id: txn.order_id || "",
            tracking_id: txn.tracking_id || "",
            bank_ref_no: txn.bank_ref_no || "",
            order_status: txn.order_status || "",
            payment_status: txn.payment_status || "Pending",
            payment_mode: txn.payment_mode || "",
            currency: txn.currency || "INR",
            amount: parseFloat(txn.amount || txn.total_amount || 0),
            total_amount: parseFloat(txn.total_amount || txn.amount || 0),
            customer_name: txn.customer_name || txn.billing_name || "",
            customer_email: txn.customer_email || txn.billing_email || "",
            customer_phone: txn.customer_phone || txn.billing_tel || "",
            item_name: txn.item_name || "",
            item_price: parseFloat(txn.item_price || 0),
            item_quantity: parseInt(txn.item_quantity || 0),
            created_at: txn.created_at || "",
            billing_name: txn.billing_name || "",
            billing_email: txn.billing_email || "",
            billing_address: txn.billing_address || "",
            billing_city: txn.billing_city || "",
            billing_state: txn.billing_state || "",
          }))
        : []

      setTransactions(transformedTransactions)

      if (transformedTransactions.length === 0) {
        setError("No transaction data found.")
      }
    } catch (error) {
      console.error("Error fetching transactions:", error)
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          setError("Request timeout - API took too long to respond")
        } else {
          setError(`API Error: ${error.response?.status} - ${error.response?.statusText || error.message}`)
        }
      } else {
        setError("Failed to fetch transaction data. Please check your API connection.")
      }
      setTransactions([])
    } finally {
      setIsLoading(false)
    }
  }

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch =
      txn.order_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.customer_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.tracking_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.item_name.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      filterStatus === "all" ||
      (filterStatus === "success" && txn.payment_status === "Success") ||
      (filterStatus === "failed" && txn.payment_status === "Failed") ||
      (filterStatus === "pending" && (txn.payment_status === "Pending" || !txn.payment_status))

    return matchesSearch && matchesFilter
  })

  const handleViewDetails = (txn: TransactionData) => {
    setSelectedTransaction(txn)
    setShowDetailsModal(true)
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Success":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "Failed":
        return <XCircle className="w-5 h-5 text-red-600" />
      default:
        return <Clock className="w-5 h-5 text-yellow-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Success":
        return "bg-green-100 text-green-800"
      case "Failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  const totalRevenue = transactions
    .filter((txn) => txn.payment_status === "Success")
    .reduce((sum, txn) => sum + txn.total_amount, 0)

  const successCount = transactions.filter((txn) => txn.payment_status === "Success").length
  const failedCount = transactions.filter((txn) => txn.payment_status === "Failed").length
  const pendingCount = transactions.filter((txn) => txn.payment_status === "Pending" || !txn.payment_status).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Receipt className="w-8 h-8 text-purple-600" />
            Transactions Management
          </h1>
          <p className="text-gray-600 mt-1">View and manage all transactions and payments</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total Transactions</p>
              <p className="text-3xl font-bold mt-2">{transactions.length}</p>
            </div>
            <Receipt className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Successful</p>
              <p className="text-3xl font-bold mt-2">{successCount}</p>
            </div>
            <CheckCircle className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Failed</p>
              <p className="text-3xl font-bold mt-2">{failedCount}</p>
            </div>
            <XCircle className="w-8 h-8 opacity-80" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total Revenue</p>
              <p className="text-3xl font-bold mt-2">₹{totalRevenue.toFixed(2)}</p>
            </div>
            <DollarSign className="w-8 h-8 opacity-80" />
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
                placeholder="Search by Order ID, Customer Name, Email, or Tracking ID..."
                className="w-full pl-10 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Status</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
              <option value="pending">Pending</option>
            </select>
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              onClick={fetchTransactions}
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

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <RefreshCw className="h-8 w-8 animate-spin text-purple-500" />
            <span className="ml-2 text-gray-600">Loading transactions...</span>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-red-500 text-lg font-medium">{error}</div>
            <p className="text-gray-500 mt-2">Please try refreshing the page</p>
          </div>
        ) : filteredTransactions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No transactions found</div>
            <p className="text-gray-400 mt-2">
              {searchTerm || filterStatus !== "all" ? "Try adjusting your search or filter criteria" : "No transaction data available"}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-purple-50 to-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTransactions.map((txn) => (
                  <tr key={txn.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 font-mono">{txn.order_id}</div>
                      {txn.tracking_id && (
                        <div className="text-sm text-gray-500 font-mono">Track: {txn.tracking_id}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{txn.customer_name}</div>
                      <div className="text-sm text-gray-500">{txn.customer_email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{txn.item_name}</div>
                      <div className="text-sm text-gray-500">Qty: {txn.item_quantity}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">₹{txn.total_amount.toFixed(2)}</div>
                      <div className="text-sm text-gray-500">{txn.currency}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(txn.payment_status)}
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(txn.payment_status)}`}
                        >
                          {txn.payment_status}
                        </span>
                      </div>
                      {txn.payment_mode && (
                        <div className="text-xs text-gray-500 mt-1">{txn.payment_mode}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatDate(txn.created_at)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button
                        className="bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center mx-auto"
                        onClick={() => handleViewDetails(txn)}
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

      {/* Transaction Details Modal */}
      {showDetailsModal && selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <Receipt className="w-6 h-6 text-purple-600" />
                    Transaction Details
                  </h2>
                  <p className="text-gray-600">Order ID: {selectedTransaction.order_id}</p>
                </div>
                <button
                  onClick={() => {
                    setShowDetailsModal(false)
                    setSelectedTransaction(null)
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Order Information</h3>
                  <div>
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="text-base font-mono font-semibold">{selectedTransaction.order_id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tracking ID</p>
                    <p className="text-base font-mono">{selectedTransaction.tracking_id || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Bank Reference</p>
                    <p className="text-base font-mono">{selectedTransaction.bank_ref_no || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Order Status</p>
                    <p className="text-base">{selectedTransaction.order_status || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date & Time</p>
                    <p className="text-base">{formatDate(selectedTransaction.created_at)}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Payment Information</h3>
                  <div>
                    <p className="text-sm text-gray-600">Payment Status</p>
                    <span
                      className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(selectedTransaction.payment_status)}`}
                    >
                      {selectedTransaction.payment_status}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Payment Mode</p>
                    <p className="text-base">{selectedTransaction.payment_mode || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Amount</p>
                    <p className="text-2xl font-bold text-green-600">
                      ₹{selectedTransaction.total_amount.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Currency</p>
                    <p className="text-base">{selectedTransaction.currency}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Customer Information</h3>
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="text-base font-semibold">{selectedTransaction.customer_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-base">{selectedTransaction.customer_email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-base">{selectedTransaction.customer_phone || "N/A"}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Item Information</h3>
                  <div>
                    <p className="text-sm text-gray-600">Item Name</p>
                    <p className="text-base font-semibold">{selectedTransaction.item_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Quantity</p>
                    <p className="text-base">{selectedTransaction.item_quantity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Unit Price</p>
                    <p className="text-base">₹{selectedTransaction.item_price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 flex justify-end border-t border-gray-200">
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => {
                  setShowDetailsModal(false)
                  setSelectedTransaction(null)
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

export default TransactionsManagement
