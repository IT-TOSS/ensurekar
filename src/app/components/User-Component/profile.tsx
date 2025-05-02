



// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import userImage from "../../images/team_image1.png";
// import { use, useEffect, useState } from "react";
// import Analytics from "./Analytics";
// import { MetricDataType } from "../../../../types/MetricDataType";
// // import { UserInfo } from "@/api/SEOSetup/fetchuser";  // comment BY Krishna
// import { useSelector, useDispatch } from "react-redux";
// import { IRootState } from "@/store";
// import { User } from "../../../../types/User-Type";
// import { setAuth } from "@/store/themeConfigSlice";
// import { useRouter } from "next/navigation";
// // import { GetUserProfile } from "@/api/SEOSetup/userProfile";
// // import { ProfileData   } from "../../../../types/Profile-Data";  // comment BY Krishna
// // import AccoutSettings from "./AccoutSettings";

// const motionAttributes = {
//   initial: { opacity: 0, scale: 0.9 },
//   animate: { opacity: 1, scale: 1 },
//   transition: { duration: 0.3 },
// };
// const tabMotionAttributes = {
//   initial: { opacity: 0, y: 10 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.3 },
// };

// export default function Profile({
//   MetricData,
//   Othertabs,
//   // profileData,
// }: {
//   MetricData: MetricDataType[];
//   Othertabs: string[];
//   // profileData?: ProfileData;
// }) {
//   const themeConfig = useSelector((state: IRootState) => state.themeConfig);
//   const userInfo = useSelector((state: IRootState) => state.themeConfig.userInfo);
//   console.log(userInfo)
//   const dispatch = useDispatch();
//   // const [profileData, setProfileData] = useState<ProfileData | null>();  // comment BY Krishna
//   const [selectedTab, setSelectedTab] = useState("Identity");
//   const navigate = useRouter();
//   useEffect(() => {
//     // const fetchData = async () => {
//     //   const urlParams = new URLSearchParams(window.location.search);
//     //   const code = urlParams.get("code");
//     //   if (code && code.trim() != "" && themeConfig.isAuthenticated === false) {
//     //     const data = await UserInfo(code);
//     //     const { Profile } = data;
//     //     console.log(Profile)
//     //     dispatch(
//     //       setAuth({
//     //         isAuthenticated: Profile.isAuthenticated,
//     //         userInfo: {
//     //           Fname: Profile.userInfo.Fname,
//     //           Lname: Profile.userInfo.Lname,
//     //           email: Profile.userInfo.email,
//     //           username: Profile.userInfo.username,
//     //           contact: Profile.userInfo.contact,
//     //           role: Profile.userInfo.role,
//     //           picture: Profile.userInfo.picture =='N/A' ? userImage : Profile.userInfo.picture,
//     //         },
//     //         Token: Profile.Token,
//     //       })
//     //     );
//     //   } else {
//     //     return undefined;
//     //   }

//     //   const newUrl = window.location.origin + window.location.pathname;
//     //   window.history.pushState({ path: newUrl }, "", newUrl);
//     // };

//     // fetchData();   // comment BY Krishna

//   }, []);

//   // useEffect(() => {
//   //   const fetchUserProfile = async () => {
//   //     const data = await GetUserProfile();
//   //     setProfileData(data);
//   //   };
//   //   fetchUserProfile();
//   // }, [themeConfig.authToken]);  // comment BY Krishna

//   useEffect(() => {
//     //   const user = {
//     //     ...themeConfig.userInfo,
//     //     given_name: themeConfig.userInfo.Fname,
//     //     family_name: themeConfig.userInfo.Lname,
//     //     verified_email: themeConfig.isAuthenticated,
//     //     username: themeConfig.userInfo.username,
//     //   };

//     if (!themeConfig.userInfo) {
//       // navigate.push("/Login");
//     }
//     // setUser(user);
//   }, [userInfo]);

//   // useEffect(() => {
//   //   const fetchUserProfile = async () => {

//   //     console.log("this data from get profile",await GetUserProfile());
//   //   };
//   //   fetchUserProfile();


//   // },[themeConfig.authToken])

//   if (!userInfo) return <div>Loading...</div>;



