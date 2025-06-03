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


// "use client";
// import React, { useState, useEffect } from "react";

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
//   const [isLoading, setIsLoading] = useState(false);
//   const [updateMode, setUpdateMode] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

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

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]:
//         name === "Price" || name === "PriceAfterDiscount"
//           ? value === ""
//             ? ""
//             : Number(value)
//           : value,
//     }));
//   };

//   const handleCreatePlan = async () => {
//     try {
//       if (updateMode && selectedPlan) {
//         setPlans(
//           plans.map((plan) =>
//             plan.id === selectedPlan.id
//               ? { ...formData, id: selectedPlan.id }
//               : plan
//           )
//         );
//         setUpdateMode(false);
//       } else {
//         setPlans([...plans, { ...formData, id: Date.now().toString() }]);
//       }
//       setShowUserCreatModal(false);
//       resetForm();
//     } catch (error) {
//       alert("Failed to save plan.");
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
//       setFormData({ ...selectedPlan });
//       setShowUserDetailsModal(false);
//       setUpdateMode(true);
//       setShowUserCreatModal(true);
//     }
//   };

//   const handleDeletePlan = (id: string) => {
//     const updatedPlans = plans.filter((plan) => plan.id !== id);
//     setPlans(updatedPlans);
//     setShowUserDetailsModal(false);
//   };

//   const filteredPlans = plans.filter(
//     (plan) =>
//       plan.planName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       plan.id?.includes(searchTerm) ||
//       plan.PriceAfterDiscount?.toString().includes(searchTerm)
//   );

//   return (
//     <div className="p-4">
//       {/* Top Section */}
//       <div className="max-w-[1200px] w-full mx-auto bg-[#eafaf8] shadow-md p-4 rounded-lg flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
//         <div className="flex flex-col md:flex-row md:items-center md:gap-4">
//           <h1 className="text-lg md:text-xl font-semibold">Plan ID</h1>
//           <h1 className="text-lg md:text-xl font-semibold">Plan Name</h1>
//           <h1 className="text-lg md:text-xl font-semibold">Price</h1>
//         </div>
//         <p className="text-sm md:text-lg font-medium text-gray-800">
//           Total Plans: {plans.length}
//         </p>
//         <form
//           className="flex flex-col sm:flex-row sm:space-x-2 w-full sm:w-auto"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <input
//             type="search"
//             placeholder="Search"
//             className="border border-gray-300 p-2 rounded-md focus:outline-none w-full"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="mt-2 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
//             Search
//           </button>
//         </form>
//       </div>

//       {/* Create New Plan */}
//       <div className="max-w-[1200px] w-full mx-auto bg-white shadow-md p-4 rounded-lg mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
//         <p className="text-gray-700">Create New Plan</p>
//         <button
//           className="bg-[#eafaf8] border border-gray-400 px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black"
//           onClick={() => {
//             setUpdateMode(false);
//             resetForm();
//             setShowUserCreatModal(true);
//           }}
//         >
//           Create
//         </button>
//       </div>

//       {/* Loading */}
//       {isLoading ? (
//         <div className="max-w-[1200px] w-full mx-auto mt-8 text-center">
//           <p className="text-xl">Loading plans...</p>
//         </div>
//       ) : filteredPlans.length > 0 ? (
//         filteredPlans.map((plan) => (
//           <div
//             key={plan.id}
//             className="max-w-[1200px] w-full mx-auto bg-white shadow-md p-4 rounded-lg mt-4 flex flex-col md:flex-row md:justify-between md:items-center"
//           >
//             <div className="space-y-2 md:space-y-0 md:flex md:space-x-4">
//               <p className="text-gray-700">ID: {plan.id}</p>
//               <p className="text-gray-700">Name: {plan.planName}</p>
//               <p className="text-gray-700">
//                 Price: ₹{plan.PriceAfterDiscount}
//               </p>
//             </div>
//             <button
//               className="mt-2 md:mt-0 border border-gray-400 bg-[#eafaf8] px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black"
//               onClick={() => handleViewPlan(plan)}
//             >
//               View
//             </button>
//           </div>
//         ))
//       ) : (
//         <div className="max-w-[1200px] w-full mx-auto mt-8 text-center">
//           <p className="text-xl">No plans found.</p>
//         </div>
//       )}

