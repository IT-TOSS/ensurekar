'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Crown } from "lucide-react";
import Image from "next/image";
import Logo from "@/app/images/ensure_logo.png";

interface InputState {
  email: string;
  password: string;
  remember: boolean;
}

const SuperAdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState<InputState>({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const loginSuperAdmin = async (email: string, password: string) => {
    try {
      console.log("Attempting Super Admin login for:", email);
      
      // Call the API to get admin data
      const response = await fetch(`https://edueye.co.in/ensurekar/existing-site/admin-register.php?email=${encodeURIComponent(email)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

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

      if (!adminData) {
        throw new Error("No admin data found for this email");
      }

      console.log("Admin Data:", adminData);

      // Check if the admin exists
      if (!adminData.email) {
        throw new Error("Admin not found");
      }

      // Check if the role is superadmin
      if (adminData.role && adminData.role.toLowerCase() !== "superadmin") {
        throw new Error("Access denied. This account is not authorized for Super Admin access.");
      }

      // Check if the status is active
      if (adminData.status && adminData.status.toLowerCase() !== "active") {
        throw new Error("Your email is inactive for Super Admin credentials. Please contact support.");
      }

      // Check password (assuming the API returns the password or we need to verify it)
      // Note: In a real application, you should never compare passwords directly
      // This is just for demonstration. In production, use proper password hashing
      if (adminData.password && adminData.password !== password) {
        throw new Error("Invalid password");
      }

      // If we reach here, login is successful
      return {
        success: true,
        adminData: adminData
      };

    } catch (error) {
      console.error("Super Admin login error:", error);
      throw error;
    }
  };

  const setAuthLocalStorage = (email: string) => {
    const encodedEmail = encodeURIComponent(email); // safe for storage
    const value = `super_admin_auth${encodedEmail}`;

    localStorage.setItem('superAdminAuth', value);
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    if (!input.email || !input.password) {
      setError("Email and password are required.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const result = await loginSuperAdmin(input.email, input.password);
      if (result.success) {
        setAuthLocalStorage(input.email);
        console.log("Super Admin Login successful");
        console.log("Admin Data:", result.adminData);
        router.push("/super_admin/dashboard");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      // Use the specific error message from the API
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-screen w-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="text-center">
          <div className="relative mb-4">
            <Image
              alt="logo"
              src={Logo}
              className="my-3 mx-auto animate-pulse"
            />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2">
              <Crown className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Super Admin Login</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Endurekar - Super Admin Portal Access.
          </p>
        </div>

        {error && <div className="text-red-500 p-3 text-center bg-red-100 rounded">{error}</div>}

        <div className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded text-gray-700 dark:text-white dark:bg-gray-800"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded text-gray-700 dark:text-white dark:bg-gray-800"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                name="remember"
                checked={input.remember}
                onChange={handleInputChange}
                className="rounded text-blue-600"
              />
              <span>Remember me</span>
            </label>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 bg-p1 text-white rounded-md hover:bg-s2 hover:text-mainTextColor transition transform hover:-translate-y-1"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <Link href="/super_admin/Help" className="block w-full">
            <button className="w-full py-3 bg-p1 text-white rounded-md hover:bg-s2 hover:text-mainTextColor transition transform hover:-translate-y-1">
              Help
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuperAdminLogin;