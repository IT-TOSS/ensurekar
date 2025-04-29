// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// const Page: React.FC = () => {
//     const [user, setUser] = useState({
//         userId: "krishna.vish9329@gmail.com",
//         personal: {
//             firstName: "Krishna",
//             lastName: "Kumar Vishwakarma",
//             userName: "Krishna Kumar Vishwakarma",
//             DOB: "2025-03-13",
//             fatherName: "k",
//             sex: "Male",
//             maritalStatus: "Married",
//         },
//         address: {
//             address: "1",
//             city: "Jabalpur",
//             contactNo: "1",
//             email: "krishna.vish9329@gmail.com",
//             pin: "1",
//             secondaryContact: "1",
//             secondaryEmail: "1@D",
//             state: "1",
//         },
//         bank: {
//             accountNumber: "1",
//             bank: "1",
//             ifsc: "1",
//         },
//         company: {
//             company: "tiss",
//             organisationType: "Private Limited",
//         },
//         identity: {
//             aadhar: "1",
//             addressProof: "1",
//             addressProofName: "1",
//             din: "1",
//             nationality: "Australia",
//             pan: "1",
//         }
//     });

//     const [isEditing, setIsEditing] = useState(false);
//     const [editedUser, setEditedUser] = useState(user);
//     const router = useRouter();


//     const params = useParams();
//     const uid = params?.UserProfile;
//     console.log('User ID:', uid);


//     useEffect(() => {
//         const getUserData = async () => {
//           try {
//             const response = await axios.get("/api/Setting/updateuserinfo", {
//               headers: {
//                 "Content-Type": "application/json"
//               }
//             });

//             const userData = response.data.data;
//             console.log(uid);

//             for(let i=0; i < userData.length; i++) {
//               if(userData[i].uid === uid) {
//                 console.log(userData[i], "data In Processing");

//                 const isoDate = userData[i].DOB || '';
//                 let formattedDate = '';

//                 if (isoDate) {
//                   const date = new Date(isoDate);
//                   const day = String(date.getDate()).padStart(2, '0');
//                   const month = String(date.getMonth() + 1).padStart(2, '0');
//                   const year = date.getFullYear();
//                   formattedDate = `${year}-${month}-${day}`;
//                 }


//                 const transformedData = {
//                   userId: userData[i].email || '', // Assuming userId is the email
//                   personal: {
//                     userName: userData[i].userName || '',
//                     firstName: userData[i].firstName || '',
//                     lastName: userData[i].lastName || '',
//                     fatherName: userData[i].fatherName || '',
//                     DOB: formattedDate || '',
//                     sex: userData[i].sex || '',
//                     maritalStatus: userData[i].maritalStatus || '',
//                     id: userData[i].id
//                   },
//                   company: {
//                     company: userData[i].company || '',
//                     organisationType: userData[i].organisationType || '',
//                     about: userData[i].about || '',
//                     cin: userData[i].cin || '',
//                     pan: userData[i].pan || '',
//                     aadhar: userData[i].aadhar || '',
//                     incorporationDate: userData[i].incorporationDate || '',
//                     moa: userData[i].moa || '',
//                     aoa: userData[i].aoa || '',
//                     gst: userData[i].gst || '',
//                     udyamNumber: userData[i].udyamNumber || '',
//                     dpit: userData[i].dpit || ''
//                   },
//                   identity: {
//                     pan: userData[i].pan || '',
//                     aadhar: userData[i].aadhar || '',
//                     din: userData[i].din || '',
//                     addressProof: userData[i].addressProof || '',
//                     addressProofName: userData[i].addressProofName || '',
//                     nationality: userData[i].nationality || ''
//                   },
//                   bank: {
//                     bank: userData[i].bank || '',
//                     accountHolderName: userData[i].accountHolderName || '',
//                     accountNumber: userData[i].accountNumber || '',
//                     ifsc: userData[i].ifsc || ''
//                   },
//                   address: {
//                     address: userData[i].address || '',
//                     state: userData[i].state || '',
//                     city: userData[i].city || '',
//                     pin: userData[i].pin || '',
//                     email: userData[i].email || '',
//                     secondaryEmail: userData[i].secondaryEmail || '',
//                     contactNo: userData[i].contactNo || '',
//                     secondaryContact: userData[i].secondaryContact || ''
//                   },
//                   document: {
//                     other: null,
//                     addharcar: null,
//                     InvestmentDetails: null,
//                     form16: null,
//                     BankDetails: null,
//                     OtherDocument: null
//                   }
//                 };
//                 setUser(transformedData)
//                 console.log(transformedData);
//                 break;
//               } else {
//                 console.log("user is not registered Yet");
//               }
//             }
//           } catch (error) {
//             console.error("Error fetching user profile Data:", error);
//           }
//         };