//   return (
//     <motion.div {...motionAttributes}>
//       <div className="grid gap-6 md:grid-cols-2 text-bodyText">
//         <div className="bg-white shadow-xl">
//           <div className="p-4">
//             <div className="text-xl md:text-2xl font-bold">
//               Personal Information
//             </div>
//           </div>
//           <div className="p-4">
//             <div className="space-y-5">
//               <div className="flex flex-row items-center space-x-4">
//                 <Image
//                   src={userInfo.picture == 'N/A' ? userImage : userInfo.picture}
//                   alt="Profile"
//                   width={100}
//                   height={100}
//                   className="w-24 h-24 rounded-full mb-2 sm:mb-0"
//                 />
//                 <div>
//                   <h2 className="text-lg md:text-xl font-semibold">
//                     {userInfo.Fname || ""} {userInfo.Lname}
//                     {/* {profileData?.name} */}
//                   </h2>
//                   <p className="text-sm md:text-base text-gray-600">
//                     User Id : {userInfo.username || "N/A"}
//                   </p>
//                 </div>
//               </div>
//               {/* <ProfileItem label="Email" value={user.email} /> *}
        
//               <ProfileItem label="Father Name" value={profileData?.personal?.father} />
//               {/* <ProfileItem label="Whatsapp No. " value={profileData.contact.secondaryContact} /> */}
//               {/* <ProfileItem label="Address" value={profileData.personal.} /> *}
//               <ProfileItem label="Date of Birth" value={profileData?.personal?.DOB||"N/A"} />
//               <ProfileItem label="Sex" value={profileData?.personal?.sex||"N/A"} />
//               <ProfileItem label="Marital Status" value={profileData?.personal?.maritalStatusName} />
//               <ProfileItem label="Company" value={profileData?.personal?.company||"N/A"} />
//               <ProfileItem label="Organisation Type" value={profileData?.orgType} />
//               {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 duration-300">
//                 Edit Profile
//               </button> */}

//               {/* commented by Krishna*/}


//               <ProfileItem label="Father Name" value={""} />
//               {/* <ProfileItem label="Whatsapp No. " value={profileData.contact.secondaryContact} /> */}
//               {/* <ProfileItem label="Address" value={profileData.personal.} /> */}
//               <ProfileItem label="Date of Birth" value={"N/A"} />
//               <ProfileItem label="Sex" value={"N/A"} />
//               <ProfileItem label="Marital Status" value={""} />
//               <ProfileItem label="Company" value={"N/A"} />
//               <ProfileItem label="Organisation Type" value={"N/A"} />
//             </div>
//           </div>
//         </div>
//         <div className="bg-white shadow-xl">
//           <div className="p-4">
//             <p className="text-xl md:text-2xl font-bold ">Other Information</p>
//             <div className="flex flex-wrap gap-2 mt-5 mb-2 items-center justify-center ">
//               {Othertabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedTab(tab)}
//                   className={` px-3 py-2 min-w-[100px] hover:bg-s2 hover:text-black duration-300  font-bold rounded ${selectedTab === tab
//                     ? "bg-s2 text-black"
//                     : "bg-softBg1 text-bodyText"
//                     }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="p-4">
//             <motion.div {...tabMotionAttributes} className="space-y-4">
//               {selectedTab === "Company" && (
//                 <motion.div {...tabMotionAttributes} className="space-y-4">
//                   <div className="text-center font-bold text-xl border-b-2 tracking-wide mb-5 pb-2">
//                     Company: Hartalkar Innovation
//                   </div>
//                   <ProfileItem
//                     label="About"
//                     value="We are a manufacturing and consulting firm in automatives."
//                   />
//                   <ProfileItem label="CIN Number" value="U123473MY32" />
//                   <ProfileItem label="Pan" value="AIGHFD354G" />
//                   <ProfileItem label="Aadhaar" value="010101010101" />
//                   <ProfileItem
//                     label="Date of Incorporation"
//                     value="2021-04-30"
//                   />
//                   <ProfileItem label="MOA" value="Need attachment" />
//                   <ProfileItem label="AOA" value="N/A" />
//                   <ProfileItem label="GST" value="No" />
//                   <ProfileItem label="Udyam Number" value="UDYAM 2014 KYC" />
//                   <ProfileItem label="DPIT" value="DPIT1234" />
//                   {/* <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                     Edit Contact Information
//                   </button> */}
//                 </motion.div>
//               )}
//               {selectedTab === "Bank" && (
//                 <motion.div {...tabMotionAttributes} className="space-y-4">
//                   <div className="bg-softBg1 p-  rounded-lg shadow-lg p-5">
//                     <div className="flex justify-between items-center mb-4">
//                       <div>
//                         {/* <h3 className="text-lg font-semibold">{profileData?.bank?.bank ||"N/A"}</h3>
//                         <p className="text-sm">{profileData?.name||"N/A"}</p> 
//                          // commented by Krishna 
//                         */}