//       {/* View Modal */}
//       {showUserDetailsModal && selectedPlan && (
//         <div className="fixed inset-0 bg-black/50 z-10 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
//             <h2 className="text-xl font-semibold mb-2">Plan Details</h2>
//             <p><b>ID:</b> {selectedPlan.id}</p>
//             <p><b>Name:</b> {selectedPlan.planName}</p>
//             <p><b>Status:</b> {selectedPlan.Status}</p>
//             <p><b>Description:</b> {selectedPlan.Description}</p>
//             <p><b>Price:</b> ₹{selectedPlan.Price}</p>
//             <p><b>Discounted:</b> ₹{selectedPlan.PriceAfterDiscount}</p>
//             <p><b>Instalments:</b> {selectedPlan.instalments}</p>
//             <p><b>Features:</b></p>
//             <ul className="list-disc pl-4">
//               {selectedPlan.Features?.split(",").map((f, i) => (
//                 <li key={i}>{f.trim()}</li>
//               ))}
//             </ul>
//             <div className="mt-4 flex justify-between">
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
//                 onClick={handleUpdatePlan}
//               >
//                 Update
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//                 onClick={() => handleDeletePlan(selectedPlan.id)}
//               >
//                 Delete
//               </button>
//               <button
//                 className="border px-4 py-2 rounded"
//                 onClick={() => setShowUserDetailsModal(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Create/Update Modal */}
//       {showUserCreatModal && (
//         <div className="fixed inset-0 bg-black/50 z-10 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
//             <h2 className="text-xl font-semibold mb-4">
//               {updateMode ? "Update Plan" : "Create Plan"}
//             </h2>

//             <div className="space-y-4">
//               <input
//                 name="planName"
//                 value={formData.planName}
//                 onChange={handleChange}
//                 placeholder="Plan Name"
//                 className="w-full p-2 border rounded"
//               />
//               <select
//                 name="Status"
//                 value={formData.Status}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="">Select Status</option>
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//               <input
//                 name="Description"
//                 value={formData.Description}
//                 onChange={handleChange}
//                 placeholder="Description"
//                 className="w-full p-2 border rounded"
//               />
//               <input
//                 name="Price"
//                 type="number"
//                 value={formData.Price}
//                 onChange={handleChange}
//                 placeholder="Price"
//                 className="w-full p-2 border rounded"
//               />
//               <input
//                 name="PriceAfterDiscount"
//                 type="number"
//                 value={formData.PriceAfterDiscount}
//                 onChange={handleChange}
//                 placeholder="Discounted Price"
//                 className="w-full p-2 border rounded"
//               />
//               <input
//                 name="instalments"
//                 value={formData.instalments}
//                 onChange={handleChange}
//                 placeholder="Instalments"
//                 className="w-full p-2 border rounded"
//               />
//               <textarea
//                 name="Features"
//                 value={formData.Features}
//                 onChange={handleChange}
//                 placeholder="Features (comma separated)"
//                 className="w-full p-2 border rounded"
//               ></textarea>
//             </div>

//             <div className="flex justify-between mt-4">
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
//                 onClick={handleCreatePlan}
//               >
//                 {updateMode ? "Update" : "Create"}
//               </button>
//               <button
//                 className="border px-4 py-2 rounded"
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
  Page: string;
}

