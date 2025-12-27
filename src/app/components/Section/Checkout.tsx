"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { StaticImageData } from "next/image";
import { PiCalendarSlash } from "react-icons/pi";

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
  image: string | StaticImageData;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  contactNo?: number;
}

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  address?: string;
  contactNo?: string;
}

const Checkout = () => {
  const [userInfo, setUserInfo] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNo: 0,
  });

  // Add loading state for CCAvenue payment process
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const validateContactNo = (contactNo: string): boolean => {
    const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile number format
    return phoneRegex.test(contactNo);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.trim().length < 2) return 'First name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'First name should only contain letters';
        return '';
      
      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        if (value.trim().length < 2) return 'Last name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Last name should only contain letters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid Gmail address';
        return '';
      
      case 'address':
        if (!value.trim()) return 'Address is required';
        if (value.trim().length < 10) return 'Please enter a complete address';
        return '';
      
      case 'contactNo':
        if (value && !validateContactNo(value)) return 'Please enter a valid 10-digit mobile number';
        return '';
      
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // For contact number, only allow numeric input
    if (name === 'contactNo') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 10) {
        setUserInfo((prevData) => ({
          ...prevData,
          [name]: numericValue ? parseInt(numericValue) : 0,
        }));
      }
    } else {
      setUserInfo((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Real-time validation
    const error = validateField(name, name === 'contactNo' ? value.replace(/\D/g, '') : value);
    setValidationErrors(prev => ({
      ...prev,
      [name]: error
    }));

    setFormError(""); // Clear general error when user makes changes
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};
    
    errors.firstName = validateField('firstName', userInfo.firstName);
    errors.lastName = validateField('lastName', userInfo.lastName);
    errors.email = validateField('email', userInfo.email);
    errors.address = validateField('address', userInfo.address);
    
    if (userInfo.contactNo) {
      errors.contactNo = validateField('contactNo', userInfo.contactNo.toString());
    }

    setValidationErrors(errors);
    
    // Check if there are any errors
    return !Object.values(errors).some(error => error !== '');
  };

  const cartItems = useSelector((state: IRootState) => state.themeConfig.cart) || [];
  const storedUserInfo = useSelector((state: IRootState) => state.themeConfig.userInfo) || {};

  const [itemsData, setItemsData] = useState<Item[]>(cartItems.map(item => ({ ...item, id: String(item.id) })));

  const total = itemsData.reduce((acc, item) => acc + item.subtotal, 0);
  const gst = 18;
  const gstAmount = (total * gst) / 100;
  const grandTotal = total + gstAmount;

  // Function to initiate CCAvenue payment with improved error handling
  const initiateCCAvenuePay = async (orderId: string) => {
    try {
      setLoading(true);
      console.log('Initiating payment for order:', orderId);

      // Validate customer information
      if (!userInfo.email || !userInfo.address) {
        setFormError("Please provide all required customer information");
        setLoading(false);
        return;
      }

      // Prepare payment data
      const paymentData = {
        amount: grandTotal,
        orderId: orderId,
        customerInfo: {
          name: `${userInfo.firstName} ${userInfo.lastName}`.trim() || "Customer",
          email: userInfo.email,
          phone: userInfo.contactNo || "",
          address: userInfo.address
        },
        products: itemsData.map(item => ({
          name: item.name || "Product",
          quantity: item.quantity || 1,
          price: item.price || 100
        }))
      };

      console.log('Payment data:', paymentData);

      // Call your backend API to initialize CCAvenue payment
      const response = await axios.post(
        '/api/ccavenue/initiate-payment',
        paymentData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("CCAvenue initiation response:", response.data);

      if (response.data.success && response.data.encryptedData && response.data.accessCode) {
        console.log('Payment initiated successfully, redirecting to gateway...');

        // Create a div to hold the form to prevent it from being removed too quickly
        const formContainer = document.createElement('div');
        document.body.appendChild(formContainer);

        // Create the form for CCAvenue
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = response.data.formUrl || 'https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction';
        form.name = 'ccavenueForm';
        form.id = 'ccavenueForm';
        form.target = '_self'; // Force same window

        // Add CCAvenue required fields
        const encryptedField = document.createElement('input');
        encryptedField.type = 'hidden';
        encryptedField.name = 'encRequest';
        encryptedField.value = response.data.encryptedData;
        form.appendChild(encryptedField);

        const accessCodeField = document.createElement('input');
        accessCodeField.type = 'hidden';
        accessCodeField.name = 'access_code';
        accessCodeField.value = response.data.accessCode;
        form.appendChild(accessCodeField);

        formContainer.appendChild(form);

        console.log('Submitting CCAvenue form...');
        form.submit();

      } else {
        throw new Error(response.data.message || 'Failed to initialize payment gateway');
      }
    } catch (error: any) {
      console.error('Payment initiation error:', error);
      setFormError(`Payment processing failed: ${error.response?.data?.message || error.message || 'Unknown error'}`);
      setLoading(false);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      // Reset error state
      setFormError("");
      
      // Validate form
      if (!validateForm()) {
        setFormError("Please fix the validation errors below");
        return;
      }

      if (itemsData.length === 0) {
        setFormError("Your cart is empty");
        return;
      }

      setLoading(true);

      // krishna Code i have update local storage data 
      const existingData = JSON.parse(localStorage.getItem("userInfo") || "{}");

      const updatedData = {
        ...existingData, 
        Fname: userInfo.firstName,
        Lname: userInfo.lastName,
        contact: userInfo.contactNo,
        address: userInfo.address
      };
      localStorage.setItem("userInfo", JSON.stringify(updatedData)); 
      console.log("Updated userInfo:", updatedData);

      // Prepare order data
      const orderData = {
        items: itemsData,
        customerInfo: {
          name: `${userInfo.firstName} ${userInfo.lastName}`,
          email: userInfo.email,
          phone: userInfo.contactNo || "",
          address: userInfo.address,
        },
        total: grandTotal
      };

      console.log('Placing order with data:', orderData);

      // Make API call to create order
      const response = await axios.post("/api/orderid", orderData);
      console.log('Order response:', response);
      console.log('Order response12:', response.data);

      if (response.status === 200 && response.data && response.data.order_id) {
        // Format order ID with prefix and timestamp to ensure uniqueness
        const orderId = response.data.order_id;
        console.log("Successfully created order with ID:", orderId);

        // Initiate CCAvenue payment with the order ID
        console.log("orderId", orderId);
        console.log("Initiating CCAvenue payment...");
        await initiateCCAvenuePay(orderId);
      } else {
        throw new Error("Failed to create order - no order ID returned");
      }
    } catch (error: any) {
      console.error("Order placement failed:", error);
      setLoading(false);
      setFormError(`Failed to place order: ${error.response?.data?.message || error.message || "Unknown error"}`);
    }
  };

  useEffect(() => {
    if (storedUserInfo) {
      console.log(storedUserInfo, "storedUserInfo");
      const { email } = storedUserInfo;
      if (!email) return;
      const getUserData = async () => {
        try {
          const response = await axios.get("/api/userinfo-get", {
            headers: { "Content-Type": "application/json" }
          });

          const userData = response.data.data || [];
          console.log(userData, "userData");
          console.log(email, "email");
          const user = userData.find((u: { email: string }) => u.email === email);
          console.log(user, "user");

          if (!user) {
            console.log("user is not registered Yet");
            return;
          }

          const isoDate = user.DOB || '';
          let formattedDate = '';

          if (isoDate) {
            const date = new Date(isoDate);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            formattedDate = `${year}-${month}-${day}`;
          }

          const transformedData = {
            personal: {
              userName: user.userName || '',
              firstName: user.firstName || '',
              lastName: user.lastName || '',
              fatherName: user.fatherName || '',
              DOB: formattedDate,
              sex: user.sex || '',
              maritalStatus: user.maritalStatus || '',
              id: user.id || ''
            },
            company: {
              company: user.company || '',
              organisationType: user.organisationType || '',
              about: user.about || '',
              cin: user.cin || '',
              pan: user.pan || '',
              aadhar: user.aadhar || '',
              incorporationDate: user.incorporationDate || '',
              moa: user.moa || '',
              aoa: user.aoa || '',
              gst: user.gst || '',
              udyamNumber: user.udyamNumber || '',
              dpit: user.dpit || ''
            },
            identity: {
              pan: user.pan || '',
              aadhar: user.aadhar || '',
              din: user.din || '',
              addressProof: user.addressProof || '',
              addressProofName: user.addressProofName || '',
              nationality: user.nationality || ''
            },
            bank: {
              bank: user.bank || '',
              accountHolderName: user.accountHolderName || '',
              accountNumber: user.accountNumber || '',
              ifsc: user.ifsc || ''
            },
            address: {
              address: user.address || '',
              state: user.state || '',
              city: user.city || '',
              pin: user.pin || '',
              email: user.email || '',
              secondaryEmail: user.secondaryEmail || '',
              contactNo: user.contactNo || '',
              secondaryContact: user.secondaryContact || ''
            },
            document: {
              other: null,
              addharcar: null,
              InvestmentDetails: null,
              form16: null,
              BankDetails: null,
              OtherDocument: null
            }
          };

          console.log(transformedData, "transformedData");

          setUserInfo(prevState => ({
            ...prevState,
            firstName: transformedData.personal.firstName,
            lastName: transformedData.personal.lastName,
            email: transformedData.address.email,
            contactNo: Number(transformedData.address.contactNo),
            address: transformedData.address.address,
          }));

          console.log(userInfo, "inputFormData");
        } catch (error) {
          console.error("Error fetching user profile Data:", error);
        }
      };

      getUserData();
    }
  }, []);

  useEffect(() => {
    setItemsData(cartItems.map(item => ({ ...item, id: String(item.id) }))); // Ensure id is always a string
  }, [cartItems]);

  if (itemsData.length === 0) {
    return (
      <div className="stp-30 sbp-30">
        <PiCalendarSlash size={32} className="mx-auto" />
        <p className="heading-1 text-center">No items in cart</p>
      </div>
    );
  }

  return (
    <section className="container sbp-30 grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-6">
        <div className="sticky top-32">
          <h4 className="heading-4 pb-6 lg:pb-8 pt-4 dark:text-white">Billing Details</h4>

          <div className="sticky top-32 px-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3 mt-5 text-bodyText">
              <span className="font-semibold mb-1 sm:mb-0 dark:text-white">First Name<span className="text-red-600">*</span>:</span>
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  name="firstName"
                  value={userInfo.firstName}
                  onChange={handleChange}
                  required
                  className={`outline-none border py-2 px-4 placeholder:text-bodyText w-full ${
                    validationErrors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="First Name"
                />
                {validationErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.firstName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3 mt-5 text-bodyText">
              <span className="font-semibold mb-1 sm:mb-0 dark:text-white">Last Name<span className="text-red-600">*</span>:</span>
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleChange}
                  required
                  className={`outline-none border py-2 px-4 placeholder:text-bodyText w-full ${
                    validationErrors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Last Name"
                />
                {validationErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.lastName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3 mt-5 text-bodyText">
              <span className="font-semibold mb-1 sm:mb-0 dark:text-white">Email<span className="text-red-600">*</span>:</span>
              <div className="w-full sm:w-1/2">
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  required
                  className={`outline-none border py-2 px-4 placeholder:text-bodyText w-full ${
                    validationErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Email Address (Gmail only)"
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3 mt-5 text-bodyText">
              <span className="font-semibold mb-1 sm:mb-0 dark:text-white">Contact No. <span className="text-red-600">*</span>:</span>
              <div className="w-full sm:w-1/2">
                <input
                  type="tel"
                  name="contactNo"
                  value={userInfo.contactNo || ""}
                  onChange={handleChange}
                  maxLength={10}
                  className={`outline-none border py-2 px-4 placeholder:text-bodyText w-full ${
                    validationErrors.contactNo ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="10-digit mobile number"
                />
                {validationErrors.contactNo && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.contactNo}</p>
                )}
              </div>
            </div>

            <div className="my-5 pb-3 mt-5">
              <p className="pb-2 font-semibold text-bodyText dark:text-white">
                Address <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
                required
                className={`outline-none border py-5 px-6 placeholder:text-bodyText w-full ${
                  validationErrors.address ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Please enter a complete address (minimum 10 characters)"
              />
              {validationErrors.address && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.address}</p>
              )}
            </div>

            {formError && (
              <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded">
                {formError}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <div className="sticky top-32">
          <h4 className="heading-4 pb-6 lg:pb-8 pt-4 dark:text-white">Your Order</h4>

          <div className="shadow2 flex justify-between items-center gap-1 p-6 font-medium w-full">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="w-full bg-softB bg-s2 border-b">
                  <th className="py-3 px-4 text-left font-semibold">
                    Product
                  </th>
                  <th className="py-3 px-4 text-left font-semibold border-l">
                    Quantity
                  </th>
                  <th className="py-3 px-4 text-left font-semibold border-l">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {itemsData.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 text-gray-700">{item.name}</td>
                    <td className="py-3 px-4 text-gray-700 border-l">
                      {item.quantity}
                    </td>
                    <td className="py-3 px-4 text-gray-700 border-l">
                      ₹ {item.subtotal}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t text-bodyText">
                  <td className="py-3 px-4 font-semibold">
                    Total ( ₹{total.toFixed(2)} /- )
                  </td>
                  <td className="py-3 px-4 border-l">GST - {gst}%</td>
                  <td className="py-3 px-4 border-l font-semibold">
                    ₹ {grandTotal.toFixed(2)} /-
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-8 bg-p1 p-6 w-full">
            <div className="text-bodyText p-6 bg-white flex justify-start items-start gap-2">
              <div className="text-2xl">
                <i className="ph ph-credit-card"></i>
              </div>
              <p>
                Your payment will be processed securely through CCAvenue payment gateway.
                After clicking "Place Order", you will be redirected to complete your payment.
              </p>
            </div>
            <p className="text-white py-6">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
            <button
              className={`bg-s2 border border-mainTextColor py-2 sm:py-3 font-medium text-mainTextColor hover:border-mainTextColor hover:bg-mainTextColor hover:text-white duration-500 block text-center w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              onClick={handlePlaceOrder}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;