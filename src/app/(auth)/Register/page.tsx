"use client";
import React, { useState } from "react";
import Image from "next/image";
import login_bg_img from "../../images/login_bg_img.png";
import logo from "../../images/ensure_logo.png";
import google from "../../images/google.png";
import { ArrowLeft, ArrowRight, Envelope, Lock, WhatsappLogo } from "phosphor-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth, db } from "../../../firebase/firebase.config";  // it's for firebase config
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setAuth } from "@/store/themeConfigSlice";
import { u } from "framer-motion/client";




const Register = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const googleProvider = new GoogleAuthProvider();

  const testimonials = [
    {
      text: "I had a great experience working with Ensurekar for my company registration & Startup India registration process. As a startup, navigating the legalities can be overwhelming, but their team was incredibly supportive and helpful. They guided me through the entire process with simplicity and clarity. Ensurekar has a well-experienced and professional team that made the experience smooth and stress-free. Highly recommended !",
      name: "Shruti Wankhade",
      title: "Wan Cosmetics",
    },
    {
      text: "Ensurekar in Jabalpur is top-notch! The prominently displayed name caught my eye, and the experience exceeded expectations. Professional staff, attention to detail, and a warm atmosphere make it a go-to option. Registered business in Jabalpur made easy by Ensurekar.",
      name: "Dikshant tamrakar",
      title: "Harsh Hasthkala",
    },
    {
      text: "Excellent service for Pvt Ltd company registration and GST compliance. The team at Ensurekar made the entire process hassle-free. Highly recommend it for anyone looking for a DPIIT certificate and other business registrations",
      name: "Jasmine",
      title: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [userCredential, setUserCredential] = useState<{
    user: any;
    additionalUserInfo?: { isNewUser: boolean };
  } | null>(null);
  const [otp, setOtp] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsappNumber: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [message, setMessage] = useState({
    message: "",
    showModel: false,
    success: false,
    userId: "",
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const checkOtp = () => {
    // console.log("otp is " + otp + "& " + generatedOtp);

    if (otp === generatedOtp) {
      setIsOtpVerified(true);
      setShowOtpModal(false);
      completeRegistration();
      return;
    } else {
      setMessage({
        message: "OTP Mismatched. Please try again.",
        showModel: true,
        success: false,
        userId: "",
      });
      setShowOtpModal(false);
    }
  };

  const sendOtpEmail = async (email: string, otp: string): Promise<void> => {
    try {
      console.log(" i am in sendOtpEmail ");
      const response = await fetch("/api/OTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Success:", result);
      } else {
        console.error("Error:", result.error);
      }
    } catch (error) {
      console.error("Network or parsing error:", error);
    }
  };

  const completeRegistration = async () => {
    try {
      setLoading(true);

      if (!userCredential && formData.email && formData.password) {
        const credential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

        console.log(credential, " I am credential by Created my Krishna");

        const user = credential.user;

        console.log(user, " I am User by Created my Krishna");

        await updateProfile(user, {
          displayName: `${formData.firstName} ${formData.lastName}`,
        });

        console.log(user.uid, " I am User Id");

        console.log(formData.firstName + "  " + formData.lastName)
        const response = await fetch("/api/registerUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.uid,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            whatsappNumber: formData.whatsappNumber,
            photoURL: user.photoURL,
            password: formData.password,
          }),
        });

        const result = await response.json();
        console.log(result, " I am result by Created my Krishna completed ebery thing");

        if (response.ok) {
          console.log("User data successfully sent to backend:", result);
        } else {
          console.error("Error sending user data to backend:", result.error);
        }

        dispatch(
          setAuth({
            isAuthenticated: true,
            userInfo: {
              username: user.uid,
              email: user.email,
              Fname: formData.firstName,
              Lname: formData.lastName,
              contact: formData.whatsappNumber || "N/A",
              role: "user",
              picture: user.photoURL || "N/A",
              uid: user.uid,
            },
            Token: await user.getIdToken(),
          })
        );

        // Set session start time for session timeout (40 minutes)
        const now = Date.now();
        localStorage.setItem("sessionStartTime", now.toString());
        localStorage.setItem("lastActivityTime", now.toString());

        setMessage({
          message: "Registration Successful! You can now proceed to dashboard.",
          showModel: true,
          success: true,
          userId: user.uid,
        });
      } else if (userCredential) {
        const user = userCredential.user;
        const isNewUser = userCredential.additionalUserInfo?.isNewUser;
        
        dispatch(
          setAuth({
            isAuthenticated: true,
            userInfo: {
              username: user.uid,
              email: user.email,
              Fname: user.displayName?.split(" ")[0] || "",
              Lname: user.displayName?.split(" ").slice(1).join(" ") || "",
              contact: formData.whatsappNumber || "N/A",
              role: "user",
              picture: user.photoURL || "N/A",
              uid: user.uid,
            },
            Token: await user.getIdToken(),
          })
        );

        // Set session start time for session timeout (40 minutes)
        const now = Date.now();
        localStorage.setItem("sessionStartTime", now.toString());
        localStorage.setItem("lastActivityTime", now.toString());

        setMessage({
          message: "Registration Successful! You can now proceed to dashboard.",
          showModel: true,
          success: true,
          userId: user.uid,
        });
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        whatsappNumber: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
      });
    } catch (error: any) {
      console.error("Registration Error:", error.code, error.message);
      let errorMessage = "User Registration Failed";
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email already in use";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email format";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters";
          break;
        case "auth/operation-not-allowed":
          errorMessage = "Email/Password authentication is not enabled in Firebase";
          break;
        default:
          errorMessage = error.message || "User Registration Failed";
      }
      setMessage({
        message: errorMessage,
        showModel: true,
        success: false,
        userId: "",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Validating registration form...");
      if (!formData.acceptTerms) {
        throw new Error("Please accept the terms and conditions");
      }

      if (formData.password !== formData.confirmPassword) {
        throw new Error("Password and Confirm Password should be same");
      }
      if(formData.whatsappNumber.length < 10) {
        throw new Error("Please enter a valid number");
      }

      const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
      console.log(newOtp + " : ooo");
      setGeneratedOtp(newOtp);

      setUserCredential(null);
      setShowOtpModal(true);
      await sendOtpEmail(formData.email, newOtp);
    } catch (error: any) {
      console.error("Validation Error:", error.message);
      setMessage({
        message: error.message || "Validation Failed",
        showModel: true,
        success: false,
        userId: "",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      console.log("Trying Google Sign-In...");

      // Try to sign in with Google
      // Define the signInWithGoogle function
      const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result.user;
      };

      const user = await signInWithGoogle();
      // console.log(user, "user Created by Krishna coming from firebase");

      if (user && user.uid) {
        const displayName = user.displayName;
        const email = user.email;
        const phoneNumber = user.phoneNumber || '';

        const payload = {
          userId: user.uid,
          firstName: user.displayName?.split(" ")[0] || "Unknown",
          lastName: user.displayName?.split(" ")[1] || "User",
          email: user.email,
          phoneNumber: user.phoneNumber || "",
          whatsappNumber: "",
          photoURL: user.photoURL,
          password: user.uid.slice(0, 8)
        };

        console.log(payload, "I am result by Google Sign In by Krishna");

        // Register user in our own backend (or confirm they already exist)
        const response = await fetch('/api/registerUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const userData = await response.json().catch(() => null);
        console.log(userData, "user and result by Google Sign In from backend");

        if (!response.ok && response.status !== 409) {
          // 409 means user already exists, which is fine for Google login
          throw new Error(userData?.message || "Failed to register user in backend");
        }

        // If user was newly created, show success message
        if (response.ok) {
          setMessage({
            message: "Registration Successful! You can now proceed to dashboard.",
            showModel: true,
            success: true,
            userId: user.uid,
          });
          setUserCredential({ user });
        }

        // Get the token safely
        const token = await user.getIdToken?.() || "";

        // Set authentication state
        dispatch(
          setAuth({
            isAuthenticated: true,
            userInfo: {
              username: displayName || (email?.split('@')[0] ?? "Unknown"),
              email: email,
              Fname: displayName ? displayName.split(' ')[0] : '',
              Lname: displayName ? displayName.split(' ').slice(1).join(' ') : '',
              contact: phoneNumber || "N/A",
              role: "user", // Default role
              picture: user.photoURL || "N/A",
              uid: user.uid,
            },
            Token: token,
          })
        );

        localStorage.setItem('authToken', token);

        // Set session start time for session timeout (40 minutes)
        const now = Date.now();
        localStorage.setItem("sessionStartTime", now.toString());
        localStorage.setItem("lastActivityTime", now.toString());

        navigate.push("/dashboard");

      } else {
        console.log("Google login failed. Please try again.");
      }
    } catch (err) {
      console.error("Google login error:", err);
      let errorMessage = "An error occurred during Google login. Please try again.";

      if (err && typeof err === 'object' && 'code' in err) {
        const errorCode = err.code;
        if (errorCode === 'auth/popup-closed-by-user') errorMessage = "Login popup was closed before completion.";
        if (errorCode === 'auth/cancelled-popup-request') errorMessage = "The login operation was cancelled.";
        if (errorCode === "auth/operation-not-allowed") errorMessage = "Google authentication is not enabled in Firebase";
      }

      // setError(errorMessage);
      setMessage({
        message: errorMessage,
        showModel: true,
        success: false,
        userId: "",
      });
    } finally {
      setLoading(false);
    }
  };


  //--------------------






  const handleVisitDashboard = () => {
    setMessage({ message: "", showModel: false, success: false, userId: "" });
    if (isOtpVerified) {
      navigate.push("/dashboard");
    }
  };

  return (
    <section className="pt-24 lg:stp-30 sbp-30 flex justify-start items-center gap-8 xl:gap-20 xxl:gap-32 max-xl:flex-col">
      <div className="relative lg:max-h-screen lg:min-h-screen overflow-hidden max-xl:order-2">
        <Image
          src={login_bg_img}
          alt="image"
          className="object-cover h-full"
        />

        <div className="absolute bottom-10 xl:bottom-20 left-4 xl:left-16 xxl:left-24 xxxl:left-32 testimonial-bg p-4 sm:p-8 max-xl:container lg:w-[550px] rounded-xl overflow-hidden">
          <div className="relative h-full flex flex-col justify-between">
            <p className="max-h-20 overflow-y-auto">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex gap-3 pt-3 justify-between">
              <div className="">
                <p className="text-lg sm:text-2xl font-medium">
                  {testimonials[currentIndex].name}
                </p>
                <p className="max-sm:text-xs">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>

            <div className="flex justify-end items-center gap-3 absolute right-0 sm:right-4 bottom-4 z-20">
              <button
                className="bg-mainTextColor hover:bg-s2 hover:text-black/90 duration-300 rounded-full text-white p-3"
                onClick={handlePrev}
              >
                <ArrowLeft />
              </button>
              <button
                className="bg-mainTextColor hover:bg-s2 hover:text-black/90 duration-300 rounded-full text-white p-3"
                onClick={handleNext}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-xl:container xl:w-[650px] xl:pr-8 max-xl:stp-15">
        <h2 className="display-4 py-5 dark:text-white">Register</h2>
        <p className="text-bodyText pb-6 lg:pb-10 dark:text-white">
          Join Our Community: Register for Exclusive Access
        </p>
        <button
          className="flex justify-center items-center gap-2 font-semibold bg-softBg py-4 rounded-xl w-full"
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          <span>
            <Image src={google} alt="image" width={24} height={24} />
          </span>
          Sign up with Google
        </button>

        <div className="py-6 lg:py-8 text-center">
          <p className="relative after:absolute after:top-3 after:left-0 after:h-px after:bg-strokeColor after:w-[40%] before:absolute before:top-3 before:right-0 before:h-px before:bg-strokeColor max-md:before:content-none max-md:after:content-none before:w-[40%] dark:text-white">
            Or Sign up With
          </p>
        </div>

        <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div className="col-span-2 sm:col-span-1">
            <input
              type="text"
              placeholder="First Name"
              className="placeholder:text-bodyText py-4 px-8 border w-full outline-none"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="placeholder:text-bodyText py-4 px-8 border w-full outline-none"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sm:col-span-1 col-span-2 py-4 px-8 border flex justify-start items-center gap-2 bg-white">
            <span className="text-xl text-bodyText">
              <Envelope weight="fill" />
            </span>
            <input
              type="email"
              placeholder="Type email address"
              name="email"
              className="placeholder:text-bodyText w-full outline-none"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="sm:col-span-1 col-span-2 py-4 px-8 border flex justify-start items-center gap-2 bg-white">
            <span className="text-xl text-bodyText">
              <WhatsappLogo weight="fill" />
            </span>
            <input
              type="text"
              placeholder="Type WhatsApp Number"
              name="whatsappNumber"
              className="placeholder:text-bodyText w-full outline-none"
              onChange={handleChange}
              value={formData.whatsappNumber}
              maxLength={10}
              required
            />
           
          </div>
          <div className="sm:col-span-1 col-span-2 py-4 px-8 border flex justify-start items-center gap-2 bg-white">
            <span className="text-xl text-bodyText">
              <Lock weight="fill" />
            </span>
            <input
              type="password"
              placeholder="Type Password"
              name="password"
              className="placeholder:text-bodyText w-full outline-none"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>
          <div className="sm:col-span-1 col-span-2 py-4 px-8 border flex justify-start items-center gap-2 bg-white">
            <span className="text-xl text-bodyText">
              <Lock weight="fill" />
            </span>
            <input
              type="password"
              placeholder="Type Password again"
              name="confirmPassword"
              className="placeholder:text-bodyText w-full outline-none"
              onChange={handleChange}
              value={formData.confirmPassword}
              required
            />
          </div>
          <div className="col-span-2 table-checkbox">
            <label className="flex justify-start items-center gap-2">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
              />
              <span className="dark:text-white">
                Agree With
                <Link
                  href="/Privacy-Policy"
                  className="font-semibold ml-1 underline hover:text-blue-800 duration-300"
                >
                  Privacy & Policy
                </Link>
              </span>
            </label>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="py-4 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500 w-full"
            // disabled={loading}
            >
              {/* {loading ? "Registering..." : "Register"} */}
              Register
            </button>
            <div className="text-center relative my-5">
              <span className="relative z-10 bg-white px-2 dark:bg-black dark:text-white">
                Already have an account?
              </span>
              <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 transform -translate-y-1/2"></div>
            </div>
            <Link
              href="/Login"
              className="py-4 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500 w-full"
            >
              Login here
            </Link>
          </div>
        </form>
      </div>

      {message.showModel && (
        <div className="fixed inset-0 bg-white/50 bg-opacity-50 z-10 flex justify-center items-center animate-fade-in">
          <div className="bg-softBg1 p-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-95 hover:scale-100">
            <p className="text-lg font-semibold mb-4">{message.message}</p>
            {message.userId && <p className="text-lg font-semibold mb-4">Your User Id is: {message.userId}</p>}
            <div className="flex justify-between items-center gap-4">
              {message.success ? (
                <button
                  className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transition-colors duration-300"
                  onClick={handleVisitDashboard}
                >
                  Visit Dashboard
                </button>
              ) : (
                <button
                  className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transition-colors duration-300"
                  onClick={() =>
                    setMessage({
                      message: "",
                      showModel: false,
                      success: false,
                      userId: "",
                    })
                  }
                >
                  Try again
                </button>
              )}
              <button
                className="border border-gray-300 py-2 px-4 text-gray-700 rounded hover:bg-gray-100 transition-colors duration-300"
                onClick={() =>
                  setMessage({
                    message: "",
                    showModel: false,
                    success: false,
                    userId: "",
                  })
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showOtpModal && (
        <div className="fixed inset-0 bg-white/50 bg-opacity-50 z-10 flex justify-center items-center animate-fade-in">
          <div className="bg-softBg1 p-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-95 hover:scale-100">
            <p className="text-lg font-semibold mb-4">Enter OTP sent to your Email</p>
            <input
              type="text"
              className="text-lg font-semibold mb-4 w-full p-2 border rounded"
              // onChange={(e) => setOtp(e.target.value)}
              onChange={(e) => setOtp(e.target.value.replace(/\s/g, ''))}
              placeholder="XXXXXX"
            />
            <div className="flex justify-between items-center gap-4">
              <button
                className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transition-colors duration-300"
                onClick={checkOtp}
              >
                Submit
              </button>

              <button
                className="border border-gray-300 py-2 px-4 text-gray-700 rounded hover:bg-gray-100 transition-colors duration-300"
                onClick={() => {
                  setShowOtpModal(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Register;