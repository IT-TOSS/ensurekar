"use client"

import { motion } from "framer-motion"
import type React from "react"
import { useState, useEffect } from "react"
import type { ProfileData } from "../../../../types/Profile-Data"
import type { IRootState } from "@/store"
import { useSelector } from "react-redux"
import { GetUserProfile } from "@/api/SEOSetup/userProfile"
import axios from "axios"

// Firebase imports
import { db } from "../../../firebase/firebase.config"
import { collection, getDocs, query, where, doc, setDoc, getDoc } from "firebase/firestore"

interface ClientData {
  id: string
  firstName?: string
  lastName?: string
  email?: string
  whatsappNumber?: string
  role?: string
  createdAt?: number
  lastLogin?: number
}

interface InitialFormData {
  personal: {
    userName: string
    firstName: string
    lastName: string
    fatherName: string
    DOB: string
    sex: string
    maritalStatus: string
    id?: number
  }
  company: {
    company: string
    organisationType: string
    about: string
    cin: string
    pan: string
    aadhar: string
    incorporationDate: string
    moa: string
    aoa: string
    gst: string
    udyamNumber: string
    dpit: string
  }
  identity: {
    pan: string
    aadhar: string
    din: string
    addressProof: string
    addressProofName: string
    nationality: string
  }
  bank: {
    bank: string
    accountHolderName: string
    accountNumber: string
    ifsc: string
  }
  address: {
    address: string
    state: string
    city: string
    pin: string
    email: string
    secondaryEmail: string
    contactNo: string
    secondaryContact: string
  }
  document: {
    other: File | null
    addharcar: File | null
    InvestmentDetails: File | null
    form16: File | null
    BankDetails: File | null
    OtherDocument: File | null
  }
}

