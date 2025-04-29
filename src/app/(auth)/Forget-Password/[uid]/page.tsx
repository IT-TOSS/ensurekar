"use client";

import React, { useState } from "react";
import Image from "next/image";
import login_bg_img from "../../../images/login_bg_img.png";
import { ArrowLeft, ArrowRight, Envelope, Lock, Password } from "phosphor-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";


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
    const [Success, setSuccess] = useState("");

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
    const [input, setInput] = useState({ password: "" , confirmPassword: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;

        setInput({
            ...input,
            [name]: value,
        });
    };

    const handleLogin = async () => {
        try {
            setLoading(true);
            setError("");
            setSuccess("");
            if (!input.password && !input.confirmPassword) {
                setError("Please enter your password address.");
                return;
            }

            if (input.password !== input.confirmPassword) {
                setError("Password and Confirm Password should be same.");
                return;
            }

            const payload = {
                password: input.password,
                confirmPassword: input.confirmPassword
            };


            const response = await fetch('/api/Login', { // change the Api
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const user = await response.json();
            console.log(user, "user Created by Krishna coming fron backend");

            console.log(user.user, "user Created bt Krishna")
            setError("Forget-Password failed. Please check your credentials.");
            setSuccess("Reset link sent to your email.");
            alert(`Reset link sent to your email: ${input.password}`);




            //   router.push("/Login");

        } catch (err) {
            console.error("Login error:", err);
            let errorMessage = "An error occurred during login. Please try again.";
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
                <h2 className="display-4 py-5 dark:text-white">Forget-Password</h2>
                <p className="text-bodyText pb-6 lg:pb-10 dark:text-white">
                    Grow with expert consulting support.
                </p>
                {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
                {Success && <div className="text-green-500 mb-4 text-center">{Success}</div>}

                <div className="grid grid-cols-2 gap-6">
                    <div className="sm:col-span-1 col-span-2 py-4 px-8 border flex justify-start items-center gap-2 bg-white">
                        <span className="text-xl text-bodyText">
                            <Lock weight="fill" />
                        </span>
                        <input
                            type="password"
                            placeholder="Type Password"
                            name="password"
                            className="placeholder:text-bodyText w-full outline-none"
                            onChange={handleInputChange}
                            value={input.password}
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
                            onChange={handleInputChange}
                            value={input.confirmPassword}
                            required
                        />
                    </div>


                    <div className="col-span-2">
                        <button
                            className="py-4 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500 w-full"
                            onClick={handleLogin}
                            disabled={loading}
                        >
                            {loading ? "Forget-Password..." : "Forget-Password"}
                        </button>
                        <div className='text-center relative my-5'>
                            <span className='relative z-10 bg-white px-2 dark:bg-black dark:text-white'>Don't have an account? Register here</span>
                            <div className='absolute top-1/2 left-0 w-full border-t border-gray-300 transform -translate-y-1/2'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
