'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { collection, getDocs, query } from "firebase/firestore";
// import { db } from "../../../../firebase/firebase.config";
import { Eye, EyeOff } from "lucide-react";

interface InputState {
  email: string;
  password: string;
  remember: boolean;
}

const Login = () => {
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

  // const loginAdmin = async (email: string, password: string) => {
  //     let matched = false;
  //     console.log("Email:", email, "Password:", password);
  //    if ("toss125training@gmail.com" === email && "Ensure@2020" === password) {
  //       matched = true;
  //     }
  //   return matched;
  // };

  const loginAdmin = async (email: string, password: string) => {
    try {
      // console.log("Logging in with email:", email);
      // console.log("Logging in with password:", password);
      const response = await fetch(
        "/api/admin-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        }
      );

      if (!response.ok) {
        console.error("HTTP error:", response.status);
        return false;
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Adjust this according to your PHP API's actual success field
      return data.message === "Login successful.";
    } catch (error) {
      console.error("Login request failed:", error);
      return false;
    }
  };


  const setAuthLocalStorage = (email: string) => {
    const encodedEmail = encodeURIComponent(email); // safe for storage
    const value = `admin_auth${encodedEmail}`;

    localStorage.setItem('adminAuth', value);
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
      const success = await loginAdmin(input.email, input.password);
      if (success) {
        setAuthLocalStorage(input.email);
        
        // Set session start time for admin session timeout (90 minutes)
        const now = Date.now();
        localStorage.setItem("adminSessionStartTime", now.toString());
        localStorage.setItem("adminLastActivityTime", now.toString());
        
        console.log("Login successful");
        router.push("/admin");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-full flex items-center bg-black relative overflow-hidden">
      {/* Background UI Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        
        {/* Left side accent gradient */}
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#1a8b82]/20 via-[#1a8b82]/10 to-transparent"></div>
        
        {/* Decorative animated circles */}
        <div className="absolute left-10 top-20 w-72 h-72 bg-[#1a8b82] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute left-32 bottom-32 w-96 h-96 bg-[#ffbf3f] rounded-full opacity-8 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-20 top-40 w-80 h-80 bg-[#1a8b82] rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Diagonal lines pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
          }}
        ></div>
        
        {/* Corner accent elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#1a8b82]/10 to-transparent rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#ffbf3f]/10 to-transparent rounded-tl-full"></div>
        
        {/* Light rays effect */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#1a8b82]/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#ffbf3f]/10 to-transparent"></div>
      </div>
      
      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md p-6 sm:p-8 space-y-6 sm:space-y-8 bg-white rounded-lg shadow-2xl dark:bg-gray-800 mx-4 ml-8 sm:ml-16 md:ml-24 border border-gray-700/50">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Admin Login</h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Endurekar - Grow with Expert Consulting Support.
          </p>
        </div>

        {error && <div className="text-red-500 p-3 text-center bg-red-100 rounded">{error}</div>}

        <div className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={input.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a8b82] focus:border-transparent text-gray-700 dark:text-white dark:bg-gray-800"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a8b82] focus:border-transparent text-gray-700 dark:text-white dark:bg-gray-800"
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
            className="w-full py-3 bg-[#1a8b82] text-white rounded-lg hover:bg-[#ffbf3f] hover:text-black transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <Link href="/admin/Help" className="block w-full">
            <button className="w-full py-3 bg-[#1a8b82] text-white rounded-lg hover:bg-[#ffbf3f] hover:text-black transition-all duration-200 font-semibold">
              Help
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
