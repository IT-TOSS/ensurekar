// "use client";
// import React, { useState, useEffect } from "react";
// // import { initializeApp } from "firebase/app";
// // import { 
// //   getFirestore, 
// //   collection, 
// //   addDoc, 
// //   getDocs, 
// //   doc, 
// //   deleteDoc, 
// //   updateDoc 
// // } from "firebase/firestore";

// // // Your Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyAV9jO-wD7XFdh82I3tvtIKqDoAD7d9PyU",
// //   authDomain: "ensurekar-d48bd.firebaseapp.com",
// //   projectId: "ensurekar-d48bd",
// //   storageBucket: "ensurekar-d48bd.firebasestorage.app",
// //   messagingSenderId: "491265324820",
// //   appId: "1:491265324820:web:8c1fb8bfc0b89e13467401",
// //   measurementId: "G-5S2D92TP65"
// // };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);
// // const plansCollectionRef = collection(db, "plans");

// interface PackageData {
//   id: string;
//   planName: string;
//   Status: string;
//   Description: string;
//   Price: number;
//   PriceAfterDiscount: number;
//   instalments: string;
//   Features: string;
// }

// const Page = () => {
//   const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
//   const [showUserCreatModal, setShowUserCreatModal] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState<PackageData | null>(null);
//   const [plans, setPlans] = useState<PackageData[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [updateMode, setUpdateMode] = useState(false);

//   const [formData, setFormData] = useState<PackageData>({
//     id: "",
//     planName: "",
//     Status: "",
//     Description: "",
//     Price: 0,
//     PriceAfterDiscount: 0,
//     instalments: "",
//     Features: "",
//   });

//   const [searchTerm, setSearchTerm] = useState("");

//   // Fetch plans from Firebase on component mount
//   // useEffect(() => {
//   //   const fetchPlans = async () => {
//   //     try {
//   //       setIsLoading(true);
//   //       const querySnapshot = await getDocs(plansCollectionRef);
//   //       const plansData = querySnapshot.docs.map(doc => ({
//   //         id: doc.id,
//   //         ...doc.data()
//   //       } as PackageData));
        
//   //       setPlans(plansData);
//   //     } catch (error) {
//   //       console.error("Error fetching plans: ", error);
//   //     } finally {
//   //       setIsLoading(false);
//   //     }
//   //   };

//   //   fetchPlans();
//   // }, []);

//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "Price" || name === "PriceAfterDiscount" ? value === "" ? "" : Number(value) : value,
//     }));
//   };

//   const handleCreatePlan = async () => {
//     try {
//       if (updateMode && selectedPlan) {
//         // Update existing plan in Firebase
//         // const planRef = doc(db, "plans", selectedPlan.id);
//         // await updateDoc(planRef, {
//         //   planName: formData.planName,
//         //   Status: formData.Status,
//         //   Description: formData.Description,
//         //   Price: formData.Price,
//         //   PriceAfterDiscount: formData.PriceAfterDiscount,
//         //   instalments: formData.instalments,
//         //   Features: formData.Features
//         // });

//         // Update local state
//         setPlans(plans.map(plan => 
//           plan.id === selectedPlan.id ? { ...formData, id: selectedPlan.id } : plan
//         ));

//         setUpdateMode(false);
//       } else {
//         // Add new plan to Firebase
//         // const docRef = await addDoc(plansCollectionRef, {
//         //   planName: formData.planName,
//         //   Status: formData.Status,
//         //   Description: formData.Description,
//         //   Price: formData.Price,
//         //   PriceAfterDiscount: formData.PriceAfterDiscount,
//         //   instalments: formData.instalments,
//         //   Features: formData.Features
//         // });

//         // Add to local state with the Firebase-generated ID
//         // setPlans([...plans, { ...formData, id: docRef.id }]);
//       }
      
//       // Close modal and reset form
//       setShowUserCreatModal(false);
//       resetForm();
      
//     } catch (error) {
//       console.error("Error saving plan: ", error);
//       alert("Failed to save plan. Please try again.");
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       id: "",
//       planName: "",
//       Status: "",
//       Description: "",
//       Price: 0,
//       PriceAfterDiscount: 0,
//       instalments: "",
//       Features: "",
//     });
//   };

