"use client";
import React, { useState } from 'react';
import {
  NotepadText,
  ShoppingBag,
  TrendingUp,
  Users,
  Eye,
  Mail,
  Phone,
  Video,
  MessageCircle,
  MoreVertical,
  MapPin,
  Calendar,
  Award,
  Activity,
  Moon,
  Sun,
  UserCircle
} from 'lucide-react';
import { redirect } from 'next/navigation';

const Dashboard = () => {
  // redirect('/admin/Login');
  const [activeTab, setActiveTab] = useState('Area');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Mock user data
  const user = {
    Fname: "Toss",
    Lname: "training",
    email: "toss125training@gmail.com",
    picture: "https://lh3.googleusercontent.com/a/ACg8ocKw1pXA7V8kUpZA2_7jrqAPcbMbN4-21AZbi4-MaYBQdPw9Pbgt=s96-c-rg-br100",
    phone: "+91 1234567890",
    location: "Javapur, India",
    joinDate: "Jan 2023",
    status: "Active"
  };

  const themeConfig = {
    isAuthenticated: true
  };

  const statsCards = [
    // {
    //   title: "Register User",
    //   value: "",
    //   icon: Users,
    //   color: "bg-gradient-to-r from-cyan-500 to-blue-500",
    //   textColor: "text-white",
    //   url: "/admin/profile"
    // },
    {
      title: "All Packages",
      value: "",
      icon: TrendingUp,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      textColor: "text-white",
      url: "/admin/package"
    },
    // {
    //   title: "All Admin",
    //   value: "",
    //   icon: Eye,
    //   color: "bg-gradient-to-r from-red-500 to-pink-500",
    //   textColor: "text-white",
    //   url: "/admin/All-Admin"
    // },
    //  {
    //   title: "Company Slider",
    //   value: "",
    //   icon: NotepadText,
    //   color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    //   textColor: "text-white",
    //   url:"/admin/logoSystem"
    // }
  ];

  const contactButtons = [
    { icon: Mail, label: "Email", color: "hover:bg-blue-500" },
    { icon: MessageCircle, label: "WhatsApp", color: "hover:bg-green-500" },
    { icon: Video, label: "Video Call", color: "hover:bg-purple-500" },
    { icon: Phone, label: "Call", color: "hover:bg-indigo-500" }
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Theme classes
  const bgClass = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  const cardBgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const textSecondaryClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const textTertiaryClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const borderClass = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const hoverBgClass = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';
  const chartBgClass = isDarkMode ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-blue-50 to-indigo-100';
  const mapBgClass = isDarkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-blue-500 to-blue-600';

  return (
    <div className={`min-h-screen ${bgClass} p-6 transition-colors duration-300`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h1 className={`text-3xl font-bold ${textClass}`}>Admin Dashboard</h1>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${hoverBgClass} transition-all duration-300 ${textSecondaryClass}`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <nav className={`text-sm ${textSecondaryClass}`}>
            <span className="text-blue-500">Home</span> / Admin v1
          </nav>
          <div className="flex items-center gap-2">
            <UserCircle size={20} className={textSecondaryClass} />
            <span className={`text-sm ${textSecondaryClass}`}>Account</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => (
          <div key={index}
            className={`${stat.color} rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300`}
            onClick={() => window.location.href = `${stat.url}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`${stat.textColor} text-sm opacity-90 mb-1`}>
                  {stat.title}
                </p>
                <p className={`${stat.textColor} text-3xl font-bold`}>
                  {stat.value}
                </p>
              </div>
              <stat.icon className={`${stat.textColor} opacity-80`} size={32} />
            </div>
            <button className={`${stat.textColor} text-sm opacity-90 hover:opacity-100 mt-4 flex items-center gap-1`}>
              More Info →
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Charts Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sales Chart */}
          <div className={`${cardBgClass} rounded-xl p-6 shadow-lg transition-colors duration-300`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold ${textClass} flex items-center gap-2`}>
                <Activity size={20} />
                Sales
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('Area')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'Area'
                    ? 'bg-blue-500 text-white shadow-md'
                    : `${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
                    }`}
                >
                  Area
                </button>
                <button
                  onClick={() => setActiveTab('Donut')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'Donut'
                    ? 'bg-blue-500 text-white shadow-md'
                    : `${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
                    }`}
                >
                  Donut
                </button>
              </div>
            </div>

            {/* Mock Chart Area */}
            <div className={`h-64 ${chartBgClass} rounded-lg flex items-center justify-center`}>
              <div className="text-center">
                <Activity size={48} className={`${isDarkMode ? 'text-gray-400' : 'text-blue-400'} mx-auto mb-4`} />
                <p className={textSecondaryClass}>Sales Chart ({activeTab})</p>
                <p className={`text-sm ${textTertiaryClass} mt-2`}>Interactive chart would be displayed here</p>
              </div>
            </div>
          </div>

          {/* Visitors Map */}
          
          <div className={`${cardBgClass} rounded-xl p-4 sm:p-6 shadow-lg transition-colors duration-300`}>
            <h2 className={`text-lg sm:text-xl font-semibold ${textClass} flex items-center gap-2 mb-4 sm:mb-6`}>
              <MapPin size={20} />
              Visitors
            </h2>
            <div className={`w-full ${mapBgClass} rounded-lg flex items-center justify-center`}>
              <div className="relative w-full h-0 pb-[56.25%] sm:pb-[50.25%]"> {/* 16:9 on larger, 9:16 on small */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.1872076984246!2d79.9189809743064!3d23.163366511061255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981af39ce977003%3A0xec01b518cc9bc2d6!2sEnsurekar!5e0!3m2!1sen!2sin!4v1746511287857!5m2!1sen!2sin"
                  className="absolute top-0 left-0 w-full h-full border-0 hover:scale-105 duration-500 ease-in-out rounded-lg"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

        {/* User Profile Section */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className={`${cardBgClass} rounded-xl p-6 shadow-lg transition-colors duration-300`}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover shadow-lg ring-4 ring-blue-50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${textClass}`}>
                    {user.Fname} {user.Lname}
                  </h3>
                  <p className={`${textSecondaryClass} text-sm`}>{user.email}</p>
                  <p className={`${textTertiaryClass} text-xs mt-1`}>{user.phone}</p>
                </div>
              </div>
              <button className={`p-2 ${hoverBgClass} rounded-full transition-colors`}>
                <MoreVertical size={20} className={textTertiaryClass} />
              </button>
            </div>

            {/* Contact Buttons */}
            {/* <div className="grid grid-cols-2 gap-3 mb-6">
              {contactButtons.map((button, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center gap-2 p-3 border-2 ${borderClass} rounded-xl hover:border-transparent ${button.color} hover:text-white transition-all duration-300 group ${textClass}`}
                >
                  <button.icon size={18} />
                  <span className="text-sm font-medium">{button.label}</span>
                </button>
              ))}
            </div> */}

            {/* User Info */}
            <div className="space-y-4">
              <div className={`flex items-center justify-between py-2 border-b ${borderClass}`}>
                <span className={`${textSecondaryClass} text-sm`}>Status</span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className={`text-sm font-medium ${textClass}`}>{user.status}</span>
                </span>
              </div>

              <div className={`flex items-center justify-between py-2 border-b ${borderClass}`}>
                <span className={`${textSecondaryClass} text-sm`}>Location</span>
                <span className={`text-sm font-medium ${textClass} flex items-center gap-1`}>
                  <MapPin size={14} />
                  {user.location}
                </span>
              </div>

              <div className={`flex items-center justify-between py-2 border-b ${borderClass}`}>
                <span className={`${textSecondaryClass} text-sm`}>Joined</span>
                <span className={`text-sm font-medium ${textClass} flex items-center gap-1`}>
                  <Calendar size={14} />
                  {user.joinDate}
                </span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className={`${textSecondaryClass} text-sm`}>Verified Email</span>
                <span className={`text-sm font-medium flex items-center gap-1 ${themeConfig.isAuthenticated ? 'text-green-600' : 'text-red-600'
                  }`}>
                  <Award size={14} />
                  {themeConfig.isAuthenticated ? "Verified" : "Not Verified"}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className={`${cardBgClass} rounded-xl p-6 shadow-lg transition-colors duration-300`}>
            <h3 className={`text-lg font-semibold ${textClass} mb-4`}>Quick Actions</h3>
            <div className="space-y-3">
              <button className={`w-full p-3 text-left rounded-lg ${isDarkMode ? 'hover:bg-gray-700 border-gray-700 hover:border-blue-500' : 'hover:bg-blue-50 border-gray-200 hover:border-blue-200'} transition-colors border`}>
                <span className={`text-sm font-medium ${textClass}`}>Send Message</span>
              </button>
              <button className={`w-full p-3 text-left rounded-lg ${isDarkMode ? 'hover:bg-gray-700 border-gray-700 hover:border-green-500' : 'hover:bg-green-50 border-gray-200 hover:border-green-200'} transition-colors border`}>
                <span className={`text-sm font-medium ${textClass}`}>Schedule Meeting</span>
              </button>
              <button className={`w-full p-3 text-left rounded-lg ${isDarkMode ? 'hover:bg-gray-700 border-gray-700 hover:border-purple-500' : 'hover:bg-purple-50 border-gray-200 hover:border-purple-200'} transition-colors border`}>
                <span className={`text-sm font-medium ${textClass}`}>View Analytics</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;