"use client";

import React, { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Save, 
  Edit3, 
  Shield, 
  Crown,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface AdminProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastupdate: string;
}

const SuperAdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });

  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [originalData, setOriginalData] = useState({
    name: '',
    email: '',
    role: '',
    status: '',
    lastupdate: ''
  });

  // Extract email from localStorage
  const extractEmailFromLocalStorage = () => {
    const superAdminAuth = localStorage.getItem('superAdminAuth');
    if (superAdminAuth) {
      // Extract email from localStorage value like "super_admin_authkrishna.vish9329%40gmail.com"
      const emailMatch = superAdminAuth.match(/super_admin_auth(.+)/);
      if (emailMatch) {
        return decodeURIComponent(emailMatch[1]);
      }
    }
    return 'toss125training@gmail.com'; // fallback email
  };

  // Fetch admin profile data from API
  const fetchAdminProfile = async () => {
    try {
      setFetchingData(true);
      const email = extractEmailFromLocalStorage();
      
      const response = await fetch(`/api/admin-register?email=${encodeURIComponent(email)}`);
      const data = await response.json();
      
      // Handle different response formats
      let adminData = null;
      if (Array.isArray(data) && data.length > 0) {
        adminData = data[0];
      } else if (data.data && Array.isArray(data.data) && data.data.length > 0) {
        adminData = data.data[0];
      } else if (data.success && data.data) {
        adminData = data.data;
      } else if (data.email) {
        adminData = data;
      }

      if (adminData) {
        setProfileData({
          name: adminData.name || '',
          email: adminData.email || '',
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });

        setOriginalData({
          name: adminData.name || '',
          email: adminData.email || '',
          role: adminData.role || '',
          status: adminData.status || '',
          lastupdate: adminData.lastupdate || ''
        });
      } else {
        setMessage({ type: 'error', text: 'Failed to load profile data' });
      }
    } catch (error) {
      console.error('Error fetching admin profile:', error);
      setMessage({ type: 'error', text: 'Failed to load profile data' });
    } finally {
      setFetchingData(false);
    }
  };

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Validate inputs
      if (!profileData.name.trim()) {
        setMessage({ type: 'error', text: 'Name is required' });
        setLoading(false);
        return;
      }

      if (!profileData.email.trim()) {
        setMessage({ type: 'error', text: 'Email is required' });
        setLoading(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(profileData.email)) {
        setMessage({ type: 'error', text: 'Please enter a valid email address' });
        setLoading(false);
        return;
      }

      // If changing password, validate password fields
      if (profileData.currentPassword || profileData.newPassword || profileData.confirmPassword) {
        if (!profileData.currentPassword) {
          setMessage({ type: 'error', text: 'Current password is required to change password' });
          setLoading(false);
          return;
        }

        if (!profileData.newPassword) {
          setMessage({ type: 'error', text: 'New password is required' });
          setLoading(false);
          return;
        }

        if (profileData.newPassword !== profileData.confirmPassword) {
          setMessage({ type: 'error', text: 'New password and confirm password do not match' });
          setLoading(false);
          return;
        }

        if (profileData.newPassword.length < 6) {
          setMessage({ type: 'error', text: 'New password must be at least 6 characters long' });
          setLoading(false);
          return;
        }
      }

      // Prepare update data
      const updateData = {
        name: profileData.name,
        email: profileData.email,
        ...(profileData.newPassword ? { password: profileData.newPassword } : {}),
        role: originalData.role,
        status: originalData.status,
        lastupdate: new Date().toISOString().slice(0, 19).replace('T', ' ') // Format: YYYY-MM-DD HH:mm:ss
      };

      // Call API to update profile
      const response = await fetch(`/api/admin-register?email=${encodeURIComponent(originalData.email)}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        // Update original data
        setOriginalData({
          name: profileData.name,
          email: profileData.email,
          role: originalData.role,
          status: originalData.status,
          lastupdate: updateData.lastupdate
        });

        // Clear password fields
        setProfileData(prev => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        }));

        setMessage({ type: 'success', text: 'Profile updated successfully!' });
        setIsEditing(false);
      } else {
        setMessage({ type: 'error', text: 'Failed to update profile. Please try again.' });
      }

    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage({ type: 'error', text: 'Failed to update profile. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setProfileData({
      ...originalData,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setIsEditing(false);
    setMessage({ type: '', text: '' });
  };

  if (fetchingData) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            <p className="mt-4 text-gray-600 text-lg">Loading profile data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <User className="w-8 h-8 text-purple-600" />
            Profile Settings
          </h1>
          <p className="text-gray-600 mt-1">Manage your super admin profile and security settings.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg px-4 py-2">
            <Crown className="w-5 h-5" />
            <span className="text-sm font-medium">Super Admin</span>
          </div>
        </div>
      </div>

      {/* Message */}
      {message.text && (
        <div className={`p-4 rounded-lg flex items-center gap-2 ${
          message.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      isEditing ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-200'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      isEditing ? 'bg-white border-gray-300' : 'bg-gray-50 border-gray-200'
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Password Section */}
              {isEditing && (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Change Password
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Current Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type={showCurrentPassword ? "text" : "password"}
                          name="currentPassword"
                          value={profileData.currentPassword}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Enter current password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* New Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type={showNewPassword ? "text" : "password"}
                          name="newPassword"
                          value={profileData.newPassword}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Enter new password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={profileData.confirmPassword}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Confirm new password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Account Status & Info */}
        <div className="space-y-6">
          {/* Account Status */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              Account Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  originalData.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {originalData.status || 'Loading...'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Role</span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  originalData.role === 'superadmin' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {originalData.role ? originalData.role.charAt(0).toUpperCase() + originalData.role.slice(1) : 'Loading...'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Update</span>
                <span className="text-sm text-gray-900">
                  {originalData.lastupdate ? new Date(originalData.lastupdate).toLocaleDateString() : 'Loading...'}
                </span>
              </div>
            </div>
          </div>

          {/* Security Tips */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Tips</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Use a strong, unique password
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Don't share your credentials
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Log out when finished
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Keep your email secure
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminProfile;