//   const handleViewPlan = (plan: PackageData) => {
//     setSelectedPlan(plan);
//     setShowUserDetailsModal(true);
//   };

//   const handleUpdatePlan = () => {
//     if (selectedPlan) {
//       // Populate form with selected plan data
//       setFormData({
//         ...selectedPlan
//       });
      
//       // Close details modal and open create/edit modal
//       setShowUserDetailsModal(false);
//       setUpdateMode(true);
//       setShowUserCreatModal(true);
//     }
//   };

//   const handleDeletePlan = async (id : any) => {
//     try {
//       // Delete from Firebase
//       // await deleteDoc(doc(db, "plans", id));
      
//       // Update local state
//       const updatedPlans = plans.filter(plan => plan.id !== id);
//       setPlans(updatedPlans);
//       setShowUserDetailsModal(false);
      
//     } catch (error) {
//       console.error("Error deleting plan: ", error);
//       alert("Failed to delete plan. Please try again.");
//     }
//   };

//   // Filter plans based on search term
//   const filteredPlans = plans.filter(plan => 
//     plan.planName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     plan.id?.includes(searchTerm) ||
//     plan.PriceAfterDiscount?.toString().includes(searchTerm)
//   );

//   return (
//     <div className="p-4">
//       {/* Top Section */}
//       <div className="max-w-[1200px] w-full mx-auto bg-[#eafaf8] shadow-md p-4 min-w-[600px] rounded-lg flex flex-col md:flex-row justify-between items-center">
//         <h1 className="text-xl font-semibold mr-4">plan id</h1>
//         <h1 className="text-xl font-semibold mr-4">planName</h1>
//         <h1 className="text-xl font-semibold mr-4">plan pri.</h1>
//         <p className="text-xl font-semibold ml-4 mr-4">Total plan Number: {plans.length}</p>
//         <form className="flex space-x-2 mt-2 md:mt-0" onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="search"
//             placeholder="Search"
//             className="border border-gray-300 p-2 rounded-md focus:outline-none"
//             aria-label="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
//             Search
//           </button>
//         </form>
//       </div>

//       {/* Create New Plan Button */}
//       <div className="max-w-[1200px] w-full mx-auto bg-white shadow-md p-4 rounded-lg mt-4 flex justify-between items-center">
//         <div className="flex space-x-4 items-center">
//           <p className="text-gray-700">Create New Plan</p>
//         </div>
//         <button
//           className="border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
//           onClick={() => {
//             setUpdateMode(false);
//             resetForm();
//             setShowUserCreatModal(!showUserCreatModal);
//           }}
//         >
//           Create
//         </button>
//       </div>

//       {/* Loading State */}
//       {isLoading ? (
//         <div className="max-w-[1200px] w-full mx-auto mt-8 text-center">
//           <p className="text-xl">Loading plans...</p>
//         </div>
//       ) : (
//         /* Plan Items List */
//         filteredPlans.length > 0 ? (
//           filteredPlans.map((plan) => (
//             <div key={plan.id} className="max-w-[1200px] w-full mx-auto bg-white shadow-md p-4 rounded-lg mt-4 flex justify-between items-center">
//               <div className="flex space-x-4 items-center">
//                 <p className="text-gray-700">plan id: {plan.id}</p>
//                 <p className="text-gray-700">planName: {plan.planName}</p>
//                 <p className="text-gray-700">plan pri.: ₹{plan.PriceAfterDiscount}</p>
//               </div>
//               <button
//                 className="border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
//                 onClick={() => handleViewPlan(plan)}
//               >
//                 View
//               </button>
//             </div>
//           ))
//         ) : (
//           <div className="max-w-[1200px] w-full mx-auto mt-8 text-center">
//             <p className="text-xl">No plans found. Create your first plan!</p>
//           </div>
//         )
//       )}

//       {/* View Plan Modal */}
//       {showUserDetailsModal && selectedPlan && (
//         <div className="fixed inset-0 bg-black/50 z-10 flex justify-center items-center animate-fade-in">
//           <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-95 hover:scale-100 max-w-md w-full max-h-[80vh] overflow-y-auto">
//             <h1 className="text-lg font-semibold mb-4">Plan Details</h1>
//             <p className="text-lg font-semibold mb-4">Plan ID: {selectedPlan.id}</p>
//             <p className="text-lg font-semibold mb-4">Plan Name: {selectedPlan.planName}</p>
//             <p className="text-lg font-semibold mb-4">Status: {selectedPlan.Status}</p>
//             <p className="text-lg font-semibold mb-4">Description: {selectedPlan.Description}</p>
//             <p className="text-lg font-semibold mb-4">Original Price: ₹{selectedPlan.Price}</p>
//             <p className="text-lg font-semibold mb-4">Price After Discount: ₹{selectedPlan.PriceAfterDiscount}</p>
//             <p className="text-lg font-semibold mb-4">Instalments: {selectedPlan.instalments}</p>
//             <p className="text-lg font-semibold mb-4">Features:</p>
//             <ul className="list-disc list-inside text-gray-700">
//               {selectedPlan.Features?.split(',').map((feature, index) => (
//                 <li key={index}>{feature.trim()}</li>
//               ))}
//             </ul>
//             <div className="flex justify-between items-center gap-4 mt-4">
//               <button
//                 className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transition-colors duration-300"
//                 onClick={handleUpdatePlan}
//               >
//                 Update
//               </button>
//               <button
//                 className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition-colors duration-300"
//                 onClick={() => handleDeletePlan(selectedPlan.id)}
//               >
//                 Delete
//               </button>
//               <button
//                 className="border border-gray-300 py-2 px-4 text-gray-700 rounded hover:bg-gray-100 transition-colors duration-300"
//                 onClick={() => setShowUserDetailsModal(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Create/Update Plan Modal */}
//       {showUserCreatModal && (
//         <div className="fixed inset-0 bg-black/50 z-10 flex justify-center items-center animate-fade-in">
//           <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-95 hover:scale-100 max-w-md w-full max-h-[80vh] overflow-y-auto">
//             <h1 className="text-lg font-semibold mb-4">{updateMode ? 'Update Plan Details' : 'Fill Plan Details'}</h1>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-lg font-semibold">Plan Name:</label>
//                 <input type="text" name="planName" value={formData.planName} onChange={handleChange} placeholder="Enter Plan Name" className="w-full border p-2 rounded" />
//               </div>
              
//               <div>
//                 <label className="block text-lg font-semibold">Status:</label>
//                 <select name="Status" value={formData.Status} onChange={handleChange} className="w-full border p-2 rounded">
//                   <option value="">Select Status</option>
//                   <option value="Active">Active</option>
//                   <option value="Inactive">Inactive</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-lg font-semibold">Description:</label>
//                 <input type="text" name="Description" value={formData.Description} onChange={handleChange} placeholder="Enter Description" className="w-full border p-2 rounded" />
//               </div>
//               <div>
//   <label className="block text-lg font-semibold">Price:</label>
//   <input 
//     type="number" 
//     name="Price" 
//     value={formData.Price === 0 && document.activeElement === document.querySelector('input[name="Price"]') ? "" : formData.Price} 
//     onChange={handleChange}
//     onFocus={(e) => {
//       if (formData.Price === 0) {
//         setFormData(prev => ({...prev, Price: 0}));
//       }
//     }}
//     placeholder="Enter Price" 
//     className="w-full border p-2 rounded" 
//   />
// </div>

// <div>
//   <label className="block text-lg font-semibold">Price After Discount:</label>
//   <input 
//     type="number" 
//     name="PriceAfterDiscount" 
//     value={formData.PriceAfterDiscount === 0 && document.activeElement === document.querySelector('input[name="PriceAfterDiscount"]') ? "" : formData.PriceAfterDiscount} 
//     onChange={handleChange}
//     onFocus={(e) => {
//       if (formData.PriceAfterDiscount === 0) {
//         setFormData(prev => ({...prev, PriceAfterDiscount: 0}));
//       }
//     }}
//     placeholder="Enter Price After Discount" 
//     className="w-full border p-2 rounded" 
//   />
// </div>       
              