//                         <h3 className="text-lg font-semibold">{"N/A"}</h3>
//                         <p className="text-sm">{"N/A"}</p>
//                       </div>
//                       <Image
//                         src={userImage}
//                         alt="Bank Logo"
//                         className="rounded-full w-[50px] h-[50px] object-cover"
//                       />
//                     </div>
//                     <div className="space-y-4">
//                       {/* <ProfileItem label="Account Number" value={profileData?.bank?.account || "N/A"} />
//                       <ProfileItem label="IFSC Code" value={profileData?.bank?.ifsc || "N/A"} /> 
//                       // commented by Krishna
//                       */}
//                       {/* <ProfileItem label="Account Type" value="Checking" /> */}

//                       <ProfileItem label="Account Number" value={"N/A"} />
//                       <ProfileItem label="IFSC Code" value={"N/A"} />
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//               {selectedTab === "Contact" && (
//                 <motion.div {...tabMotionAttributes} className="space-y-4">
//                   {/* <ProfileItem label="Email" value={profileData?.contact?.secondaryEmail || "N/A"} />
//                   <ProfileItem label="Phone" value={profileData?.contact?.secondaryContact || "N/A"} />
//                   <ProfileItem label="State" value={profileData?.contact?.state || "N/A"} />
//                   <ProfileItem label="City" value={profileData?.contact?.city || "N/A"} />
//                   <ProfileItem label="Address" value={profileData?.contact?.address || "N/A"} />
//                   <ProfileItem label="Pin" value={profileData?.contact?.pin || "N/A"} />
//                   //comment by Krishna
//                   */}


//                   <ProfileItem label="Email" value={ "N/A"} />
//                   <ProfileItem label="Phone" value={ "N/A"} />
//                   <ProfileItem label="State" value={ "N/A"} />
//                   <ProfileItem label="City" value={ "N/A"} />
//                   <ProfileItem label="Address" value={ "N/A"} />
//                   <ProfileItem label="Pin" value={ "N/A"} />
//                   {/* <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                     Edit Contact Information
//                   </button> */}
//                 </motion.div>
//               )}
//               {selectedTab === "Identity" && (
//                 <motion.div {...tabMotionAttributes} className="space-y-4">
//                   {/* <ProfileItem label="PAN" value={profileData?.identity?.pan} />
//                   <ProfileItem label="AADHAR" value={profileData?.identity?.aadhar} />
//                   <ProfileItem label="DIN Number" value={profileData?.identity?.din} />
//                   <ProfileItem label="Address Proof" value={profileData?.identity?.addressProofName} />
//                   <ProfileItem label="Nationality" value={profileData?.identity?.nationality || "N/A"} /> 
//                   // commented by Krishna
//                   */}
//                   <ProfileItem label="PAN" value={"N/A"} />
//                   <ProfileItem label="AADHAR" value={"N/A"} />
//                   <ProfileItem label="DIN Number" value={"N/A"} />
//                   <ProfileItem label="Address Proof" value={"N/A"} />
//                   <ProfileItem label="Nationality" value={"N/A"} />
//                   {/* <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                     Edit Business Information
//                   </button> */}
//                 </motion.div>
//               )}
//               {selectedTab === "Business" && (
//                 <motion.div {...tabMotionAttributes} className="space-y-4">
//                   <ProfileItem label="Business Name" value="Ensurekar" />
//                   <ProfileItem label="Business Type" value="E-commerce" />
//                   <ProfileItem label="Business Address" value="Jabalpur" />
//                   <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                     Edit Business Information
//                   </button>
//                 </motion.div>
//               )}
//               {selectedTab === "Analytics" && (
//                 <motion.div {...tabMotionAttributes}>
//                   <Analytics MetricData={MetricData} />
//                 </motion.div>
//               )}
//               {selectedTab === "Settings" && (
//                 <motion.div {...tabMotionAttributes}>
//                   {/* <AccoutSettings profileData={profileData}/> */}
//                 </motion.div>
//               )}
//               {!Othertabs.includes(selectedTab) && (
//                 <div>
//                   <p>no data found</p>
//                 </div>
//               )}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </motion.div>

