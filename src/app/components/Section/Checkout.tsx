"use client";

import React, { useEffect, useState } from "react";

import { PuzzlePiece } from "phosphor-react";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { StaticImageData } from "next/image";
import { PiCalendarSlash } from "react-icons/pi";
import { PlaceOrders } from "@/api/SEOSetup/PlaceOrders";
import { details } from "framer-motion/client";
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

  const handlePlaceOrder = () => {
    const details = {
      email: userInfo.email,
      address: UserInfo.address,
    };
    PlaceOrders(itemsData, details)
      .then((data) => {
        console.log(data);
        console.log("Order Placed");
      })
      .catch((err) => {
        console.log(err);
      });
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
      {/* comment coupan inputs */}

      {/* <div className="col-span-12 border flex justify-between items-center text-bodyText px-6 py-8">
        <p className="flex justify-start items-center gap-2">
          <PuzzlePiece size={24} /> Have a coupon?
        </p>
        <button className="hover:text-s2 duration-500">Click here</button>
      </div>
      <div className="col-span-12 w-full">
        <input
          type="text"
          className="outline-none placeholder:text-bodyText border px-6 py-8 text-bodyText w-full"
          placeholder="Please enter a coupon code."
        />
      </div> */}

      {/* // billing details form comment  */}
      {/* <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-6 pt-4">
        <h4 className="heading-4 col-span-2">Billings Details</h4>
        <div className="col-span-2 sm:col-span-1">
          <p className="pb-2">
            First Name <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
            placeholder="First Name"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <p className="pb-2">
            Last Name <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
            placeholder="Last Name"
          />
        </div>
        <div className="col-span-2">
          <p className="pb-2">Company Name (Optional)</p>
          <input
            type="text"
            className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
            placeholder="Company Name"
          />
        </div>
        <div className="col-span-2 relative">
          <p className="pb-2">
            Country / Region <span className="text-red-600">*</span>
          </p>
          <p className="border py-5 px-6 text-bodyText w-full countryDropDown cursor-pointer flex justify-between items-center">
            United States (US)
            <i className="ph-fill ph-caret-down"></i>
          </p>

          <ul className="absolute top-[90px] left-0 bg-s2 py-4 w-full modalInActive duration-500 countryModal">
            <li className="px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer modalItem">
              Country 1
            </li>
            <li className="px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer modalItem">
              Country 2
            </li>
            <li className="px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer modalItem">
              Country 3
            </li>
            <li className="px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer modalItem">
              Country 4
            </li>
            <li className="px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer modalItem">
              Country 5
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="pb-2">
            Street Address <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
            placeholder="Address line 1"
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
            placeholder="Address line 2"
          />
        </div>
        <div className="col-span-2">
          <p className="pb-2">
            Town / City <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
            placeholder="New York"
          />
        </div>
        <div className="col-span-2 relative">
          <p className="pb-2">
            State <span className="text-red-600">*</span>
          </p>
          <p className="border py-5 px-6 text-bodyText w-full stateDropDown cursor-pointer flex justify-between items-center">
            New York
            <i className="ph-fill ph-caret-down"></i>
          </p>

          <ul className="absolute top-[90px] left-0 bg-s2 py-4 w-full modalInActive duration-500 stateModal">
            <li className="px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer modalItem">
              State 1
            </li>
            <li className="px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer modalItem">
              State 2
            </li>
            <li className="px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer modalItem">
              State 3
            </li>
            <li className="px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer modalItem">
              State 4
            </li>
            <li className="px-6 w-full py-1 text-mainTextColor hover:translate-x-2 duration-300 cursor-pointer modalItem">
              State 5
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="pb-2">Postcode / Zip (optional)</p>
          <input
            type="text"
            className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
            placeholder="1000"
          />
        </div>
        <div className="col-span-2">
          <p className="pb-2">
            Phone <span className="text-red-600">*</span>
          </p>
          <input
            type="number"
            className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
            placeholder="Pnone number"
          />
        </div>
        <div className="col-span-2">
          <p className="pb-2">
            Email Address <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
            placeholder="State"
          />
        </div>

        <h4 className="heading-4">Additional Information's</h4>
        <div className="col-span-2">
          <p className="pb-2">Order notes (optional)</p>
          <input
            type="text"
            className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
            placeholder="Notes about your order, e.g. special notes for delivery."
          />
        </div>
      </div> */}

      {/* // updated billing details form */}

      <div className="col-span-12 lg:col-span-6">
        <div className="sticky top-32">
          <h4 className="heading-4 pb-6 lg:pb-8 pt-4">Billing Details</h4>

          {/* First Name */}
          {/* <div className="col-span-2">
          <p className="pb-2">
            First Name <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="firstName"
            value={UserInfo.firstName} 
            readOnly 
            className="outline-none border py-5 px-6 placeholder:text-bodyText w-full"
            placeholder="First Name"
          />
        </div> */}
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
          {/* <div className="shadow2 flex justify-between items-center gap-1 p-6 font-medium w-full">
            <div className="border w-full">
              <p className="py-3 px-2 sm:px-6 border-b">Product</p>
              <div className="overflow-auto max-h-72">
                {itemsData.map((item, index) => {
                  return (
                    <p
                      className="py-3 px-2 sm:px-6 border-b overflow-auto text-bodyText text-nowrap max-w-72"
                      key={index}
                      style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                    >
                      {item.name} x {item.quantity}
                    </p>
                  );
                })}
              </div>
              <p className="py-3 px-2 sm:px-6 border-b text-bodyText">
                Subtotal
              </p>
              <p className="py-3 px-2 sm:px-6 font-semibold">Total</p>
            </div>
            <div className="border sm:w-full">
              <p className="py-3 px-2 sm:px-6 border-b">Subtotal</p>
              <div className="overflow-auto max-h-72">
                {itemsData.map((item, index) => {
                  return (
                    <p
                      className="py-3 px-2 sm:px-6 border-b text-bodyText"
                      key={index}
                    >
                      ₹ {item.subtotal}
                    </p>
                  );
                })}
              </div>
              <p className="py-3 px-2 sm:px-6 border-b text-bodyText">
                ₹ {total}
              </p>
              <p className="py-3 px-2 sm:px-6 font-semibold">
                ₹ {grandTotal} /-
              </p>
            </div>
          </div> */}

          <div className="mt-8 bg-p1 p-6 w-full">
            <div className="text-bodyText p-6 bg-white flex justify-start items-start gap-2">
              <div className="text-2xl">
                <i className="ph ph-puzzle-piece"></i>
              </div>
              <p>
                Sorry, it seems that there are no available payment methods for
                your state. Please contact us if you require assistance or wish
                to make alternate arrangements.
              </p>
            </div>
            <p className="text-white py-6">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
            <button
              className="bg-s2 border border-mainTextColor py-2 sm:py-3 font-medium text-mainTextColor hover:border-mainTextColor hover:bg-mainTextColor hover:text-white duration-500 block text-center w-full"
              onClick={handlePlaceOrder}
            >
              Place Order
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