//               <div>
//                 <label className="block text-lg font-semibold">Instalments:</label>
//                 <input type="text" name="instalments" value={formData.instalments} onChange={handleChange} placeholder="Enter Instalments (e.g., '2 (₹499.50 each)')" className="w-full border p-2 rounded" />
//               </div>
              
//               <div>
//                 <label className="block text-lg font-semibold">Features:</label>
//                 <textarea 
//                   className="w-full p-2 border rounded" 
//                   name="Features" 
//                   value={formData.Features} 
//                   onChange={handleChange} 
//                   placeholder="Enter features separated by commas (e.g., Feature 1, Feature 2)"
//                   rows={4}
//                 ></textarea>
//               </div>
//             </div>
            
//             <div className="flex justify-between items-center gap-4 mt-6">
//               <button
//                 className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transition-colors duration-300"
//                 onClick={handleCreatePlan}
//               >
//                 Create New Plan
//               </button>
//               <button
//                 className="border border-gray-300 py-2 px-4 text-gray-700 rounded hover:bg-gray-100 transition-colors duration-300"
//                 onClick={() => setShowUserCreatModal(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;


"use client";
import React, { useState, useEffect } from "react";

interface PackageData {
  id: string;
  planName: string;
  Status: string;
  Description: string;
  Price: number;
  PriceAfterDiscount: number;
  instalments: string;
  Features: string;
}