//   );
// }

// function ProfileItem({ label, value }: { label?: string; value?: string }) {
//   return (
//     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-2">
//       <span className="font-semibold text-gray-600 mb-1 sm:mb-0">{label}:</span>
//       <span className="text-gray-800">{value}</span>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import userImage from "../../images/team_image1.png";
import { useEffect, useState } from "react";
import Analytics from "./Analytics";
import { MetricDataType } from "../../../../types/MetricDataType";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "@/store";
import axios from "axios";
import { useRouter } from "next/navigation";

const motionAttributes = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 },
};
const tabMotionAttributes = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
};

export default function Profile({
  MetricData,
  Othertabs,
}: {
  MetricData: MetricDataType[];
  Othertabs: string[];
}) {

  
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const userInfo = useSelector((state: IRootState) => state.themeConfig.userInfo);
  const dispatch = useDispatch();
  const [inputFormData, setInputFormData] = useState({
    personal: {
      userName: '',
      firstName: '',
      lastName: '',
      fatherName: '',
      DOB: '',
      sex: '',
      maritalStatus: '',
      id: ''
    },
    company: {
      company: '',
      organisationType: '',
      about: '',
      cin: '',
      pan: '',
      aadhar: '',
      incorporationDate: '',
      moa: '',
      aoa: '',
      gst: '',
      udyamNumber: '',
      dpit: ''
    },
    identity: {
      pan: '',
      aadhar: '',
      din: '',
      addressProof: '',
      addressProofName: '',
      nationality: ''
    },
    bank: {
      bank: '',
      accountHolderName: '',
      accountNumber: '',
      ifsc: ''
    },
    address: {
      address: '',
      state: '',
      city: '',
      pin: '',
      email: '',
      secondaryEmail: '',
      contactNo: '',
      secondaryContact: ''
    },
    document: {
      other: null,
      addharcar: null,
      InvestmentDetails: null,
      form16: null,
      BankDetails: null,
      OtherDocument: null
    }
  });
  const [selectedTab, setSelectedTab] = useState("Identity");
  // const [existingFirebaseData, setExistingFirebaseData] = useState(false);
  const navigate = useRouter();

  // commented by Krishna ( cart page naviation)

  // useEffect(() => {
  //   const redirectAfterLogin = localStorage.getItem('redirectAfterLogin');
  //   if (redirectAfterLogin) {
  //     localStorage.removeItem('redirectAfterLogin');
  //     navigate.push("/cart");
  //   }
  // }, []);

  useEffect(() => {
    if (!themeConfig.userInfo) {
      // navigate.push("/Login");
    }
  }, [userInfo]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get("/api/Setting/updateuserinfo", {
          headers: {
            "Content-Type": "application/json"
          }
        });
        
        const userData = response.data.data;
        console.log(userInfo.email);
        
        for(let i=0; i < userData.length; i++) {
          if(userData[i].email === userInfo.email) {
            console.log(userData[i], "data In Processing");

            const isoDate = userData[i].DOB || '';
            let formattedDate = '';

            if (isoDate) {
              const date = new Date(isoDate);
              const day = String(date.getDate()).padStart(2, '0');
              const month = String(date.getMonth() + 1).padStart(2, '0');
              const year = date.getFullYear();
              formattedDate = `${year}-${month}-${day}`;
            }

            
            const transformedData = {
              personal: {
                userName: userData[i].userName || '',
                firstName: userData[i].firstName || '',
                lastName: userData[i].lastName || '',
                fatherName: userData[i].fatherName || '',
                DOB: formattedDate || '',
                sex: userData[i].sex || '',
                maritalStatus: userData[i].maritalStatus || '',
                id: userData[i].id
              },
              company: {
                company: userData[i].company || '',
                organisationType: userData[i].organisationType || '',
                about: userData[i].about || '',
                cin: userData[i].cin || '',
                pan: userData[i].pan || '',
                aadhar: userData[i].aadhar || '',
                incorporationDate: userData[i].incorporationDate || '',
                moa: userData[i].moa || '',
                aoa: userData[i].aoa || '',
                gst: userData[i].gst || '',
                udyamNumber: userData[i].udyamNumber || '',
                dpit: userData[i].dpit || ''
              },
              identity: {
                pan: userData[i].pan || '',
                aadhar: userData[i].aadhar || '',
                din: userData[i].din || '',
                addressProof: userData[i].addressProof || '',
                addressProofName: userData[i].addressProofName || '',
                nationality: userData[i].nationality || ''
              },
              bank: {
                bank: userData[i].bank || '',
                accountHolderName: userData[i].accountHolderName || '',
                accountNumber: userData[i].accountNumber || '',
                ifsc: userData[i].ifsc || ''
              },
              address: {
                address: userData[i].address || '',
                state: userData[i].state || '',
                city: userData[i].city || '',
                pin: userData[i].pin || '',
                email: userData[i].email || '',
                secondaryEmail: userData[i].secondaryEmail || '',
                contactNo: userData[i].contactNo || '',
                secondaryContact: userData[i].secondaryContact || ''
              },
              document: {
                other: null,
                addharcar: null,
                InvestmentDetails: null,
                form16: null,
                BankDetails: null,
                OtherDocument: null
              }
            };
            
            setInputFormData(transformedData);
            console.log(transformedData);
            break;
          } else {
            console.log("user is not registered Yet");
          }
        }
      } catch (error) {
        console.error("Error fetching user profile Data:", error);
      }
    };
    
    
      getUserData();
    
  }, [userInfo]);

  if (!userInfo) return <div>Loading...</div>;

  return (
    <motion.div {...motionAttributes}>
      <div className="grid gap-6 md:grid-cols-2 text-bodyText">
        <div className="bg-white shadow-xl">
          <div className="p-4">
            <div className="text-xl md:text-2xl font-bold">
              Personal Information
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-5">
              <div className="flex flex-row items-center space-x-4">
                <Image
                  src={userInfo.picture == 'N/A' ? userImage : userInfo.picture}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mb-2 sm:mb-0"
                />
                <div>
                  <h2 className="text-lg md:text-xl font-semibold">
                    {userInfo.Fname || ""} {userInfo.Lname}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    User Id : {userInfo.username || "N/A"}
                  </p>
                </div>
              </div>
              <ProfileItem label="Father Name" value={inputFormData.personal.fatherName || "N/A"} />
              <ProfileItem label="Date of Birth" value={inputFormData.personal.DOB || "N/A"} />
              <ProfileItem label="Sex" value={inputFormData.personal.sex || "N/A"} />
              <ProfileItem label="Marital Status" value={inputFormData.personal.maritalStatus || "N/A"} />
              <ProfileItem label="Company" value={inputFormData.company.company || "N/A"} />
              <ProfileItem label="Organisation Type" value={inputFormData.company.organisationType || "N/A"} />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl">
          <div className="p-4">
            <p className="text-xl md:text-2xl font-bold ">Other Information</p>
            <div className="flex flex-wrap gap-2 mt-5 mb-2 items-center justify-center ">
              {Othertabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTab(tab)}
                  className={` px-3 py-2 min-w-[100px] hover:bg-s2 hover:text-black duration-300  font-bold rounded ${selectedTab === tab
                    ? "bg-s2 text-black"
                    : "bg-softBg1 text-bodyText"
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
                    Company: {inputFormData.company.company || "Hartalkar Innovation"}
                  </div>
                  <ProfileItem
                    label="About"
                    value={inputFormData.company.about || "We are a manufacturing and consulting firm in automatives."}
                  />
                  <ProfileItem label="CIN Number" value={inputFormData.company.cin || "N/A"} />
                  <ProfileItem label="Pan" value={inputFormData.company.pan || "N/A"} />
                  <ProfileItem label="Aadhaar" value={inputFormData.company.aadhar || "N/A"} />
                  <ProfileItem
                    label="Date of Incorporation"
                    value={inputFormData.company.incorporationDate || "N/A"}
                  />
                  <ProfileItem label="MOA" value={inputFormData.company.moa || "N/A"} />
                  <ProfileItem label="AOA" value={inputFormData.company.aoa || "N/A"} />
                  <ProfileItem label="GST" value={inputFormData.company.gst || "N/A"} />
                  <ProfileItem label="Udyam Number" value={inputFormData.company.udyamNumber || "N/A"} />
                  <ProfileItem label="DPIT" value={inputFormData.company.dpit || "N/A"} />
                </motion.div>
              )}
              {selectedTab === "Bank" && (
                <motion.div {...tabMotionAttributes} className="space-y-4">
                  <div className="bg-softBg1 p-  rounded-lg shadow-lg p-5">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{inputFormData.bank.bank || "N/A"}</h3>
                        <p className="text-sm">{inputFormData.bank.accountHolderName || "N/A"}</p>
                      </div>
                      <Image
                        src={userImage}
                        alt="Bank Logo"
                        className="rounded-full w-[50px] h-[50px] object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <ProfileItem label="Account Number" value={inputFormData.bank.accountNumber || "N/A"} />
                      <ProfileItem label="IFSC Code" value={inputFormData.bank.ifsc || "N/A"} />
                    </div>
                  </div>
                </motion.div>
              )}
              {selectedTab === "Contact" && (
                <motion.div {...tabMotionAttributes} className="space-y-4">
                  <ProfileItem label="Email" value={inputFormData.address.secondaryEmail || "N/A"} />
                  <ProfileItem label="Phone" value={inputFormData.address.secondaryContact || "N/A"} />
                  <ProfileItem label="State" value={inputFormData.address.state || "N/A"} />
                  <ProfileItem label="City" value={inputFormData.address.city || "N/A"} />
                  <ProfileItem label="Address" value={inputFormData.address.address || "N/A"} />
                  <ProfileItem label="Pin" value={inputFormData.address.pin || "N/A"} />
                </motion.div>
              )}
              {selectedTab === "Identity" && (
                <motion.div {...tabMotionAttributes} className="space-y-4">
                  <ProfileItem label="PAN" value={inputFormData.identity.pan || "N/A"} />
                  <ProfileItem label="AADHAR" value={inputFormData.identity.aadhar || "N/A"} />
                  <ProfileItem label="DIN Number" value={inputFormData.identity.din || "N/A"} />
                  <ProfileItem label="Address Proof" value={inputFormData.identity.addressProofName || "N/A"} />
                  <ProfileItem label="Nationality" value={inputFormData.identity.nationality || "N/A"} />
                </motion.div>
              )}
              {selectedTab === "Business" && (
                <motion.div {...tabMotionAttributes} className="space-y-4">
                  <ProfileItem label="Business Name" value={inputFormData.company.company || "N/A"} />
                  <ProfileItem label="Business Type" value={inputFormData.company.organisationType || "E-commerce"} />
                  <ProfileItem label="Business Address" value={inputFormData.address.address || "N/A"} />
                  <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Edit Business Information
                  </button>
                </motion.div>
              )}
              {selectedTab === "Analytics" && (
                <motion.div {...tabMotionAttributes}>
                  <Analytics MetricData={MetricData} />
                </motion.div>
              )}
              {selectedTab === "Settings" && (
                <motion.div {...tabMotionAttributes}>
                  {/* Settings content here */}
                </motion.div>
              )}
              {!Othertabs.includes(selectedTab) && (
                <div>
                  <p>no data found</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProfileItem({ label, value }: { label?: string; value?: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-2">
      <span className="font-semibold text-gray-600 mb-1 sm:mb-0">{label}:</span>
      <span className="text-gray-800">{value}</span>
    </div>
  );
}