const AccountSettings = ({ 
  profileData, 
  firebaseUserId,
  existingFirebaseData 
}: { 
  profileData?: ProfileData,
  firebaseUserId?: string,
  existingFirebaseData?: any
}) => {
  const [formData, setFormData] = useState<ProfileData | undefined>(profileData)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [selectedTab, setSelectedTab] = useState("Personal")
  const [loading, setLoading] = useState(true)
  const [clients, setClients] = useState<ClientData[]>([])
  const [filteredClients, setFilteredClients] = useState<ClientData[]>([])
  const [firebaseData, setFirebaseData] = useState<any>(existingFirebaseData || null)
  const [successMessage, setSuccessMessage] = useState<string>("")
  const [userId, setUserId] = useState<string>(firebaseUserId || "")


  // Initialize form data
  const initialFormData: InitialFormData = {
    personal: {
      userName: "",
      firstName: "",
      lastName: "",
      fatherName: "",
      DOB: "",
      sex: "",
      maritalStatus: "Single",
    },
    company: {
      company: "",
      organisationType: "",
      about: "",
      cin: "",
      pan: "",
      aadhar: "",
      incorporationDate: "",
      moa: "",
      aoa: "",
      gst: "",
      udyamNumber: "",
      dpit: "",
    },
    identity: {
      pan: "",
      aadhar: "",
      din: "",
      addressProof: "",
      addressProofName: "",
      nationality: "India",
    },
    bank: {
      bank: "",
      accountHolderName: "",
      accountNumber: "",
      ifsc: "",
    },
    address: {
      address: "",
      state: "",
      city: "",
      pin: "",
      email: "",
      secondaryEmail: "",
      contactNo: "",
      secondaryContact: "",
    },
    document: {
      other: null,
      addharcar: null,
      InvestmentDetails: null,
      form16: null,
      BankDetails: null,
      OtherDocument: null,
    },
  }

  const [inputFormData, setInputFormData] = useState<InitialFormData>(initialFormData)
  const userInfo = useSelector((state: IRootState) => state.themeConfig.userInfo)

  // Fetch user profile data from API
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await GetUserProfile("GET")
        setFormData(response)
        
        // Update inputFormData with API data
        if (response) {
          setInputFormData(prevData => {
            const newData = { ...prevData };
            
            // Map API data to our form structure
            for (const section in response) {
              if (section in newData && typeof response[section] === 'object') {
                newData[section as keyof InitialFormData] = {
                  ...(newData[section as keyof InitialFormData]),
                  ...response[section]
                }
              }
            }
            console.log("i am new data---"); 
            console.log(inputFormData);
            
            return newData;
          });
        }
      } catch (error) {
        console.error("Error fetching user profile:", error)
      }
    }
    
    if (!existingFirebaseData) {
      getUserData()
    }
  }, [profileData, existingFirebaseData])

  // Get user data from Firebase by email or use existing data
  useEffect(() => {
    const getUserDataFromFirebase = async () => {
      if (existingFirebaseData) {
        // Use existing Firebase data passed from parent
        processFirebaseData(existingFirebaseData)
        setLoading(false)
        return
      }
      
      if (firebaseUserId) {
        // If we have a document ID, get the document directly
        try {
          const docRef = doc(db, "users", firebaseUserId)
          const docSnap = await getDoc(docRef)
          
          if (docSnap.exists()) {
            const userData = docSnap.data()
            setFirebaseData(userData)
            processFirebaseData(userData)
          }
        } catch (error) {
          console.error("Error getting document by ID:", error)
        }
        
        setLoading(false)
        return
      }
      
      if (userInfo?.email) {
        await getUserByEmail(userInfo.email)
      } else {
        setLoading(false)
      }
    }
    
    getUserDataFromFirebase()
  }, [existingFirebaseData, firebaseUserId, userInfo])

  // Get user data from Firebase by email
  const getUserByEmail = async (email: string): Promise<void> => {
    if (!email) {
      console.error("No email provided to getUserByEmail")
      return
    }

    try {
      setLoading(true)
      
      // First try direct document ID (in case email is used as document ID)
      try {
        const docRef = doc(db, "users", email)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          const userData = docSnap.data()
          setFirebaseData(userData)
          setUserId(email)
          processFirebaseData(userData)
          setLoading(false)
          return
        }
      } catch (directError) {
        console.log("Direct document access failed, trying query...")
      }
      
      // Create a query to find users with the matching email
      const usersRef = collection(db, "users")
      const q = query(usersRef, where("email", "==", email))
      const querySnapshot = await getDocs(q)

      if (querySnapshot.empty) {
        console.log("No user found with email:", email)
        setLoading(false)
        return
      }

      // Get the first matching document
      const userDoc = querySnapshot.docs[0]
      const userData = userDoc.data()
      const docId = userDoc.id
      
      console.log("Firebase user data found:", userData)
      setFirebaseData(userData)
      setUserId(docId)
      
      // Process the data immediately to populate the form
      processFirebaseData(userData)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching user data:", error)
      setLoading(false)
    }
  }

  // Process Firebase data to populate form
  const processFirebaseData = (data: any) => {
    if (!data) return

    const newFormData = { ...initialFormData }

    // Handle flat data structure with dot notation (Firebase format)
    Object.keys(data).forEach((key) => {
      if (key.includes(".")) {
        const [section, field] = key.split(".")
        if (section in newFormData && field in newFormData[section as keyof InitialFormData]) {
          (newFormData[section as keyof InitialFormData] as any)[field] = data[key]
        }
      } else if (key === "email") {
        // Handle email specially if it's at the root level
        newFormData.address.email = data.email
      }
    })

    // Also look for nested objects
    for (const section in newFormData) {
      if (data[section]) {
        for (const field in newFormData[section as keyof InitialFormData]) {
          if (data[section][field] !== undefined) {
            (newFormData[section as keyof InitialFormData] as any)[field] = data[section][field]
          }
        }
      }
    }

    // Set basic user info from Redux if not already set
    if (userInfo) {
      newFormData.personal.firstName = newFormData.personal.firstName || userInfo.Fname || ""
      newFormData.personal.lastName = newFormData.personal.lastName || userInfo.Lname || ""
      newFormData.personal.userName = newFormData.personal.userName || userInfo.username || ""
      newFormData.address.email = newFormData.address.email || userInfo.email || ""
      newFormData.address.contactNo = newFormData.address.contactNo || userInfo.contact || ""
    }

    setInputFormData(newFormData)
  }

  // Form validation
  const validate = () => {
    let valid = true
    const newErrors = { ...errors }

    if (!inputFormData.personal.userName) {
      newErrors.userName = "Username is required"
      valid = false
    }

    // Add more validation as needed
    // For example:
    if (inputFormData.identity.pan && !/[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(inputFormData.identity.pan)) {
      newErrors.pan = "Invalid PAN format"
      valid = false
    }

    if (inputFormData.identity.aadhar && !/^\d{12}$/.test(inputFormData.identity.aadhar)) {
      newErrors.aadhar = "Aadhar should be 12 digits"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  // Handle form input changes - FIXED VERSION
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Check if the name includes a dot (section.field format)
    if (name.includes(".")) {
      const [sectionName, fieldName] = name.split(".")
      
      setInputFormData(prevData => ({
        ...prevData,
        [sectionName]: {
          ...(prevData[sectionName as keyof InitialFormData] as any),
          [fieldName]: value
        }
      }))
    } else {
      // For inputs without section prefix, we need to determine which section it belongs to
      let sectionName = ""
      
      // Check which section this field belongs to
      if (Object.keys(inputFormData.personal).includes(name)) {
        sectionName = "personal"
      } else if (Object.keys(inputFormData.company).includes(name)) {
        sectionName = "company"
      } else if (Object.keys(inputFormData.identity).includes(name)) {
        sectionName = "identity"
      } else if (Object.keys(inputFormData.bank).includes(name)) {
        sectionName = "bank"
      } else if (Object.keys(inputFormData.address).includes(name)) {
        sectionName = "address"
      }
      
      if (sectionName) {
        setInputFormData(prevData => ({
          ...prevData,
          [sectionName]: {
            ...(prevData[sectionName as keyof InitialFormData] as any),
            [name]: value
          }
        }))
      }
    }
  }

  // Handle file uploads
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files.length > 0) {
      setInputFormData((prevData) => ({
        ...prevData,
        document: { ...prevData.document, [name]: files[0] },
      }))
    }
  }

  // Update user profile in Firebase
  const updateUserInFirebase = async (formData: any) => {
    if (!userInfo?.email) {
      console.error("No user email available")
      return false
    }

    try {
      // Prepare data for Firebase
      const flattenedData: Record<string, any> = {}
      
      // Flatten the form data structure with dot notation for Firebase
      Object.entries(formData).forEach(([section, sectionData]: [string, any]) => {
        if (section !== "document") {
          Object.entries(sectionData).forEach(([key, value]) => {
            if (value !== null && value !== "") {
              flattenedData[`${section}.${key}`] = value
            }
          })
        }
      })
      
      // Add email at root level for easier queries
      flattenedData.email = userInfo.email
      
      // Update or create the user document
      if (userId) {
        // If we have a userId, update the existing document
        await setDoc(doc(db, "users", userId), flattenedData, { merge: true })
      } else {
        // Try using email as the document ID first
        try {
          await setDoc(doc(db, "users", userInfo.email), flattenedData)
          setUserId(userInfo.email)
        } catch (error) {
          // If that fails, create a new document with auto-generated ID
          const usersRef = collection(db, "users")
          const newDocRef = doc(usersRef)
          await setDoc(newDocRef, flattenedData)
          setUserId(newDocRef.id)
        }
      }
      
      return true
    } catch (error) {
      console.error("Error updating user in Firebase:", error)
      return false
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // if (validate()) { // here we peform update operation
    //   return
    // }

    
    try {
      // First update in Firebase
      
      // if(validate()){
      //   return;
      // }
      
      setLoading(true)
      const firebaseSuccess = await updateUserInFirebase(inputFormData)
      
      // Create a FormData object for server API submission
      const formDataToSend = new FormData()

      // Add data from each section
      Object.entries(inputFormData).forEach(([section, sectionData]: [string, any]) => {
        if (section !== "document") {
          Object.entries(sectionData).forEach(([key, value]) => {
            if (value) formDataToSend.append(`${section}.${key}`, value as string)
          })
        }
      })

      // Add files
      Object.entries(inputFormData.document).forEach(([key, file]) => {
        if (file instanceof File) {
          formDataToSend.append(`document.${key}`, file)
        }
      })
      

      try {
        // Send the data to the server API

        console.log("i am Data whose going to backend")
        const response = await axios.post("http://localhost:4000/v1/setting/update-user-info", formDataToSend)
        console.log("API Success:", response)
      } catch (apiError) {
        console.error("API update error:", apiError)
        // Continue - we'll still consider it a success if Firebase updated
      }

      setSuccessMessage(firebaseSuccess 
        ? "Profile updated successfully!" 
        : "There was an issue updating your profile. Please try again.")

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("")
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSuccessMessage("There was an error updating your profile. Please try again.")
    } finally {
      setLoading(false)
    }
  }
  
  // Fix: Create this function for Contact tab
  const handlePersonalInformation = handleSubmit;
  
  const Tabs = ["Personal", "Company", "Identity", "Bank", "Contact"]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container flex md:flex-row flex-col justify-between items-start"
    >
      {/* Loading indicator */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent mx-auto"></div>
            <p className="mt-4 text-center">Loading...</p>
          </div>
        </div>
      )}

      {/* Tabs navigation */}
      <div className="flex flex-wrap min-w-[200px] gap-2 mt-5 mb-2 items-center lg:flex-col flex-row justify-center">
        {Tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab)}
            className={`px-3 py-2 min-w-[100px] hover:bg-s2 hover:text-black duration-300 font-bold rounded ${
              selectedTab === tab ? "bg-s2 text-black" : "bg-softBg1 text-bodyText"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main content area */}
      <div className="w-full">
        {/* Success message */}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}

        {/* Personal Information Tab */}
        {selectedTab === "Personal" && (
          <div>
            <h2 className="font-bold text-2xl text-center my-5 bg-softBg1 text-bodyText p-5">Personal Information</h2>
            <form
              method="POST"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
              {/* User Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">User Name</label>
                <input
                  type="text"
                  name="userName"
                  value={inputFormData.personal.userName || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                  placeholder="Enter your username"
                  // readOnly
                />
                {errors.userName && <p className="text-red-500 text-xs">{errors.userName}</p>}
              </div>

              {/* First Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={inputFormData.personal.firstName || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                  placeholder="Enter your first name"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={inputFormData.personal.lastName || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                  placeholder="Enter your last name"
                />
              </div>

              {/* Father's Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Father's Name</label>
                <input
                  type="text"
                  name="fatherName"
                  value={inputFormData.personal.fatherName || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                  placeholder="Enter father's name"
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="DOB"
                  value={inputFormData.personal.DOB || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              {/* Sex */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Sex</label>
                <select
                  name="sex"
                  value={inputFormData.personal.sex || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Marital Status */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                <select
                  name="maritalStatus"
                  value={inputFormData.personal.maritalStatus || "Single"}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Upload document */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Upload Document</label>
                <input
                  type="file"
                  name="other"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                  placeholder="Upload your Document"
                />
              </div>

              <div className="lg:col-span-3 md:col-span-2 col-span-1 mx-auto my-6">
                <button
                  type="submit"
                  className="px-3 py-2 w-52 hover:bg-s2 hover:text-black duration-300 font-bold rounded border bg-softBg1 text-bodyText"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Company Information Tab */}
        {selectedTab === "Company" && (
          <div>
            <h2 className="font-bold text-2xl text-center my-5 bg-softBg1 text-bodyText p-5">Company Information</h2>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={inputFormData.company.company || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Organisation Type</label>
                <select
                  name="organisationType"
                  value={inputFormData.company.organisationType || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                >
                  <option value="">Select Organization Type</option>
                  <option value="Partnership Firm">Partnership Firm</option>
                  <option value="Private Limited">Private Limited</option>
                  <option value="Public Limited">Public Limited</option>
                  <option value="Sole Proprietorship">Sole Proprietorship</option>
                  <option value="LLP">LLP</option>
                  <option value="Government">Government</option>
                  <option value="Non-Profit">Non-Profit</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Upload investment details */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Investment details</label>
                <input
                  type="file"
                  name="InvestmentDetails"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                  placeholder="Upload your Document"
                />
              </div>

              <div className="md:col-span-2 col-span-1 mx-auto my-6">
                <button
                  type="submit"
                  className="px-3 py-2 w-52 hover:bg-s2 hover:text-black duration-300 font-bold rounded border bg-softBg1 text-bodyText"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Identity Information Tab */}
        {selectedTab === "Identity" && (
          <div>
            <h2 className="font-bold text-2xl text-center my-5 bg-softBg1 text-bodyText p-5">Identity Information</h2>
            <form
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
              {/* PAN */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">PAN</label>
                <input
                  type="text"
                  name="identity.pan"
                  value={inputFormData.identity.pan || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
                {errors.pan && <p className="text-red-500 text-xs">{errors.pan}</p>}
              </div>

              {/* Aadhar */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Aadhar Card</label>
                <input
                  type="text"
                  name="identity.aadhar"
                  value={inputFormData.identity.aadhar || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
                {errors.aadhar && <p className="text-red-500 text-xs">{errors.aadhar}</p>}
              </div>

              {/* DIN */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">DIN Card</label>
                <input
                  type="text"
                  name="identity.din"
                  value={inputFormData.identity.din || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              {/* Address Proof */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Address Proof</label>
                <input
                  type="text"
                  name="addressProof"
                  value={inputFormData.identity.addressProof || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              {/* Address Proof Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Address Proof Name</label>
                <input
                  type="text"
                  name="addressProofName"
                  value={inputFormData.identity.addressProofName || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              {/* Nationality */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Nationality</label>
                <select
                  name="nationality"
                  value={inputFormData.identity.nationality || "India"}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                >
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Upload aadhar card */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Upload Aadhar Card</label>
                <input
                  type="file"
                  name="addharcar"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                  placeholder="Upload your Aadhar"
                />
              </div>

              {/* Upload form 16 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Upload Form 16</label>
                <input
                  type="file"
                  name="form16"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                  placeholder="Upload your Form 16"
                />
              </div>

              <div className="lg:col-span-3 md:col-span-2 col-span-1 mx-auto my-6">
                <button
                  type="submit"
                  className="px-3 py-2 w-52 hover:bg-s2 hover:text-black duration-300 font-bold rounded border bg-softBg1 text-bodyText"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Bank Information Tab */}
        {selectedTab === "Bank" && (
          <div>
            <h2 className="font-bold text-2xl text-center my-5 bg-softBg1 text-bodyText p-5">Bank Information</h2>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Bank Name</label>
                <input
                  type="text"
                  name="bank"
                  value={inputFormData.bank.bank || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={inputFormData.bank.accountNumber || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">IFSC Code</label>
                <input
                  type="text"
                  name="ifsc"
                  value={inputFormData.bank.ifsc || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              {/* Upload bank details */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Upload Bank Details</label>
                <input
                  type="file"
                  name="BankDetails"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                  placeholder="Upload your Document"
                />
              </div>

              <div className="md:col-span-2 col-span-1 mx-auto my-6">
                <button
                  type="submit"
                  className="px-3 py-2 w-52 hover:bg-s2 hover:text-black duration-300 font-bold rounded border bg-softBg1 text-bodyText"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Contact Information Tab */}
        {selectedTab === "Contact" && (
          <div>
            <h2 className="font-bold text-2xl text-center my-5 bg-softBg1 text-bodyText p-5">Contact Information</h2>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={inputFormData.address.address || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  name="state"
                  value={inputFormData.address.state || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={inputFormData.address.city || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Pin</label>
                <input
                  type="text"
                  name="pin"
                  value={inputFormData.address.pin || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={inputFormData.address.email || ""}
                  onChange={handleChange}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Secondary Email</label>
                <input
                  type="email"
                  name="secondaryEmail"
                  value={inputFormData.address.secondaryEmail || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Contact No</label>
                <input
                  type="text"
                  name="contactNo"
                  value={inputFormData.address.contactNo || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Secondary Contact</label>
                <input
                  type="text"
                  name="secondaryContact"
                  value={inputFormData.address.secondaryContact || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              {/* Upload other document */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Other Document</label>
                <input
                  type="file"
                  name="OtherDocument"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                  placeholder="Upload your Document"
                />
              </div>

              <div className="md:col-span-2 col-span-1 mx-auto my-6">
                <button
                  type="submit"
                  className="px-3 py-2 w-52 hover:bg-s2 hover:text-black duration-300 font-bold rounded border bg-softBg1 text-bodyText"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default AccountSettings