const Page = () => {
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [showUserCreatModal, setShowUserCreatModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PackageData | null>(null);
  const [plans, setPlans] = useState<PackageData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState<PackageData>({
    id: "",
    planName: "",
    Status: "",
    Description: "",
    Price: 0,
    PriceAfterDiscount: 0,
    instalments: "",
    Features: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "Price" || name === "PriceAfterDiscount"
          ? value === ""
            ? ""
            : Number(value)
          : value,
    }));
  };

  const handleCreatePlan = async () => {
    try {
      if (updateMode && selectedPlan) {
        setPlans(
          plans.map((plan) =>
            plan.id === selectedPlan.id
              ? { ...formData, id: selectedPlan.id }
              : plan
          )
        );
        setUpdateMode(false);
      } else {
        setPlans([...plans, { ...formData, id: Date.now().toString() }]);
      }
      setShowUserCreatModal(false);
      resetForm();
    } catch (error) {
      alert("Failed to save plan.");
    }
  };

  const resetForm = () => {
    setFormData({
      id: "",
      planName: "",
      Status: "",
      Description: "",
      Price: 0,
      PriceAfterDiscount: 0,
      instalments: "",
      Features: "",
    });
  };

  const handleViewPlan = (plan: PackageData) => {
    setSelectedPlan(plan);
    setShowUserDetailsModal(true);
  };

  const handleUpdatePlan = () => {
    if (selectedPlan) {
      setFormData({ ...selectedPlan });
      setShowUserDetailsModal(false);
      setUpdateMode(true);
      setShowUserCreatModal(true);
    }
  };

  const handleDeletePlan = (id: string) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans);
    setShowUserDetailsModal(false);
  };

  const filteredPlans = plans.filter(
    (plan) =>
      plan.planName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.id?.includes(searchTerm) ||
      plan.PriceAfterDiscount?.toString().includes(searchTerm)
  );

  return (
    <div className="p-4">
      {/* Top Section */}
      <div className="max-w-[1200px] w-full mx-auto bg-[#eafaf8] shadow-md p-4 rounded-lg flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <h1 className="text-lg md:text-xl font-semibold">Plan ID</h1>
          <h1 className="text-lg md:text-xl font-semibold">Plan Name</h1>
          <h1 className="text-lg md:text-xl font-semibold">Price</h1>
        </div>
        <p className="text-sm md:text-lg font-medium text-gray-800">
          Total Plans: {plans.length}
        </p>
        <form
          className="flex flex-col sm:flex-row sm:space-x-2 w-full sm:w-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-300 p-2 rounded-md focus:outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="mt-2 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Search
          </button>
        </form>
      </div>

      {/* Create New Plan */}
      <div className="max-w-[1200px] w-full mx-auto bg-white shadow-md p-4 rounded-lg mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-700">Create New Plan</p>
        <button
          className="bg-[#eafaf8] border border-gray-400 px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black"
          onClick={() => {
            setUpdateMode(false);
            resetForm();
            setShowUserCreatModal(true);
          }}
        >
          Create
        </button>
      </div>

      {/* Loading */}
      {isLoading ? (
        <div className="max-w-[1200px] w-full mx-auto mt-8 text-center">
          <p className="text-xl">Loading plans...</p>
        </div>
      ) : filteredPlans.length > 0 ? (
        filteredPlans.map((plan) => (
          <div
            key={plan.id}
            className="max-w-[1200px] w-full mx-auto bg-white shadow-md p-4 rounded-lg mt-4 flex flex-col md:flex-row md:justify-between md:items-center"
          >
            <div className="space-y-2 md:space-y-0 md:flex md:space-x-4">
              <p className="text-gray-700">ID: {plan.id}</p>
              <p className="text-gray-700">Name: {plan.planName}</p>
              <p className="text-gray-700">
                Price: ₹{plan.PriceAfterDiscount}
              </p>
            </div>
            <button
              className="mt-2 md:mt-0 border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black"
              onClick={() => handleViewPlan(plan)}
            >
              View
            </button>
          </div>
        ))
      ) : (
        <div className="max-w-[1200px] w-full mx-auto mt-8 text-center">
          <p className="text-xl">No plans found.</p>
        </div>
      )}

      {/* View Modal */}
      {showUserDetailsModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 z-10 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-2">Plan Details</h2>
            <p><b>ID:</b> {selectedPlan.id}</p>
            <p><b>Name:</b> {selectedPlan.planName}</p>
            <p><b>Status:</b> {selectedPlan.Status}</p>
            <p><b>Description:</b> {selectedPlan.Description}</p>
            <p><b>Price:</b> ₹{selectedPlan.Price}</p>
            <p><b>Discounted:</b> ₹{selectedPlan.PriceAfterDiscount}</p>
            <p><b>Instalments:</b> {selectedPlan.instalments}</p>
            <p><b>Features:</b></p>
            <ul className="list-disc pl-4">
              {selectedPlan.Features?.split(",").map((f, i) => (
                <li key={i}>{f.trim()}</li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleUpdatePlan}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => handleDeletePlan(selectedPlan.id)}
              >
                Delete
              </button>
              <button
                className="border px-4 py-2 rounded"
                onClick={() => setShowUserDetailsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create/Update Modal */}
      {showUserCreatModal && (
        <div className="fixed inset-0 bg-black/50 z-10 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {updateMode ? "Update Plan" : "Create Plan"}
            </h2>

            <div className="space-y-4">
              <input
                name="planName"
                value={formData.planName}
                onChange={handleChange}
                placeholder="Plan Name"
                className="w-full p-2 border rounded"
              />
              <select
                name="Status"
                value={formData.Status}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <input
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full p-2 border rounded"
              />
              <input
                name="Price"
                type="number"
                value={formData.Price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full p-2 border rounded"
              />
              <input
                name="PriceAfterDiscount"
                type="number"
                value={formData.PriceAfterDiscount}
                onChange={handleChange}
                placeholder="Discounted Price"
                className="w-full p-2 border rounded"
              />
              <input
                name="instalments"
                value={formData.instalments}
                onChange={handleChange}
                placeholder="Instalments"
                className="w-full p-2 border rounded"
              />
              <textarea
                name="Features"
                value={formData.Features}
                onChange={handleChange}
                placeholder="Features (comma separated)"
                className="w-full p-2 border rounded"
              ></textarea>
            </div>

            <div className="flex justify-between mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleCreatePlan}
              >
                {updateMode ? "Update" : "Create"}
              </button>
              <button
                className="border px-4 py-2 rounded"
                onClick={() => setShowUserCreatModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
