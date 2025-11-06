"use client";

import React, { useEffect, useState } from 'react';
import {
  Users,
  UserCheck,
  Package,
  ShoppingCart,
  TrendingUp,
  Activity,
  Shield,
  Crown,
  BarChart3,
  Globe,
  Database,
  FileText,
  Bell,
  Settings
} from 'lucide-react';

const SuperAdminDashboard = () => {
  const [loggedInEmail, setLoggedInEmail] = useState<string>("Super Admin");

  useEffect(() => {
    const superAdminAuth = localStorage.getItem('superAdminAuth');
    if (superAdminAuth) {
      const emailMatch = superAdminAuth.match(/super_admin_auth(.+)/);
      if (emailMatch && emailMatch[1]) {
        setLoggedInEmail(decodeURIComponent(emailMatch[1]));
      }
    }
  }, []);
  const statsCards = [
    {
      title: "Total Users",
      value: "",
      icon: Users,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      textColor: "text-white",
      change: "+12%",
      changeType: "positive"
    },
    {
      title: "Active Admins",
      value: "",
      icon: UserCheck,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      textColor: "text-white",
      change: "+8%",
      changeType: "positive"
    },
    {
      title: "Total Packages",
      value: "",
      icon: Package,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      textColor: "text-white",
      change: "+15%",
      changeType: "positive"
    },
    {
      title: "Total Orders",
      value: "",
      icon: ShoppingCart,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      textColor: "text-white",
      change: "+23%",
      changeType: "positive"
    }
  ];

  const quickActions = [
    { name: "Manage Users", icon: Users, color: "bg-blue-500", link: "/super_admin/users" },
    { name: "Admin Management", icon: UserCheck, color: "bg-green-500", link: "/super_admin/dashboard/admins" },
    { name: "Package Settings", icon: Package, color: "bg-purple-500", link: "/super_admin/dashboard/packages" },
    { name: "Analytics", icon: BarChart3, color: "bg-orange-500", link: "/super_admin/dashboard/analytics" },
    { name: "System Settings", icon: Settings, color: "bg-gray-500", link: "/super_admin/dashboard/settings" },
    { name: "Activity Log", icon: Activity, color: "bg-indigo-500", link: "/super_admin/dashboard/activity" }
  ];

  const recentActivities = [
    { action: "New user registered", user: "John Doe", time: "2 minutes ago", type: "user" },
    { action: "Admin created new package", user: "Admin User", time: "15 minutes ago", type: "admin" },
    { action: "Order completed", user: "Jane Smith", time: "1 hour ago", type: "order" },
    { action: "System backup completed", user: "System", time: "2 hours ago", type: "system" },
    { action: "New admin added", user: "Super Admin", time: "3 hours ago", type: "admin" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Crown className="w-8 h-8 text-[#14bc79]" />
            Super Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your system.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-md">
            <Shield className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium">{loggedInEmail}</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <div key={index} className={`${card.color} ${card.textColor} rounded-xl p-6 shadow-lg`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">{card.title}</p>
                <p className="text-3xl font-bold mt-2">{card.value}</p>
                <p className={`text-sm mt-1 ${card.changeType === 'positive' ? 'text-green-200' : 'text-red-200'}`}>
                  {card.change} from last month
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <card.icon className="w-8 h-8" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="w-6 h-6 text-purple-600" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <div className={`${action.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'user' ? 'bg-blue-500' :
                  activity.type === 'admin' ? 'bg-green-500' :
                  activity.type === 'order' ? 'bg-orange-500' : 'bg-purple-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-purple-600" />
          System Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-900">Database</p>
              <p className="text-sm text-gray-600">All systems operational</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-900">API Services</p>
              <p className="text-sm text-gray-600">Running smoothly</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div>
              <p className="font-medium text-gray-900">Backup</p>
              <p className="text-sm text-gray-600">Scheduled in 2 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
