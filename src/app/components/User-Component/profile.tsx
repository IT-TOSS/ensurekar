"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import userImage from "../../images/team_image1.png"
import { useEffect, useState } from "react"
import Analytics from "./Analytics"
import type { MetricDataType } from "../../../../types/MetricDataType"
import { UserInfo } from "@/api/SEOSetup/fetchuser"
import { useSelector, useDispatch } from "react-redux"
import type { IRootState } from "@/store"
import { setAuth } from "@/store/themeConfigSlice"
import { useRouter } from "next/navigation"
import { GetUserProfile } from "@/api/SEOSetup/userProfile"
import type { ProfileData } from "../../../../types/Profile-Data"
import AccoutSettings from "./AccoutSettings"
import { db } from "../../../firebase/firebase.config"
import { collection, getDocs, query, where, doc, getDoc, onSnapshot } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth" // Import Firebase Auth

const motionAttributes = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 },
}
const tabMotionAttributes = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
}

export default function Profile({
  MetricData,
  Othertabs,
}: {
  MetricData: MetricDataType[]
  Othertabs: string[]
}) {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig)
  const userInfo = useSelector((state: IRootState) => state.themeConfig.userInfo)
  const dispatch = useDispatch()
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [selectedTab, setSelectedTab] = useState("Identity")
  const navigate = useRouter()
  const [loading, setLoading] = useState(true)
  const [firebaseData, setFirebaseData] = useState<any>(null)
  const [userId, setUserId] = useState<string>("")
  const [firebaseUid, setFirebaseUid] = useState<string>("") // New state to store Firebase UID
  const [inputFormData, setInputFormData] = useState<any>({
    personal: {},
    company: {},
    identity: {},
    bank: {},
    address: {},
    document: {},
  })

  // Function to handle Edit Profile button click - Changed to navigate to settings page
  const handleEditClick = () => {
    // Navigate to the settings page
    navigate.push("/settings");
  };

  // Check Firebase Auth state to get UID
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        console.log("Firebase Auth UID:", uid);
        setFirebaseUid(uid);
        
        // Save UID to localStorage for persistence
        localStorage.setItem('firebaseUid', uid);
        
        // Also get user data from Firestore
        getUserByFirebaseUid(uid);
      } else {
        // Try to get from localStorage
        const savedUid = localStorage.getItem('firebaseUid');
        if (savedUid) {
          setFirebaseUid(savedUid);
          getUserByFirebaseUid(savedUid);
        } else {
          console.log("No user is signed in and no saved UID found");
        }
      }
    });
    
    return () => unsubscribe(); // Clean up subscription
  }, []);

  // Get user by Firebase UID from Firestore
  const getUserByFirebaseUid = async (uid: string): Promise<void> => {
    try {
      if (!uid) {
        console.log("Firebase UID is undefined or empty");
        return;
      }

      console.log(uid + "ha me data hu")
      
      // Try to get user document by UID
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("User found by Firebase UID:", data);
        setFirebaseData(data);
        setUserId(uid); // Set userId to the Firebase UID
        return;
      }
      
      // If direct access fails, try querying by UID field
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const data = doc.data();
        setUserId(doc.id); // Store the document ID for future updates
        console.log("User found by query:", data);
        setFirebaseData(data);
        return;
      }
      
      // If no user found, try by email as fallback
      if (userInfo?.email) {
        getUserByEmail(userInfo.email);
      }
    } catch (error) {
      console.log("Error in getUserByFirebaseUid:", error instanceof Error ? error.message : String(error));
      
      // Fall back to email lookup if Firebase UID lookup fails
      if (userInfo?.email) {
        getUserByEmail(userInfo.email);
      }
    }
  };

  // Get user by email from Firebase (fallback method)
  const getUserByEmail = async (email: string): Promise<void> => {
    try {
      if (!email) {
        console.log("Email is undefined or empty");
        return;
      }

      // Try to get user by direct document ID (if your collection uses email as document ID)
      try {
        const docRef = doc(db, "users", email);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("User found by direct ID:", data);
          setFirebaseData(data);
          setUserId(email); // Set userId to email since that's the document ID
          return;
        }
      } catch (directError) {
        // Silently catch this error and try the query method
        console.log("Direct document access failed, trying query...");
      }
      
      // If direct access fails, try querying by email field
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();
          setUserId(doc.id); // Store the document ID for future updates
          console.log("User found by query:", data);
          setFirebaseData(data);
          return;
        }
        
        console.log("No user found with this email.");
      } catch (queryError) {
        console.log("Error querying by email:", queryError);
      }
    } catch (error) {
      // Safe console error logging
      console.log("Error in getUserByEmail:", error instanceof Error ? error.message : String(error));
    }
  }

  // Function to process Firebase data and update profileData
  const processFirebaseData = (data: any) => {
    setProfileData((prevData) => {
      if (!prevData) return null;

      const newData = { ...prevData };

      // Process flat structure data (with dot notation)
      Object.keys(data).forEach((key) => {
        if (key.includes(".")) {
          const [section, field] = key.split(".");
          if (!newData[section]) newData[section] = {};
          newData[section][field] = data[key];
        } else if (key !== "email") { // Skip the root level email as we handle it separately
          // Try to map simple fields to our structure based on field names
          if (key === "firstName" || key === "lastName" || key === "fatherName" || key === "DOB" || 
              key === "sex" || key === "maritalStatus") {
            if (!newData.personal) newData.personal = {};
            newData.personal[key] = data[key];
          } else if (key === "company" || key === "organisationType") {
            if (!newData.company) newData.company = {};
            newData.company[key] = data[key];
          } else if (key === "role") {
            newData.orgType = data[key]; // Map role to orgType
          }
        }
      });

      // Ensure email is in contact section
      if (data.email && (!newData.contact || !newData.contact.email)) {
        if (!newData.contact) newData.contact = {};
        newData.contact.email = data.email;
      }

      // Look for address fields in the address section
      if (data["address.address"]) {
        if (!newData.contact) newData.contact = {};
        newData.contact.address = data["address.address"];
      }

      return newData;
    });
  }

  // Set up a real-time listener for Firebase updates
  useEffect(() => {
    if (userId) {
      const userDocRef = doc(db, "users", userId);
      
      const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          console.log("Real-time Firebase update:", data);
          setFirebaseData(data);
          processFirebaseData(data);
        }
      }, (error) => {
        console.error("Error in Firebase listener:", error);
      });
      
      // Clean up the listener when component unmounts
      return () => unsubscribe();
    }
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get("code")
      if (code && code.trim() != "" && themeConfig.isAuthenticated === false) {
        const data = await UserInfo(code)
        const { Profile } = data
        dispatch(
          setAuth({
            isAuthenticated: Profile.isAuthenticated,
            userInfo: {
              Fname: Profile.userInfo.Fname,
              Lname: Profile.userInfo.Lname,
              email: Profile.userInfo.email,
              username: Profile.userInfo.username,
              contact: Profile.userInfo.contact,
              role: Profile.userInfo.role,
              picture: Profile.userInfo.picture == "N/A" ? userImage : Profile.userInfo.picture,
              firebaseUid: firebaseUid || localStorage.getItem('firebaseUid') || "", // Add Firebase UID to userInfo
            },
            Token: Profile.Token,
          }),
        )
      }

      const newUrl = window.location.origin + window.location.pathname
      window.history.pushState({ path: newUrl }, "", newUrl)
      setLoading(false)
    }

    fetchData()
  }, [firebaseUid])

  // Load all profile data from API and Firebase
  const loadAllProfileData = async () => {
    try {
      setLoading(true)

      // Initialize an empty profile data structure
      let newProfileData: ProfileData = {
        personal: {},
        company: {},
        identity: {},
        bank: {},
        contact: {},
      }

      // First try to get data from API
      try {
        const apiProfileData = await GetUserProfile("GET")
        if (apiProfileData) {
          newProfileData = { ...newProfileData, ...apiProfileData }
          console.log("Profile data loaded from API")
        }
      } catch (apiError) {
        console.error("Error loading profile data from API:", apiError)
      }

      // Get Firebase UID from localStorage if not already set
      if (!firebaseUid) {
        const savedUid = localStorage.getItem('firebaseUid');
        if (savedUid) {
          setFirebaseUid(savedUid);
          getUserByFirebaseUid(savedUid);
        } else if (userInfo && userInfo.email) {
          // Fall back to email lookup
          getUserByEmail(userInfo.email);
        }
      }

      // Set basic user info from Redux state if not already set
      if (userInfo) {
        if (!newProfileData.personal) newProfileData.personal = {}

        newProfileData.personal.firstName = newProfileData.personal.firstName || userInfo.Fname || ""
        newProfileData.personal.lastName = newProfileData.personal.lastName || userInfo.Lname || ""
        newProfileData.personal.userName = newProfileData.personal.userName || userInfo.username || ""

        if (!newProfileData.contact) newProfileData.contact = {}
        newProfileData.contact.email = newProfileData.contact.email || userInfo.email || ""
        newProfileData.contact.contactNo = newProfileData.contact.contactNo || userInfo.contact || ""
      }

      // Update the profile data state
      setProfileData(newProfileData)
    } catch (error) {
      console.error("Error in loadAllProfileData:", error)
    } finally {
      setLoading(false)
    }
  }

  // Load profile data when user info is available
  useEffect(() => {
    if (userInfo) {
      loadAllProfileData()
    }
  }, [userInfo?.username, userInfo, firebaseUid])

  // Process Firebase data when it becomes available
  useEffect(() => {
    if (firebaseData) {
      processFirebaseData(firebaseData);
      
      // Update the form data for AccountSettings component
      const newFormData = { ...inputFormData };
      
      // Process the flat structure with dot notation keys
      Object.keys(firebaseData).forEach((key) => {
        if (key.includes(".")) {
          const [section, field] = key.split(".");
          if (!newFormData[section]) newFormData[section] = {};
          newFormData[section][field] = firebaseData[key];
        } else if (key === "email") {
          if (!newFormData.address) newFormData.address = {};
          newFormData.address.email = firebaseData.email;
        }
      });
      
      setInputFormData(newFormData);
    }
  }, [firebaseData]);

  if (!userInfo) return <div>Loading...</div>

  // Get the appropriate user ID to display - prioritize Firebase UID
  const displayUserId = firebaseUid || userId || userInfo.username || "N/A";

  return (
    <motion.div {...motionAttributes} className="relative">
      {loading && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">Loading your profile data...</span>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 text-bodyText">
        <div className="bg-white shadow-xl relative">
          <div className="p-4">
            <div className="text-xl md:text-2xl font-bold">Personal Information</div>
          </div>
          <div className="p-4">
            <div className="space-y-5">
              <div className="flex flex-row items-center space-x-4">
                <Image
                  src={userInfo.picture == "N/A" ? userImage : userInfo.picture}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mb-2 sm:mb-0"
                />
                <div>
                  <h2 className="text-lg md:text-xl font-semibold">
                    {profileData?.personal?.firstName || userInfo.Fname || ""} {profileData?.personal?.lastName || userInfo.Lname || ""}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    User Id: {displayUserId}{userInfo.email ? ` (${userInfo.email})` : ""}
                  </p>
                </div>
              </div>
              <ProfileItem
                label="Father Name"
                value={profileData?.personal?.fatherName || firebaseData?.["personal.fatherName"] || "N/A"}
              />
              <ProfileItem 
                label="Date of Birth" 
                value={profileData?.personal?.DOB || firebaseData?.["personal.DOB"] || "N/A"} 
              />
              <ProfileItem 
                label="Sex" 
                value={profileData?.personal?.sex || firebaseData?.["personal.sex"] || "N/A"} 
              />
              <ProfileItem
                label="Marital Status"
                value={profileData?.personal?.maritalStatus || firebaseData?.["personal.maritalStatus"] || "N/A"}
              />
              <ProfileItem
                label="Company"
                value={profileData?.personal?.company || profileData?.company?.company || 
                       firebaseData?.["company.company"] || "N/A"}
              />
              <ProfileItem
                label="Organisation Type"
                value={profileData?.company?.organisationType || profileData?.orgType ||
                       firebaseData?.["company.organisationType"] || "N/A"}
              />
            </div>
          </div>
        </div>
        
        {/* Rest of the code remains the same */}
        <div className="bg-white shadow-xl relative">
          <div className="p-4">
            <p className="text-xl md:text-2xl font-bold ">Other Information</p>
            <div className="flex flex-wrap gap-2 mt-5 mb-2 items-center justify-center ">
              {Othertabs.map((tab, index) => (
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
          </div>
          <div className="p-4">
            <motion.div {...tabMotionAttributes} className="space-y-4">
              {selectedTab === "Company" && (
                <motion.div {...tabMotionAttributes} className="space-y-4">
                  <div className="text-center font-bold text-xl border-b-2 tracking-wide mb-5 pb-2">
                    Company: {profileData?.personal?.company || profileData?.company?.company || 
                             firebaseData?.["company.company"] || "N/A"}
                  </div>
                  <ProfileItem
                    label="About"
                    value={profileData?.company?.about || firebaseData?.["company.about"] || "N/A"}
                  />
                  <ProfileItem 
                    label="CIN Number" 
                    value={profileData?.company?.cin || firebaseData?.["company.cin"] || "N/A"} 
                  />
                  <ProfileItem
                    label="Pan"
                    value={profileData?.company?.pan || profileData?.identity?.pan || 
                           firebaseData?.["identity.pan"] || "N/A"}
                  />
                  <ProfileItem
                    label="Aadhaar"
                    value={profileData?.company?.aadhar || profileData?.identity?.aadhar || 
                           firebaseData?.["identity.aadhar"] || "N/A"}
                  />
                  <ProfileItem
                    label="Date of Incorporation"
                    value={profileData?.company?.incorporationDate || 
                           firebaseData?.["company.incorporationDate"] || "N/A"}
                  />
                  <ProfileItem 
                    label="MOA" 
                    value={profileData?.company?.moa || firebaseData?.["company.moa"] || "N/A"} 
                  />
                  <ProfileItem 
                    label="AOA" 
                    value={profileData?.company?.aoa || firebaseData?.["company.aoa"] || "N/A"} 
                  />
                  <ProfileItem 
                    label="GST" 
                    value={profileData?.company?.gst || firebaseData?.["company.gst"] || "N/A"} 
                  />
                  <ProfileItem 
                    label="Udyam Number" 
                    value={profileData?.company?.udyamNumber || 
                           firebaseData?.["company.udyamNumber"] || "N/A"} 
                  />
                  <ProfileItem 
                    label="DPIT" 
                    value={profileData?.company?.dpit || firebaseData?.["company.dpit"] || "N/A"} 
                  />
                </motion.div>
              )}
              {selectedTab === "Bank" && (
                <motion.div {...tabMotionAttributes} className="space-y-4">
                  <div className="bg-softBg1 p- rounded-lg shadow-lg p-5">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {profileData?.bank?.bank || firebaseData?.["bank.bank"] || "N/A"}
                        </h3>
                        <p className="text-sm">
                          {profileData?.bank?.accountHolderName || profileData?.name || 
                           firebaseData?.["bank.accountHolderName"] || "N/A"}
                        </p>
                      </div>
                      <Image
                        src={userImage || "/placeholder.svg"}
                        alt="Bank Logo"
                        className="rounded-full w-[50px] h-[50px] object-cover"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="space-y-4">
                      <ProfileItem
                        label="Account Number"
                        value={profileData?.bank?.accountNumber || profileData?.bank?.account || 
                               firebaseData?.["bank.accountNumber"] || "N/A"}
                      />
                      <ProfileItem 
                        label="IFSC Code" 
                        value={profileData?.bank?.ifsc || firebaseData?.["bank.ifsc"] || "N/A"} 
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              {selectedTab === "Contact" && (
                <motion.div {...tabMotionAttributes} className="space-y-4">
                  <ProfileItem
                    label="Email"
                    value={
                      profileData?.contact?.email || profileData?.contact?.secondaryEmail || 
                      userInfo?.email || firebaseData?.email || 
                      firebaseData?.["address.email"] || "N/A"
                    }
                  />
                  <ProfileItem
                    label="Phone"
                    value={
                      profileData?.contact?.contactNo ||
                      profileData?.contact?.secondaryContact ||
                      userInfo?.contact || 
                      firebaseData?.["address.contactNo"] || "N/A"
                    }
                  />
                  <ProfileItem 
                    label="State" 
                    value={profileData?.contact?.state || firebaseData?.["address.state"] || "N/A"} 
                  />
                  <ProfileItem 
                    label="City" 
                    value={profileData?.contact?.city || firebaseData?.["address.city"] || "N/A"} 
                  />
                  <ProfileItem
                    label="Address"
                    value={profileData?.contact?.address || profileData?.address?.address || 
                           firebaseData?.["address.address"] || "N/A"}
                  />
                  <ProfileItem 
                    label="Pin" 
                    value={profileData?.contact?.pin || profileData?.address?.pin || 
                           firebaseData?.["address.pin"] || "N/A"} 
                  />
                </motion.div>
              )}
              {selectedTab === "Identity" && (
                <motion.div {...tabMotionAttributes} className="space-y-4">
                  <ProfileItem 
                    label="PAN" 
                    value={profileData?.identity?.pan || firebaseData?.["identity.pan"] || "N/A"} 
                  />
                  <ProfileItem 
                    label="AADHAR" 
                    value={profileData?.identity?.aadhar || firebaseData?.["identity.aadhar"] || "N/A"} 
                  />
                  <ProfileItem 
                    label="DIN Number" 
                    value={profileData?.identity?.din || firebaseData?.["identity.din"] || "N/A"} 
                  />
                  <ProfileItem 
                    label="Address Proof" 
                    value={profileData?.identity?.addressProofName || 
                           firebaseData?.["identity.addressProofName"] || "N/A"} 
                  />
                  <ProfileItem 
                    label="Nationality" 
                    value={profileData?.identity?.nationality || 
                           firebaseData?.["identity.nationality"] || "India"} 
                  />
                </motion.div>
              )}
              {selectedTab === "Analytics" && (
                <motion.div {...tabMotionAttributes}>
                  <Analytics MetricData={MetricData} />
                </motion.div>
              )}
              {selectedTab === "Settings" && (
                <motion.div {...tabMotionAttributes}>
                  <AccoutSettings 
                    profileData={profileData} 
                    firebaseUserId={firebaseUid || userId}
                    existingFirebaseData={firebaseData} 
                  />
                </motion.div>
              )}
              {!Othertabs.includes(selectedTab) && (
                <div>
                  <p>No data found</p>
                </div>
              )}
            </motion.div>
          </div>
          
          <div className="absolute bottom-4 right-4">
            <button 
              onClick={handleEditClick}
              className="text-black bg-softBg1 hover:bg-s2 focus:ring-4 focus:ring-s2/50 font-medium rounded-lg text-sm px-5 py-2.5 ">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProfileItem({ label, value }: { label?: string; value?: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-2">
      <span className="font-semibold text-gray-600 mb-1 sm:mb-0">{label}:</span>
      <span className="text-gray-800">{value || "N/A"}</span>
    </div>
  )
}