//  API configuration
const WC_API_CONFIG = {
  baseUrl: "https://edueye.co.in/ensurekar/wp-json/wc/v3",
  consumerKey: "ck_1a163a1d803b2ed9c2c501a232692bd5ee3c2619",
  consumerSecret: "cs_054aea9c8f7ddeef9b7ceb5fc45c56cd422ba4a2"
};

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
    Page: "", 
  });

  useEffect(() => {
    fetchPlans();
  }, []);

  // Convert PackageData to  product format
  const mapToProduct = (planData: PackageData) => {
    const featuresArray = planData.Features ? planData.Features.split(',').map(f => f.trim()) : [];
    
    return {
      name: planData.planName,
      type: "simple",
      regular_price: planData.Price.toString(),
      sale_price: planData.PriceAfterDiscount.toString(),
      description: planData.Description,
      short_description: `${planData.instalments} installment plan`,
      status: planData.Status.toLowerCase() === 'active' ? 'publish' : 'draft',
      catalog_visibility: 'visible',
      featured: false,
      categories: [
        {
          name: planData.Page || "General Plans"
        }
      ],
      attributes: [
        {
          name: "Features",
          options: featuresArray,
          visible: true,
          variation: false
        },
        {
          name: "Installments",
          options: [planData.instalments],
          visible: true,
          variation: false
        },
        {
          name: "Page Category",
          options: [planData.Page],
          visible: true,
          variation: false
        }
      ],
      meta_data: [
        {
          key: "_plan_features",
          value: planData.Features
        },
        {
          key: "_plan_installments",
          value: planData.instalments
        },
        {
          key: "_plan_page",
          value: planData.Page
        }
      ]
    };
  };

  // Convert  product to PackageData format
  const mapFromProduct = (product: any): PackageData => {
    const getMetaValue = (key: string) => {
      const meta = product.meta_data?.find((m: any) => m.key === key);
      return meta ? meta.value : '';
    };

    return {
      id: product.id.toString(),
      planName: product.name || '',
      Status: product.status === 'publish' ? 'Active' : 'Inactive',
      Description: product.description || product.short_description || '',
      Price: parseFloat(product.regular_price) || 0,
      PriceAfterDiscount: parseFloat(product.sale_price) || parseFloat(product.regular_price) || 0,
      instalments: getMetaValue('_plan_installments') || '',
      Features: getMetaValue('_plan_features') || '',
      Page: getMetaValue('_plan_page') || (product.categories?.[0]?.name || '')
    };
  };

  // Fetch plans from  API
  const fetchPlans = async () => {
    setIsLoading(true);
    try {
      const url = `${WC_API_CONFIG.baseUrl}/products?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}&per_page=100`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch plans: ${response.status}`);
      }

      const products = await response.json();
      const mappedPlans = products.map(mapFromProduct);
      setPlans(mappedPlans);
      console.log("Fetched plans:", mappedPlans);
    } catch (error) {
      console.error("Failed to fetch plans:", error);
      alert("Failed to fetch plans. Please check your API credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Create new plan in 
  const postPlanToAPI = async (planData: PackageData) => {
    try {
      console.log("Creating plan:", planData);
      const Product = mapToProduct(planData);
      
      const url = `${WC_API_CONFIG.baseUrl}/products?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Product),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API error response:", errorData);
        throw new Error(`API request failed with status ${response.status}: ${errorData.message || 'Unknown error'}`);
      }

      const result = await response.json();
      console.log("Plan created successfully:", result);
      return result;
    } catch (error) {
      console.error("Failed to create plan:", error);
      throw error;
    }
  };

  // Update plan 
  const updatePlanInAPI = async (planData: PackageData) => {
    try {
      console.log("Updating plan:", planData);
      const Product = mapToProduct(planData);
      
      const url = `${WC_API_CONFIG.baseUrl}/products/${planData.id}?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}`;

      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Product),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API error response:", errorData);
        throw new Error(`Failed to update plan: ${response.status}`);
      }

      const result = await response.json();
      console.log("Plan updated successfully:", result);
      return result;
    } catch (error) {
      console.error("Failed to update plan:", error);
      throw error;
    }
  };

  // Delete plan 
  const deletePlanFromAPI = async (id: string) => {
    try {
      const url = `${WC_API_CONFIG.baseUrl}/products/${id}?consumer_key=${WC_API_CONFIG.consumerKey}&consumer_secret=${WC_API_CONFIG.consumerSecret}&force=true`;

      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to delete plan: ${response.status}`);
      }

      const result = await response.json();
      console.log("Plan deleted successfully:", result);
      return result;
    } catch (error) {
      console.error("Failed to delete plan:", error);
      throw error;
    }
  };

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
    // Validation
    if (!formData.planName || !formData.Status || !formData.Price) {
      alert("Please fill in all required fields (Plan Name, Status, and Price).");
      return;
    }

    setIsLoading(true);
    try {
      if (updateMode && selectedPlan) {
        // Update existing plan
        const updatedPlan = { ...formData, id: selectedPlan.id };
        await updatePlanInAPI(updatedPlan);
        
        setPlans(
          plans.map((plan) =>
            plan.id === selectedPlan.id ? updatedPlan : plan
          )
        );
        setUpdateMode(false);
        alert("Plan updated successfully!");
      } else {
        // Create new plan
        const newPlan = { ...formData, id: Date.now().toString() };
        const createdProduct = await postPlanToAPI(newPlan);
        
        // Update the plan with the actual product ID
        const createdPlan = mapFromProduct(createdProduct);
        setPlans([...plans, createdPlan]);
        alert("Plan created successfully!");
      }
      setShowUserCreatModal(false);
      resetForm();
    } catch (error) {
      alert(`Failed to save plan: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
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
      Page: "", 
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

  const handleDeletePlan = async (id: string) => {
    if (!confirm("Are you sure you want to delete this plan? This action cannot be undone.")) {
      return;
    }

    setIsLoading(true);
    try {
      await deletePlanFromAPI(id);
      const updatedPlans = plans.filter((plan) => plan.id !== id);
      setPlans(updatedPlans);
      setShowUserDetailsModal(false);
      alert("Plan deleted successfully!");
    } catch (error) {
      alert(`Failed to delete plan: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPlans = plans.filter(
    (plan) =>
      plan.planName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.id?.includes(searchTerm) ||
      plan.PriceAfterDiscount?.toString().includes(searchTerm)
  );

  return (
    <div className="min-h-screen  p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2"> Plan Management</h1>
              <p className="text-gray-600">Manage your  subscription plans efficiently</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-600">Total Plans: </span>
                <span className="font-semibold text-blue-600">{plans.length}</span>
              </div>
              
              <div className="flex gap-2">
                <input
                  type="search"
                  placeholder="Search plans..."
                  className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <button
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  onClick={() => {
                    setUpdateMode(false);
                    resetForm();
                    setShowUserCreatModal(true);
                  }}
                >
                  Create New Plan
                </button>
                
                <button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  onClick={fetchPlans}
                  disabled={isLoading}
                >
                  {isLoading ? "Refreshing..." : "Refresh"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              <span className="ml-3 text-lg text-gray-600">Loading plans...</span>
            </div>
          ) : filteredPlans.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Plan ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Plan Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Original Price</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Sale Price</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Instalments</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredPlans.map((plan, index) => (
                    <tr key={plan.id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">#{plan.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 truncate max-w-xs">{plan.Page}</div>
                        <div className="text-sm font-medium text-gray-900">{plan.planName}</div>
                        {/* <div className="text-sm text-gray-500 truncate max-w-xs">{plan.Description}</div> */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          plan.Status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {plan.Status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className="line-through text-gray-500">₹{plan.Price}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                        ₹{plan.PriceAfterDiscount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {plan.instalments}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button
                          className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                          onClick={() => handleViewPlan(plan)}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mx-auto h-24 w-24 text-gray-300 mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No plans found</h3>
              <p className="text-gray-500">Get started by creating your first plan or check your API connection.</p>
            </div>
          )}
        </div>
      </div>

      {/* Plan Details Modal */}
      {showUserDetailsModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Plan Details</h2>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Plan ID</label>
                    <p className="text-lg font-mono text-gray-900">#{selectedPlan.id}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-500">Plan Name</label>
                    <p className="text-lg text-gray-900">{selectedPlan.planName}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-500">Status</label>
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                      selectedPlan.Status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {selectedPlan.Status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Regular Price</label>
                    <p className="text-lg text-gray-500 line-through">₹{selectedPlan.Price}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-500">Sale Price</label>
                    <p className="text-xl font-semibold text-green-600">₹{selectedPlan.PriceAfterDiscount}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-500">Instalments</label>
                    <p className="text-lg text-gray-900">{selectedPlan.instalments}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">Description</label>
                <p className="text-gray-900 mt-1">{selectedPlan.Description}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">Features</label>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedPlan.Features?.split(",").map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{feature.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex flex-wrap gap-3 justify-end">
              <button
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                onClick={handleUpdatePlan}
              >
                Edit Plan
              </button>
              <button
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                onClick={() => handleDeletePlan(selectedPlan.id)}
              >
                Delete Plan
              </button>
              <button
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setShowUserDetailsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create/Update Plan Modal */}
      {showUserCreatModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                {updateMode ? "Update Plan" : "Create New Plan"}
              </h2>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category/Page *</label>
                    <input
                      name="Page"
                      type="text"
                      value={formData.Page}
                      onChange={handleChange}
                      placeholder="e.g., Premium Plans, Basic Plans"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Plan Name *</label>
                    <input
                      name="planName"
                      value={formData.planName}
                      onChange={handleChange}
                      placeholder="Enter plan name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
                    <select
                      name="Status"
                      value={formData.Status}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Status</option>
                      <option value="Active">Active (Published)</option>
                      <option value="Inactive">Inactive (Draft)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Regular Price *</label>
                    <input
                      name="Price"
                      type="number"
                      value={formData.Price}
                      onChange={handleChange}
                      placeholder="Enter regular price"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sale Price *</label>
                    <input
                      name="PriceAfterDiscount"
                      type="number"
                      value={formData.PriceAfterDiscount}
                      onChange={handleChange}
                      placeholder="Enter sale price"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instalments</label>
                    <input
                      name="instalments"
                      value={formData.instalments}
                      onChange={handleChange}
                      placeholder="e.g., 3 months, 6 months"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      name="Description"
                      value={formData.Description}
                      onChange={handleChange}
                      placeholder="Brief description of the plan"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                <textarea
                  name="Features"
                  value={formData.Features}
                  onChange={handleChange}
                  placeholder="Enter features separated by commas (e.g., Feature 1, Feature 2, Feature 3)"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                onClick={handleCreatePlan}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : (updateMode ? "Update Plan" : "Create Plan")}
              </button>
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setShowUserCreatModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;