//           getUserData();

//       }, [uid]);


//     const handleInputChange = (section: keyof typeof user, field: string, value: string) => {
//         setEditedUser({
//             ...editedUser,
//             [section]: {
//                 ...(editedUser[section] as Record<string, any>),
//                 [field]: value
//             }
//         });
//     };

//     const saveChanges = () => {
//         setUser(editedUser);
//         // add update logic of set new Data of user
//         setIsEditing(false);
//     };

//     const cancelEdit = () => {
//         setEditedUser(user);
//         setIsEditing(false);
//     };
//     const deleteProfile = () => {
//         const confirmDelete = window.confirm("Are you sure you want to delete this profile?");
//         if (confirmDelete) {
//             // Logic to delete the profile goes here
//             alert("Profile deleted successfully.");

//             router.push("/Adman/profile");
//         }
//     };

//     const renderEditableTable = (section: keyof typeof user, data: any) => {
//         return (
//             <div className="mb-6 w-full">
//                 <table className="w-full border-collapse border border-gray-300 rounded-lg">
//                     <thead>
//                         <tr className="bg-gray-100">
//                             <th className="border border-gray-300 px-4 py-2 text-left" colSpan={2}>
//                                 {section.charAt(0).toUpperCase() + section.slice(1)} Details
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Object.entries(data).map(([key, value]) => (
//                             <tr key={key} className="border-b border-gray-300 hover:bg-gray-50">
//                                 <td className="border-r border-gray-300 px-4 py-2 w-1/4 font-medium">
//                                     {key.charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').slice(1)}:
//                                 </td>
//                                 <td className="px-4 py-2 w-3/4">
//                                     {isEditing ? (
//                                         <input
//                                             type={key === 'DOB' ? 'date' : 'text'}
//                                             value={(editedUser[section] as Record<string, any>)[key]}
//                                             onChange={(e) => handleInputChange(section, key, e.target.value)}
//                                             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                         />
//                                     ) : (
//                                         null
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     };

//     return (
//         <div className="min-h-screen bg-gray-100">
//             {/* Header */}
//             <div className="bg-white shadow-md py-4 px-6 mb-6">
//                 <div className="max-w-screen-2xl mx-auto">
//                     <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="max-w-screen-2xl mx-auto px-6 pb-12">
//                 <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//                     <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
//                         <div className="flex items-center space-x-4 mb-4 md:mb-0">
//                             <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold">
//                                 {user.personal.firstName.charAt(0)}{user.personal.lastName.charAt(0)}
//                             </div>
//                             <div>
//                                 <h2 className="text-2xl font-semibold">{user.personal.userName}</h2>
//                                 <p className="text-gray-600">{user.userId}</p>
//                                 <p className="text-gray-500 text-sm">{user.company.company} • {user.company.organisationType}</p>
//                             </div>
//                         </div>
//                         <div className="flex space-x-2">
//                             {isEditing ? (
//                                 <>
//                                     <button 
//                                         onClick={saveChanges}
//                                         className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
//                                     >
//                                         Save Changes
//                                     </button>
//                                     <button 
//                                         onClick={cancelEdit}
//                                         className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
//                                     >
//                                         Cancel
//                                     </button>
//                                 </>
//                             ) : (
//                                 <button 
//                                     onClick={() => setIsEditing(true)}
//                                     className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
//                                 >
//                                     Edit Profile
//                                 </button>
//                             )}
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                         <div>{renderEditableTable('personal', isEditing ? editedUser.personal : user.personal)}</div>
//                         <div>{renderEditableTable('address', isEditing ? editedUser.address : user.address)}</div>
//                         <div>{renderEditableTable('bank', isEditing ? editedUser.bank : user.bank)}</div>
//                         <div>{renderEditableTable('company', isEditing ? editedUser.company : user.company)}</div>
//                         <div className="lg:col-span-2">{renderEditableTable('identity', isEditing ? editedUser.identity : user.identity)}</div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
//                         <div className="flex flex-col sm:flex-row gap-2">
//                             <button className="bg-blue-100 border border-blue-300 text-blue-700 px-6 py-3 rounded-md hover:bg-blue-500 hover:border-blue-500 hover:text-white transition font-medium">
//                                 Download Profile
//                             </button>
//                             <button className="bg-green-100 border border-green-300 text-green-700 px-6 py-3 rounded-md hover:bg-green-500 hover:border-green-500 hover:text-white transition font-medium">
//                                 Export Data
//                             </button>
//                         </div>
//                         <div>
//                             <button className="bg-red-100 border border-red-300 text-red-700 px-6 py-3 rounded-md hover:bg-red-500 hover:border-red-500 hover:text-white transition font-medium"
//                                 onClick={deleteProfile}
//                             >
//                                 Delete Profile
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;

//------------------------


'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Page: React.FC = () => {
    const [user, setUser] = useState({
        userId: "",
        personal: {
            userName: "",
            firstName: "",
            lastName: "",
            DOB: "",
            fatherName: "",
            sex: "",
            maritalStatus: "",
            id: ""
        },
        address: {
            address: "",
            city: "",
            state: "",
            pin: "",
            email: "",
            secondaryEmail: "",
            contactNo: "",
            secondaryContact: ""
        },
        bank: {
            bank: "",
            // accountHolderName: "",
            accountNumber: "",
            ifsc: ""
        },
        company: {
            company: "",
            organisationType: "",
            // about: "",
            // cin: "",
            // pan: "",
            // aadhar: "",
            // incorporationDate: "",
            // moa: "",
            // aoa: "",
            // gst: "",
            // udyamNumber: "",
            // dpit: ""
        },
        identity: {
            pan: "",
            aadhar: "",
            din: "",
            addressProof: "",
            addressProofName: "",
            nationality: ""
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

    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user);
    const [isLoading, setIsLoading] = useState(true);
    const [picture, SetPicture] = useState('');
    const router = useRouter();

    const params = useParams();
    const uid = params?.UserProfile;

    useEffect(() => {
        const getUserData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get("/api/Setting/updateuserinfo", {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const userData = response.data.data;

                for (let i = 0; i < userData.length; i++) {
                    if (userData[i].uid === uid) {
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
                            userId: userData[i].email || '',
                            personal: {
                                userName: userData[i].userName || '',
                                firstName: userData[i].firstName || '',
                                lastName: userData[i].lastName || '',
                                fatherName: userData[i].fatherName || '',
                                DOB: formattedDate || '',
                                sex: userData[i].sex || '',
                                maritalStatus: userData[i].maritalStatus || '',
                                id: userData[i].id || ''
                            },
                            company: {
                                company: userData[i].company || '',
                                organisationType: userData[i].organisationType || '',
                                // about: userData[i].about || '',
                                // cin: userData[i].cin || '',
                                // pan: userData[i].pan || '',
                                // aadhar: userData[i].aadhar || '',
                                // incorporationDate: userData[i].incorporationDate || '',
                                // moa: userData[i].moa || '',
                                // aoa: userData[i].aoa || '',
                                // gst: userData[i].gst || '',
                                // udyamNumber: userData[i].udyamNumber || '',
                                // dpit: userData[i].dpit || ''
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
                                // accountHolderName: userData[i].accountHolderName || '',
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

                        setUser(transformedData);
                        setEditedUser(transformedData);
                        break;
                    }
                }
            } catch (error) {
                console.error("Error fetching user profile data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (uid) {
            getUserData();
        }
    }, [uid]);

    useEffect(() => {
        const storedData = localStorage.getItem('userInfo');

        console.log(storedData, "Stored Data");
        if (storedData) {
            console.log(JSON.parse(storedData).picture, "User Data");
            SetPicture(JSON.parse(storedData).picture);
        } else {
            console.log("No stored data available");
        }
        // if (storedData) {
        //   setUser(JSON.parse(storedData));
        // }
    }, []);

    const handleInputChange = (section: keyof typeof user, field: string, value: string) => {
        setEditedUser(prev => ({
            ...prev,
            [section]: {
                ...(prev[section] as Record<string, any>),
                [field]: value
            }
        }));
    };



    const saveChanges = async () => {
        try {
            // Here you would implement the API call to update the user data
            // For example:
            // await axios.post("/api/Setting/updateuserinfo", editedUser);

            setUser(editedUser);
            setIsEditing(false);
            // Show success message
            alert("Profile updated successfully");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile. Please try again.");
        }
    };

    const cancelEdit = () => {
        setEditedUser(user);
        setIsEditing(false);
    };

    const deleteProfile = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this profile?");
        if (confirmDelete) {
            try {
                // Implement API call to delete profile
                // await axios.delete(`/api/Setting/deleteuser/${uid}`);

                alert("Profile deleted successfully.");
                router.push("/Adman/profile");
            } catch (error) {
                console.error("Error deleting profile:", error);
                alert("Failed to delete profile. Please try again.");
            }
        }
    };

    const formatLabel = (key: string) => {
        // Convert camelCase to Title Case with spaces
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();
    };

    const renderEditableTable = (section: keyof typeof user, data: any) => {
        // Filter out null or empty values
        const filteredData = Object.entries(data).filter(([_, value]) =>
            value !== null && value !== undefined && value !== "");

        if (filteredData.length === 0 && !isEditing) {
            return null;
        }

        return (
            <div className="mb-6 w-full">
                <div className="bg-gray-50 p-4 mb-2 rounded-t-lg border-b-2 border-blue-500">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {section.charAt(0).toUpperCase() + section.slice(1)} Details
                    </h3>
                </div>

                <div className="overflow-hidden rounded-lg border border-gray-200 shadow">
                    <table className="w-full border-collapse">
                        <tbody>
                            {Object.entries(data).map(([key, value]) => (
                                <tr key={key} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 w-1/3 font-medium text-gray-900 bg-gray-50">
                                        {formatLabel(key)}
                                    </td>
                                    <td className="px-6 py-4 w-2/3">
                                        {isEditing ? (
                                            key === 'DOB' ? (
                                                <input
                                                    type="date"
                                                    value={(editedUser[section] as Record<string, any>)[key] as string}
                                                    onChange={(e) => handleInputChange(section, key, e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            ) : key === 'sex' || key === 'maritalStatus' || key === 'nationality' || key === 'organisationType' ? (
                                                <select
                                                    value={(editedUser[section] as Record<string, any>)[key] as string}
                                                    onChange={(e) => handleInputChange(section, key, e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                >
                                                    {key === 'sex' && (
                                                        <>
                                                            <option value="">Select Gender</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Other">Other</option>
                                                        </>
                                                    )}
                                                    {key === 'maritalStatus' && (
                                                        <>
                                                            <option value="">Select Status</option>
                                                            <option value="Single">Single</option>
                                                            <option value="Married">Married</option>
                                                            <option value="Divorced">Divorced</option>
                                                            <option value="Widowed">Widowed</option>
                                                        </>
                                                    )}
                                                    {key === 'nationality' && (
                                                        <>
                                                            <option value="">Select Country</option>
                                                            <option value="India">India</option>
                                                            <option value="United States">United States</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                        </>
                                                    )}
                                                    {key === 'organisationType' && (
                                                        <>
                                                            <option value="">Select Type</option>
                                                            <option value="Private Limited">Private Limited</option>
                                                            <option value="Public Limited">Public Limited</option>
                                                            <option value="LLP">LLP</option>
                                                            <option value="Partnership">Partnership</option>
                                                            <option value="Proprietorship">Proprietorship</option>
                                                        </>
                                                    )}
                                                </select>
                                            ) : (
                                                <input
                                                    type="text"
                                                    value={(editedUser[section] as Record<string, any>)[key] as string}
                                                    onChange={(e) => handleInputChange(section, key, e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder={`Enter ${formatLabel(key)}`}
                                                />
                                            )
                                        ) : (
                                            <span className="text-gray-700">
                                                {value ? (
                                                    key === 'DOB' ?
                                                        new Date(value as string).toLocaleDateString() :
                                                        value as string
                                                ) : (
                                                    <span className="text-gray-400 italic">Not provided</span>
                                                )}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading user profile...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white shadow-md py-4 px-6 mb-6">
                <div className="max-w-screen-2xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-2xl mx-auto px-6 pb-12">
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            {/* Add Profile Picture Placeholder */}
                            {/* <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold">
                                {user.personal.firstName?.charAt(0) || ''}{user.personal.lastName?.charAt(0) || ''}
                            </div> */}

                            {/* <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold overflow-hidden">
                                {(picture && picture != "N/A" && picture !== "none" && picture.trim() !== "") ? (
                                    <img
                                        src={picture}
                                        alt="User Avatar"
                                        className="h-full w-full object-cover"
                                        
                                    />
                                ) : (
                                    <>
                                        {user.personal.firstName?.charAt(0) || ''}
                                        {user.personal.lastName?.charAt(0) || ''}
                                    </>
                                )}
                            </div> */}

                            <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold overflow-hidden">
                                {(picture && picture.trim() !== "" && picture.trim().toUpperCase() !== "N/A" && picture.trim().toLowerCase() !== "none") ? (
                                    <img
                                        src={picture}
                                        alt="User Avatar"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <>
                                        {user.personal.firstName?.charAt(0) || ''}
                                        {user.personal.lastName?.charAt(0) || ''}
                                    </>
                                )}
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">{user.personal.userName || 'User'}</h2>
                                <p className="text-gray-600">{user.userId || 'No Email'}</p>
                                <p className="text-gray-500 text-sm">
                                    {user.company.company ? `${user.company.company} • ` : ''}
                                    {user.company.organisationType || 'Organization not specified'}
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={saveChanges}
                                        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        onClick={cancelEdit}
                                        className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                                >
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>{renderEditableTable('personal', user.personal)}</div>
                        <div>{renderEditableTable('address', user.address)}</div>
                        <div>{renderEditableTable('bank', user.bank)}</div>
                        <div>{renderEditableTable('company', user.company)}</div>
                        <div className="lg:col-span-2">{renderEditableTable('identity', user.identity)}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <button className="bg-blue-100 border border-blue-300 text-blue-700 px-6 py-3 rounded-md hover:bg-blue-500 hover:border-blue-500 hover:text-white transition font-medium">
                                Download Profile
                            </button>
                            <button className="bg-green-100 border border-green-300 text-green-700 px-6 py-3 rounded-md hover:bg-green-500 hover:border-green-500 hover:text-white transition font-medium">
                                Export Data
                            </button>
                        </div>
                        <div>
                            <button
                                className="bg-red-100 border border-red-300 text-red-700 px-6 py-3 rounded-md hover:bg-red-500 hover:border-red-500 hover:text-white transition font-medium"
                                onClick={deleteProfile}
                            >
                                Delete Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;