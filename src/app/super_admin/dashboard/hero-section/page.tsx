"use client";

import React, { useState, useEffect } from "react";
import { Save, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface HeroSectionData {
  id?: number;
  text_line1: string;
  text_line2: string;
  text_line3: string;
  button_text: string;
  button_src: string;
  font_size: number;
}

const HeroSectionManagement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState<HeroSectionData>({
    text_line1: "File Your Income Tax",
    text_line2: "",
    text_line3: "",
    button_text: "File Now",
    button_src: "/accounting/income-tax-return-filing",
    font_size: 73,
  });

  // Fetch current hero section data
  useEffect(() => {
    fetchHeroSection();
  }, []);

  const fetchHeroSection = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/hero-section");
      if (response.ok) {
        const data = await response.json();
        if (data.status === "success" && data.data) {
          setFormData({
            text_line1: data.data.text_line1 || "File Your Income Tax",
            text_line2: data.data.text_line2 || "Return Starting",
            text_line3: data.data.text_line3 || "at Just ₹499/-",
            button_text: data.data.button_text || "File Now",
            button_src: data.data.button_src || "/accounting/income-tax-return-filing",
            font_size: data.data.font_size || 73,
          });
        }
      } else {
        setMessage({ type: 'error', text: 'Failed to load hero section data' });
      }
    } catch (error) {
      console.error("Error fetching hero section:", error);
      setMessage({ type: 'error', text: 'Error loading hero section data' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);

    try {
      const token = localStorage.getItem("superAdminAuth");
      if (!token) {
        setMessage({ type: 'error', text: 'Authentication required. Please login again.' });
        setIsSaving(false);
        return;
      }

      const response = await fetch("/api/hero-section", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": token,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage({ type: 'success', text: data.message || 'Hero section updated successfully!' });
        // Clear message after 3 seconds
        setTimeout(() => setMessage(null), 3000);
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.details 
          ? `${errorData.error || 'Failed to update hero section'}: ${errorData.details}`
          : errorData.error || 'Failed to update hero section';
        setMessage({ type: 'error', text: errorMessage });
      }
    } catch (error) {
      console.error("Error updating hero section:", error);
      setMessage({ type: 'error', text: 'Error updating hero section' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'font_size' ? parseInt(value) || 73 : value,
    }));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-5 h-5 animate-spin text-teal-600" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-3 py-4 max-w-3xl">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-900">Manage Hero Section</h1>
        </div>

        {message && (
          <div
            className={`mb-3 p-2.5 rounded-md flex items-center gap-2 text-sm ${
              message.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {message.type === 'success' ? (
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            <span className="text-xs">{message.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Text Line 1 */}
            <div className="md:col-span-2">
              <label htmlFor="text_line1" className="block text-xs font-medium text-gray-600 mb-1">
                Text Line 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="text_line1"
                name="text_line1"
                value={formData.text_line1}
                onChange={handleChange}
                required
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                placeholder="e.g., File Your Income Tax"
              />
            </div>

            {/* Text Line 2 */}
            <div>
              <label htmlFor="text_line2" className="block text-xs font-medium text-gray-600 mb-1">
                Text Line 2
              </label>
              <input
                type="text"
                id="text_line2"
                name="text_line2"
                value={formData.text_line2}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                placeholder="e.g., Return Starting"
              />
            </div>

            {/* Text Line 3 */}
            <div>
              <label htmlFor="text_line3" className="block text-xs font-medium text-gray-600 mb-1">
                Text Line 3
              </label>
              <input
                type="text"
                id="text_line3"
                name="text_line3"
                value={formData.text_line3}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                placeholder="e.g., at Just ₹499/-"
              />
            </div>

            {/* Button Text */}
            <div>
              <label htmlFor="button_text" className="block text-xs font-medium text-gray-600 mb-1">
                Button Text <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="button_text"
                name="button_text"
                value={formData.button_text}
                onChange={handleChange}
                required
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                placeholder="e.g., File Now"
              />
            </div>

             {/* Button Source/URL */}
             <div>
               <label htmlFor="button_src" className="block text-xs font-medium text-gray-600 mb-1">
                 Button Link <span className="text-red-500">*</span>
               </label>
               <input
                 type="text"
                 id="button_src"
                 name="button_src"
                 value={formData.button_src}
                 onChange={handleChange}
                 required
                 className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                 placeholder="/accounting/income-tax-return-filing"
               />
             </div>

             {/* Font Size */}
             <div className="md:col-span-2">
               <label htmlFor="font_size" className="block text-xs font-medium text-gray-600 mb-1">
                 Font Size (px) <span className="text-red-500">*</span>
               </label>
               <input
                 type="number"
                 id="font_size"
                 name="font_size"
                 value={formData.font_size}
                 onChange={handleChange}
                 required
                 min="20"
                 max="150"
                 className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                 placeholder="73"
               />
               <p className="mt-1 text-xs text-gray-500">
                 Font size for the main heading (applies to screens 1200px and above)
               </p>
             </div>
           </div>

           {/* Preview Section */}
           <div className="mt-4 p-3 bg-gray-50 rounded-md border border-gray-200">
             <h3 className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Preview</h3>
             <div className="space-y-1.5">
               <div 
                 className="font-bold text-gray-900"
                 style={{ fontSize: `${formData.font_size}px` }}
               >
                 {formData.text_line1}
               </div>
              {formData.text_line2 && (
                <div className="text-base font-semibold text-orange-500">
                  {formData.text_line2}
                </div>
              )}
              {formData.text_line3 && (
                <div className="text-lg font-bold text-gray-900">
                  {formData.text_line3}
                </div>
              )}
              <div className="mt-2">
                <a
                  href={formData.button_src}
                  className="inline-block px-6 py-1.5 text-sm bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-colors"
                >
                  {formData.button_text}
                </a>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-2 pt-2 border-t border-gray-200">
            <button
              type="button"
              onClick={fetchHeroSection}
              className="px-4 py-1.5 text-xs font-medium border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              disabled={isSaving}
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="px-4 py-1.5 text-xs font-medium !bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-3 h-3" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSectionManagement;

