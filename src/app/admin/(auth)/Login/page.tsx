'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { collection, getDocs, query } from "firebase/firestore";
// import { db } from "../../../../firebase/firebase.config";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Logo from "../../../images/ensure_logo.png";

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
        "https://edueye.co.in/ensurekar/existing-site/admin-login.php",
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
    <section className="h-screen w-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="text-center">
          <Image
            alt="logo"
            src={Logo}
            className="my-3 mx-auto animate-pulse"
          />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Login</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Endurekar - Grow with Expert Consulting Support.
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

          <Link href="/admin/Help" className="block w-full">
            <button className="w-full py-3 bg-p1 text-white rounded-md hover:bg-s2 hover:text-mainTextColor transition transform hover:-translate-y-1">
              Help
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
