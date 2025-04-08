"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getFirestore, collection, query, where, getDocs, doc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase.config"
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

  const getadmainByEmail = async (email: string, password: string): Promise<void> => {
    try {
      const q = query(collection(db, "admin"))
      const querySnapshot = await getDocs(q)

      if (querySnapshot.empty) {
        console.log("No user found with this email.")
        return;
      }
      console.log("ok");

      querySnapshot.docs.forEach((doc) => {
        const data = doc.data()
        console.log("Firebase data:", data)
        if (data.email === email && data.password === password) {
          console.log("Admin found in database")
          setError("Login successful ")
          router.push("/Adman/");
          return (true)
        }
        else {
          console.log("Login and Password not matched")
          setError("Login and Password not matched");
          return (false)
        }
      })
    } catch (error) {
      console.error("Error fetching user:", error)
      return;
    }
  }


  // Handle login submission
  const AdmainhandleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("Attempting login with:", input.email);

      if (!input.email || !input.password) {
        setError("Email and password are required.");
        setLoading(false);
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.email)) {
        setError("Please enter a valid email address.");
        setLoading(false);
        return;
      }

      // First check if admin exists in database
      const dbCheck = await getadmainByEmail(input.email, input.password);

    } catch (err) {
      console.error("Login process error:", err);
      setError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Login</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Endurekar - Grow with Expert Consulting Support.
          </p>
        </div>

        {error && <div className="text-red-500 p-3 text-center bg-red-100 rounded">{error}</div>}

        <div className="space-y-4">
          <div className="border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <div className="flex items-center px-4 py-3">
              <span className="text-gray-500 mr-3">
              </span>
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="w-full outline-none text-gray-700 dark:text-white dark:bg-gray-800"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <div className="flex items-center px-4 py-3">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="w-full outline-none text-gray-700 dark:text-white dark:bg-gray-800"
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-3 text-gray-500 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                className="rounded text-blue-600"
                name="remember"
                onChange={handleInputChange}
                checked={input.remember}
              />
              <span className="text-gray-700 dark:text-gray-300">Remember me</span>
            </label>
            <Link href="/Forget-Password" className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400">
              Forgot Password?
            </Link>
          </div>

          <button
            className="w-full py-3 bg-p1 hover:text-mainTextColor text-white font-medium rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-s2 hover:text-mainTextColor"
            onClick={AdmainhandleLogin}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <Link href="/Adman/Help" className="block w-full">
            <button
              className="w-full py-3 bg-p1 hover:text-mainTextColor text-white font-medium rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-s2 hover:text-mainTextColor"
            >
              Help
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;