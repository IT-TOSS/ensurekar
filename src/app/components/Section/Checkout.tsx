"use client";

import React, { useEffect, useState } from "react";

import { PuzzlePiece } from "phosphor-react";
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

const Checkout = () => {
  const [UserInfo, setUserInfo] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNo: 0,
  });
  
  // Add loading state for CCAvenue payment process
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the corresponding field
    }));
  };

  const cartItems =
    useSelector((state: IRootState) => state.themeConfig.cart) || [];
  const userInfo =
    useSelector((state: IRootState) => state.themeConfig.userInfo) || [];

  const [itemsData, setItemsData] = useState(cartItems || []);
  const data = [{ name: null, price: null, quantity: null, subtotal: null }];

  const total = itemsData.reduce((acc, item) => acc + item.subtotal, 0);
  const gst = 12;
  const gstAmount = (total * gst) / 100;
  const grandTotal = total + gstAmount;

  // Function to initiate CCAvenue payment
  const initiateCCAvenuePay = async (orderId: string) => {
    try {
      setLoading(true);
      console.log('Initiating payment for order:', orderId);
      
      // Prepare payment data
      const paymentData = {
        amount: grandTotal,
        orderId: orderId,
        customerInfo: {
          name: `${UserInfo.firstName} ${UserInfo.lastName}`,
          email: UserInfo.email,
          phone: UserInfo.contactNo,
          address: UserInfo.address
        },
        products: itemsData.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price
        }))
      };
      
      // Call your backend API to initialize CCAvenue payment
      const response = await axios.post(
        // 'http://localhost:4000/api/ccavenue/initiate-payment',
        'api/ccavenue/initiate-payment',
        paymentData
      );
      
      const data = response.data;

      console.log('CCAvenue payment response:', data);
      
      if (data.success) {
        console.log('Payment initiated successfully, redirecting to gateway...');
        
        // Create and submit form to CCAvenue
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = data.formUrl;
        
        // Add CCAvenue required fields
        const encryptedField = document.createElement('input');
        encryptedField.type = 'hidden';
        encryptedField.name = 'encRequest';
        encryptedField.value = data.encryptedData;
        form.appendChild(encryptedField);
        
        const accessCodeField = document.createElement('input');
        accessCodeField.type = 'hidden';
        accessCodeField.name = 'access_code';
        accessCodeField.value = data.accessCode;
        form.appendChild(accessCodeField);
        
        // Submit form to redirect to CCAvenue
        document.body.appendChild(form);
        form.submit();
      } else {
        alert('Failed to initiate payment. Please try again.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
      alert('An error occurred while processing your payment. Please try again.');
      setLoading(false);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      setLoading(true);
  
      // Basic validation
      if (!UserInfo.address) {
        alert("Please provide your address before placing the order");
        setLoading(false);
        return;
      }
  
      // Prepare order data
      const orderData = {
        items: itemsData,
        customerInfo: {
          name: `${UserInfo.firstName} ${UserInfo.lastName}`,
          email: UserInfo.email || userInfo.email,
          phone: UserInfo.contactNo,
          address: UserInfo.address,
        },
        total: grandTotal
      };
  
      console.log('Placing order with data:', orderData);
      
      // Make the API call to place the order
      // const response = await axios.post("http://localhost:4000/api/v1/cart/", orderData);  // convert it 
      const response = await axios.post("api/Orders", orderData);
      
      console.log('Order response with data:', response);
      // Check if the response is successful
      console.log('Order response data:', response.data);
      console.log('Order response status:', response.status);
      console.log('Order response response.data.id:', response.data.id);
      
      if (response.status === 200 && response.data && response.data.id) {
        const orderId = response.data.id;
        console.log("Successfully created order with ID:", orderId);

        // Initiate CCAvenue payment with the order ID
        await initiateCCAvenuePay(orderId);
      } else {
        throw new Error("Failed to create order - no orderId returned");
      }
    } catch (error) {
      console.error("Order placement failed:", error);
      setLoading(false);
      
      if (error instanceof Error) {
        alert("Failed to place order. Please try again. Error: " + (error.message || "Unknown error"));
      } else {
        alert("Failed to place order. Please try again. Error: Unknown error");
      }
    }
  };

  useEffect(() => {
    if (userInfo) {
      const { Fname, Lname, email, contact } = userInfo;
      setUserInfo({
        firstName: Fname,
        lastName: Lname,
        email,
        contactNo: Number(contact) || 0,
        address: "",
      });
    }
  }, []);

  if (itemsData.length === 0) {
    return (
      <div className="stp-30 sbp-30">
        <PiCalendarSlash size={32} className="mx-auto" />

        <p className=" heading-1 text-center"> No items in cart</p>
      </div>
    );
  }

  return (
    <section className="container  sbp-30 grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-6">
        <div className="sticky top-32">
          <h4 className="heading-4 pb-6 lg:pb-8 pt-4">Billing Details</h4>

          <div className=" sticky top-32 px-4">
            <Items label="First Name" value={UserInfo.firstName} />

            <Items label="Last Name" value={UserInfo.lastName} />

            <Items label="Email" value={UserInfo.email} />

            <Items label="Contact No." value={UserInfo.contactNo || "N/A"} />
            <div className=" my-5 pb-3 mt-5">
              <p className="pb-2 font-semibold text-bodyText">
                Address <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                name="address"
                value={UserInfo.address} // Bind input value to state
                onChange={handleChange} // Handle change event
                required
                className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
                placeholder="Address"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <div className="sticky top-32">
          <h4 className="heading-4 pb-6 lg:pb-8 pt-4">Your Order</h4>

            <div className="shadow2 flex justify-between items-center gap-1 p-6 font-medium w-full">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
              <tr className="w-full bg-softB  bg-s2  border-b">
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
              {itemsData.map((item, index) => {
                return (
                <tr key={index} className="border-b ">
                  <td className="py-3 px-4 text-gray-700">{item.name}</td>
                  <td className="py-3 px-4 text-gray-700 border-l">
                  {item.quantity}
                  </td>
                  <td className="py-3 px-4 text-gray-700 border-l">
                  ₹ {item.subtotal}
                  </td>
                </tr>
                );
              })}
              </tbody>
              <tfoot>
              <tr className="border-t text-bodyText">
                <td className="py-3 px-4 font-semibold">
                Total ( ₹{total} /- )
                </td>
                <td className="py-3 px-4  border-l">GST - {gst}%</td>
                <td className="py-3 px-4  border-l font-semibold">
                ₹ {grandTotal} /-
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
              className={`bg-s2 border border-mainTextColor py-2 sm:py-3 font-medium text-mainTextColor hover:border-mainTextColor hover:bg-mainTextColor hover:text-white duration-500 block text-center w-full ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
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

function Items({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3 mt-5 text-bodyText">
      <span className="font-semibold  mb-1 sm:mb-0">{label}:</span>
      <span className="">{value}</span>
    </div>
  );
}

export default Checkout;
