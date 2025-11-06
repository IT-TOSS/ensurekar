"use client";

import React from 'react';
import {
  HelpCircle,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Users,
  HeadphonesIcon,
  Send,
  ExternalLink
} from 'lucide-react';

const HelpPage = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:Ensure@ensure.com?subject=Support Request - Toss Consultancy Services';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:12345';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-[#14bc79]" />
            Help & Support
          </h1>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Card */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-lg">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us an email for any inquiries or support requests</p>
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-500 mb-1">Email Address</p>
                <a 
                  href="mailto:ensurekar@ensurekar.com" 
                  className="text-lg font-medium text-blue-600 hover:text-blue-700 break-all"
                >
                  ensurekar@ensurekar.com
                </a>
              </div>
              <button
                onClick={handleEmailClick}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Email
              </button>
            </div>
          </div>
        </div>

        {/* Phone Card */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Contact our Tech Team Head directly for immediate assistance</p>
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-500 mb-1">Tech Team Head Number</p>
                <a 
                  href="tel:12345" 
                  className="text-lg font-medium text-green-600 hover:text-green-700"
                >
                  12345
                </a>
              </div>
              <button
                onClick={handlePhoneClick}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
   
      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-[#14bc79] to-emerald-600 rounded-xl shadow-md p-6 text-white">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <HelpCircle className="w-6 h-6" />
          Need Immediate Assistance?
        </h2>
        <p className="mb-4 text-emerald-50">
          For urgent matters, please call our Tech Team Head directly at <strong>12345</strong> or send an email to 
          <strong> ensurekar@ensurekar.com</strong>
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handlePhoneClick}
            className="bg-white text-[#14bc79] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </button>
          <button
            onClick={handleEmailClick}
            className="bg-white text-[#14bc79] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;

