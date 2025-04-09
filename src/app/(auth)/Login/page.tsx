"use client";

import React, { useState } from "react";
import Image from "next/image";
import login_bg_img from "../../images/login_bg_img.png";
import google from "../../images/google.png";
import logo from "../../images/logo.png";
import { ArrowLeft, ArrowRight, Envelope, Lock, Password } from "phosphor-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginWithEmailAndPassword, signInWithGoogle } from "../../../firebase/auth.service";
import { useDispatch } from "react-redux";
import { setAuth } from "@/store/themeConfigSlice";
// import { console } from "inspector";

const Login = () => {
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
      text: "Excellent service for  Pvt Ltd company registration and GST compliance. The team at Ensurekar made the entire process hassle-free. Highly recommend it for anyone looking for a DPIIT certificate and other business registrations",
      name: "Jasmine",
      title: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  //---------------------------------------------------------------------------------

  const [message, setMessage] = useState({
    message: "",
    showModel: false,
    success: false,
    userId: "",
  });


  const [input, setInput] = useState({ email: "", password: "", remember: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Use target to access properties safely
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    // try {
    //   setLoading(true);
    //   setError("");


    //   const outh = await loginWithEmailAndPassword(input.email, input.password);

    //   let Authe = false;
    //   if (outh) {  
    //     Authe = true;
    //   }
    //   // console.log(outh, "user Created by Krishna coming fron backend");




    //   // console.log(`outh`, outh, "outh Created by Krishna coming fron backend");
    //   const payload = {
    //     email: input.email,
    //     password: input.password,
    //   };

    //   const response = await fetch('/api/Login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(payload),
    //   });

    //   const user = await response.json();
    //   // console.log(user, "user Created by Krishna coming fron backend");

    //   // console.log(user.user, "user Created bt Krishna")



    //   /**
    //    * 
    //    *createdAt: "2025-04-07T06:20:11.000Z"
    //     email:"krishna.vish9329@gmail.com"
    //     firstName: "Krishna"
    //     id  :1
    //     lastName:"Vishwakarma"
    //     phoneNumber:null
    //     photoURL:null
    //     userId:"uAyN6EdmLUgersTuGp5aWQI3NSs1"
    //     whatsappNumber:"1"
    //    */

    //   if (user.user.email && user.user.userId) {
    //     // Safely access user properties with optional chaining
    //     const displayName = (user.user.firstName + user.user.lastName) || '';
    //     const email = user.user.email || '';
    //     const phoneNumber = user.user.whatsappNumber || '';

    //     // console.log(await user.getIdToken(), "created by Krishna") // kk
    //     // Store authentication info in Redux
    //     dispatch(
    //       setAuth({
    //         isAuthenticated: true,
    //         userInfo: {
    //           username: displayName || email.split('@')[0],
    //           email: email,
    //           Fname: displayName ? displayName.split(' ')[0] : '',
    //           Lname: displayName ? displayName.split(' ').slice(1).join(' ') : '',
    //           contact: phoneNumber || "N/A",
    //           role: "user", // Default role
    //           picture: user.photoURL || "N/A",
    //         },
    //         // Token: await user.getIdToken(),  //Authe
    //         Token: Authe,
    //       })
    //     );

    //     // Store authentication in localStorage if remember is checked
    //     if (input.remember) {
    //       // localStorage.setItem('authToken', await user.getIdToken());
    //       localStorage.setItem('authToken',Authe);
    //     }

    //     // Redirect to dashboard
    //     router.push("/dashboard");
    //   } else {
    //     setError("Login failed. Please check your credentials.");
    //   }
    // } catch (err) {
    //   console.error("Login error:", err);
    //   // Firebase error messages - handle them safely
    //   let errorMessage = "An error occurred during login. Please try again.";

    //   // Type guard to check if err has a code property
    //   if (err && typeof err === 'object' && 'code' in err) {
    //     const errorCode = err.code;
    //     if (errorCode === 'auth/invalid-email') errorMessage = "Invalid email address format.";
    //     if (errorCode === 'auth/user-disabled') errorMessage = "This account has been disabled.";
    //     if (errorCode === 'auth/user-not-found') errorMessage = "Email not found. Please check your email or register.";
    //     if (errorCode === 'auth/wrong-password') errorMessage = "Incorrect password. Please try again.";
    //     if (errorCode === 'auth/too-many-requests') errorMessage = "Too many unsuccessful login attempts. Please try again later.";
    //   }

    //   setError(errorMessage);
    // } finally {
    //   setLoading(false);
    // }
  };


  // S
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const user = await signInWithGoogle();

      if (user && user.uid) {
        // Safely access user properties with optional chaining
        const displayName = user.displayName || '';
        const email = user.email || '';
        const phoneNumber = user.phoneNumber || '';



        // Store authentication info in Redux
        dispatch(
          setAuth({
            isAuthenticated: true,
            userInfo: {
              username: displayName || email.split('@')[0],
              email: email,
              Fname: displayName ? displayName.split(' ')[0] : '', // Split first name
              Lname: displayName ? displayName.split(' ').slice(1).join(' ') : '',
              contact: phoneNumber || "N/A",
              role: "user", // Default role
              picture: user.photoURL || "N/A",
            },
            Token: await user.getIdToken(),
          })
        );

        // Store token in localStorage for persistence
        localStorage.setItem('authToken', await user.getIdToken());


        //--------------------------------------

        // const newOtp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
        // console.log(newOtp + "generated OPT")
        // setGeneratedOtp(newOtp);
        // console.log(generatedOtp + "OTP")

        // setShowOtpModal(true);
        // await sendOtpEmail(email, newOtp);
        //   //---------------------------------------
        // Redirect to dashboard
        router.push("/dashboard");
      } else {
        setError("Google login failed. Please try again.");
      }
    } catch (err) {
      console.error("Google login error:", err);
      // Handle specific Google sign-in errors safely
      let errorMessage = "An error occurred during Google login. Please try again.";

      // Type guard to check if err has a code property
      if (err && typeof err === 'object' && 'code' in err) {
        const errorCode = err.code;
        if (errorCode === 'auth/popup-closed-by-user') errorMessage = "Login popup was closed before completion.";
        if (errorCode === 'auth/cancelled-popup-request') errorMessage = "The login operation was cancelled.";
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-24 lg:stp-30 sbp-30 flex justify-start items-center gap-8 xl:gap-20 xxl:gap-32 max-xl:flex-col">
      <div className="relative lg:max-h-screen lg:min-h-screen overflow-hidden max-xl:order-2">
        <Image src={login_bg_img} alt="image" className="object-cover h-full" />

        <div className="absolute bottom-10 xl:bottom-20 left-4 xl:left-16 xxl:left-24 xxxl:left-32 testimonial-bg p-4 sm:p-8 max-xl:container lg:w-[550px] rounded-xl overflow-hidden">
          <div className="relative h-full flex flex-col justify-between">
            {/* Display current testimonial */}
            <p className="max-h-20 overflow-y-auto ">
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

            {/* Navigation buttons */}
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
        <h2 className="display-4 py-5 dark:text-white">Login</h2>
        <p className="text-bodyText pb-6 lg:pb-10 dark:text-white">
          Grow with expert consulting support.
        </p>
        <button
          onClick={handleGoogleLogin}
          className="flex justify-center items-center gap-2 font-semibold bg-softBg py-4 rounded-xl w-full"
          disabled={loading}
        >
          <span>
            <Image src={google} alt="image" />
          </span>
          Sign up with Google
        </button>

        <div className="py-6 lg:py-8 text-center">
          <p className="relative after:absolute after:top-3 after:left-0 after:h-px after:bg-strokeColor after:w-[40%] before:absolute before:top-3 before:right-0 before:h-px before:bg-strokeColor max-md:before:content-none max-md:after:content-none before:w-[40%] dark:text-white">
            Or Sign In With
          </p>
        </div>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 py-4 px-8 border flex justify-start items-center gap-2 bg-white">
            <span className="text-xl text-bodyText">
              <Envelope weight="fill" />
            </span>
            <input
              type="email"
              placeholder="Type email address"
              name="email"
              className="placeholder:text-bodyText w-full outline-none"
              onChange={handleInputChange}
              value={input.email}
              required
            />
          </div>
          <div className="col-span-2 py-4 px-8 border flex justify-start items-center gap-2 bg-white">
            <span className="text-xl text-bodyText">
              <Lock weight="fill" />
            </span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="placeholder:text-bodyText w-full outline-none"
              onChange={handleInputChange}
              value={input.password}
              required
            />
          </div>

          <div className="col-span-2 table-checkbox flex justify-between items-center">
            <label className="flex justify-start items-center gap-2">
              <input
                type="checkbox"
                className=""
                name="remember"
                onChange={handleInputChange}
                checked={input.remember}
              />
              <span className="dark:text-white">Remember me</span>
            </label>
            <Link href="/Forget-Password" className="font-medium">
              Forget Password?
            </Link>
          </div>
          <div className="col-span-2">
            <button
              className="py-4 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500 w-full"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className='text-center relative my-5'>
              <span className='relative z-10 bg-white px-2 dark:bg-black dark:text-white'>Don't have an account? Register here</span>
              <div className='absolute top-1/2 left-0 w-full border-t border-gray-300 transform -translate-y-1/2'></div>
            </div>

            <Link href="/Register"
              className="py-4 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500 w-full"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      {/* {showOtpModal && (
        <div className="fixed inset-0 bg-white/50 bg-opacity-50 z-10 flex justify-center items-center animate-fade-in">
        <div className="bg-softBg1 p-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-95 hover:scale-100">
          <p className="text-lg font-semibold mb-4">Send OTP on you Email</p>
          {/* {message.userId && (
            <p className="text-lg font-semibold mb-4">
              Your User Id is: {message.userId}
            </p>
          )} *}
          <input type="text"
          className="text-lg font-semibold mb-4"
          onChange={(e)=>(setOtp(e.target.value))}
          placeholder="XXXXXX"
           />
          <div className="flex justify-between items-center gap-4">

              <button
                className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transition-colors duration-300"
                onClick={chackOpt}
              >
                Submit
              </button>

              <button
              className="border border-gray-300 py-2 px-4 text-gray-700 rounded hover:bg-gray-100 transition-colors duration-300"
              onClick={() =>{

                setShowOtpModal(false);

                // setMessage({
                //   message: "",
                //   showModel: false,
                //   success: false,
                //   userId: "",
                // });
              }
              }
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
    } */}
    </section>
  );
};

export default Login;
