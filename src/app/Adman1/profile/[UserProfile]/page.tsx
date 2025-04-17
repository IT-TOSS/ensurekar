'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Page: React.FC = () => {
    const [user, setUser] = useState({
        userId: "kr",
        personal: {
            firstName: "Krishna",
            lastName: "Kumar Vishwakarma",
            userName: "Krishna Kumar Vishwakarma",
            DOB: "2025-03-13",
            fatherName: "k",
            sex: "Male",
            maritalStatus: "Married",
        },
        address: {
            address: "1",
            city: "Jabalpur",
            contactNo: "1",
            email: "krishna.vish9329@gmail.com",
            pin: "1",
            secondaryContact: "1",
            secondaryEmail: "1@D",
            state: "1",
        },
        bank: {
            accountNumber: "1",
            bank: "1",
            ifsc: "1",
        },
        company: {
            company: "tiss",
            organisationType: "Private Limited",
        },
        identity: {
            aadhar: "1",
            addressProof: "1",
            addressProofName: "1",
            din: "1",
            nationality: "Australia",
            pan: "1",
        }
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user);

    const handleInputChange = (section: keyof typeof user, field: string, value: string) => {
        setEditedUser({
            ...editedUser,
            [section]: {
                ...(editedUser[section] as Record<string, any>),
                [field]: value
            }
        });
    };

    const saveChanges = () => {
        setUser(editedUser);
        setIsEditing(false);
    };

    const cancelEdit = () => {
        setEditedUser(user);
        setIsEditing(false);
    };

    const renderEditableTable = (section: keyof typeof user, data: Record<string, any>) => {
        return (
            <div className="mb-6 w-full">
                <table className="w-full border-collapse border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left" colSpan={2}>
                                {section.charAt(0).toUpperCase() + section.slice(1)} Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(data).map(([key, value]) => (
                            <tr key={key} className="border-b border-gray-300 hover:bg-gray-50">
                                <td className="border-r border-gray-300 px-4 py-2 w-1/4 font-medium">
                                    {key.charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').slice(1)}:
                                </td>
                                <td className="px-4 py-2 w-3/4">
                                    {isEditing ? (
                                        <input
                                            type={key === 'DOB' ? 'date' : 'text'}
                                            value={(editedUser[section] as Record<string, any>)[key]}
                                            onChange={(e) => handleInputChange(section, key, e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    ) : (
                                        value
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

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
                            <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-2xl font-bold">
                                {user.personal.firstName.charAt(0)}{user.personal.lastName.charAt(0)}
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">{user.personal.userName}</h2>
                                <p className="text-gray-600">{user.userId}</p>
                                <p className="text-gray-500 text-sm">{user.company.company} • {user.company.organisationType}</p>
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
                        <div>{renderEditableTable('personal', isEditing ? editedUser.personal : user.personal)}</div>
                        <div>{renderEditableTable('address', isEditing ? editedUser.address : user.address)}</div>
                        <div>{renderEditableTable('bank', isEditing ? editedUser.bank : user.bank)}</div>
                        <div>{renderEditableTable('company', isEditing ? editedUser.company : user.company)}</div>
                        <div className="lg:col-span-2">{renderEditableTable('identity', isEditing ? editedUser.identity : user.identity)}</div>
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
                            <button className="bg-red-100 border border-red-300 text-red-700 px-6 py-3 rounded-md hover:bg-red-500 hover:border-red-500 hover:text-white transition font-medium">
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