"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config"; // Adjust the path based on your project structure
import { useRouter } from "next/navigation"

// Define a type for our client data
interface ClientData {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  whatsappNumber?: string;
  role?: string;
  createdAt?: number; // Timestamp in milliseconds
  lastLogin?: number; // Timestamp in milliseconds
  // Add other fields as needed
}

const Page = () => {
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [clients, setClients] = useState<ClientData[]>([]);
  const [selectedClient, setSelectedClient] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClients, setFilteredClients] = useState<ClientData[]>([]);
    const navigate = useRouter()
const gmail="krishna"
  // Fetch clients data from Firebase
  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const usersCollection = collection(db, "users");
        const userSnapshot = await getDocs(usersCollection);
        const clientsList = userSnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<ClientData, 'id'>)
        }));

        setClients(clientsList);
        setFilteredClients(clientsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching clients:", error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  // Handle search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = clients.filter(client =>
      (client.firstName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (client.lastName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (client.email || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClients(filtered);
  };

  // Handle client selection for modal
  const openClientDetails = (client: ClientData) => {
    setSelectedClient(client);
    setShowUserDetailsModal(true);
  };

  // Handle Update and Delete functionality
  const handleUpdate = async () => {
    if (!selectedClient) return;

    try {
      await updateDoc(doc(db, "users", selectedClient.id), {
        // Add fields you want to update
      });
      alert("Client updated successfully!");
    } catch (error) {
      console.error("Error updating client:", error);
    }
  };

  const handleDelete = async () => {
    if (!selectedClient) return;

    if (window.confirm(`Are you sure you want to delete this client?`)) {
      try {
        await deleteDoc(doc(db, "users", selectedClient.id));
        setClients(clients.filter(client => client.id !== selectedClient.id));
        setFilteredClients(filteredClients.filter(client => client.id !== selectedClient.id));
        setShowUserDetailsModal(false);
        alert("Client deleted successfully!");
      } catch (error) {
        console.error("Error deleting client:", error);
      }
    }
  };

  return (
    <div>
      {/* Top Section */}
      <div className="max-w-[1200px] w-full mx-auto bg-[#eafaf8] shadow-md p-4 min-w-[600px] rounded-lg flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl font-semibold mr-4">Client Detailed</h1>
        <p className="text-xl font-semibold ml-4 mr-4">Total Client Number: {filteredClients.length}</p>
        <form
          className="flex space-x-2 mt-2 md:mt-0"
          onSubmit={handleSearch}
        >
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-300 p-2 rounded-md focus:outline-none"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch(e);
              }
            }}
          />
          <button
            type="submit"
            className="border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="max-w-[1200px] w-full mx-auto mt-8 text-center">
          <p className="text-lg">Loading clients data...</p>
        </div>
      )}

      {/* Client Details Section - Keeping the original layout style */}
      {!loading && filteredClients.length > 0 ? (
        <div className="max-w-[1200px] w-full mx-auto mt-4">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Client ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium">
                    {client.firstName || "User"} {client.lastName || ""}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {client.id.substring(0, 8)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {client.email || "No email"}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className="border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
                      onClick={() => 
                       {
                         // make here param to send data like /admindashboard/Userprofile/ID
                         navigate.push(`/admindashboard/profile/${gmail}`)
                       } 
                      }
                    >
                      View
                    </button>
                    {/* <button
                      className="border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
                      onClick={() => 
                       {
                        //  openClientDetails(client)
                         // make here param to send data like /admindashboard/Userprofile/ID
                        //  navigate.push(`/admindashboard/profile/${gmail}`)
                       } 
                      }
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : !loading && (
        <div className="max-w-[1200px] w-full mx-auto bg-white shadow-md p-4 rounded-lg mt-4 text-center">
          <p className="text-lg">No clients found matching your search.</p>
        </div>
      )}

      {/* Modal - Using the original modal structure */}
      {/* {showUserDetailsModal && selectedClient && (
        <div className="fixed inset-0 bg-black/50 z-10 flex justify-center items-center animate-fade-in">
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-95 hover:scale-100">
            <h1 className="text-lg font-semibold mb-4">User Data</h1>
            <p className="text-lg font-semibold mb-4">User Name: {selectedClient.firstName || ""} {selectedClient.lastName || ""}</p>
            <p className="text-lg font-semibold mb-4">User Gmail: {selectedClient.email || "N/A"}</p>
            <p className="text-lg font-semibold mb-4">User WhatsApp: {selectedClient.whatsappNumber || "N/A"}</p>
            <p className="text-lg font-semibold mb-4">User Role: {selectedClient.role || "N/A"}</p>
            <p className="text-lg font-semibold mb-4">User ID: {selectedClient.id}</p>
            <p className="text-lg font-semibold mb-4">Account Created: {selectedClient.createdAt ? new Date(selectedClient.createdAt).toLocaleString() : "N/A"}</p>
            <p className="text-lg font-semibold mb-4">Last Login: {selectedClient.lastLogin ? new Date(selectedClient.lastLogin).toLocaleString() : "N/A"}</p>

            <div className="flex justify-between items-center gap-4">
              <button
                className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transition-colors duration-300"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition-colors duration-300"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="border border-gray-300 py-2 px-4 text-gray-700 rounded hover:bg-gray-100 transition-colors duration-300"
                onClick={() => setShowUserDetailsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Page;