"use client"

import React, { useState } from "react"

const APITest = () => {
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")

  const testAPI = async () => {
    setLoading(true)
    setError("")
    setResponse(null)

    try {
      const token = localStorage.getItem("superAdminAuth")
      const res = await fetch(
        "/api/blog",
        {
          headers: {
            "X-API-Key": token || "",
          },
        }
      )

      const data = await res.json()
      setResponse({
        status: res.status,
        statusText: res.statusText,
        data: data,
        isArray: Array.isArray(data),
        type: typeof data
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <h2 className="text-xl font-bold mb-4">API Test</h2>
      
      <button
        onClick={testAPI}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Testing..." : "Test Blog API"}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-red-800 font-medium">Error:</h3>
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {response && (
        <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-gray-800 font-medium mb-2">Response:</h3>
          <div className="text-sm text-gray-600 mb-2">
            Status: {response.status} | Type: {response.type} | Is Array: {response.isArray ? "Yes" : "No"}
          </div>
          <pre className="text-xs text-gray-700 overflow-auto max-h-96 bg-white p-2 rounded border">
            {JSON.stringify(response.data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default APITest
