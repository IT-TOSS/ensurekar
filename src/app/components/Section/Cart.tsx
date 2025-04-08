"use client";
import React, { useEffect, useState } from "react";
import product_cart_img from "../../images/product_cart_img.png";
import Image, { StaticImageData } from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Minus,
  Plus,
  Trash,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "@/store";
import {
  addToCart,
  addToWishlist,
  emptyCart,
  removeFromCart,
  updateQuantity,
} from "@/store/store";
import { useRouter } from "next/navigation";
import { PiCalendarSlash } from "react-icons/pi";
import Link from "next/link";
import StillConfused from "@/app/SVGFiles/Still-Confused";
import { ArrowArcRight } from "phosphor-react";
import { AddToCartArray } from "@/api/SEOSetup/addToCart";
import { Item } from "../../../../types/Items-Types";

const Cart = () => {
  const cartItems =
    useSelector((state: IRootState) => state.themeConfig.cart) || [];
  const WishItems =
    useSelector((state: IRootState) => state.themeConfig.wishlist) || [];
  useEffect(() => {
    setTotalItemsInWishlist(WishItems.length);
  }, [WishItems]);
  const dispatch = useDispatch();
  const route = useRouter();
  const Checkout = async () => {
    // const addCartResponce = await AddToCartArray(cartItems);
    // console.log(addCartResponce);
    route.push("/checkout");
  };

  const itemsData = [
    {
      id: "pvt-ltd-incorporation",
      name: "Private Limited Incorporation Registration",
      price: 1500,
      quantity: 2,
      subtotal: 3000,
      image: product_cart_img,
    },
    {
      id: "limited-liability-partnership-registration",
      name: "Limited Liability Partnership (LLP) Registration",
      price: 450,
      quantity: 1,
      subtotal: 450,
      image: product_cart_img,
    },
    {
      id: "one-person-company",
      name: "One Person Company Registration (OPC)",
      price: 500,
      quantity: 2,
      subtotal: 1000,
      image: product_cart_img,
    },
    {
      id: "nidhi-company-registration",
      name: "Nidhi Company Registration",
      price: 900,
      quantity: 1,
      subtotal: 900,

      image: product_cart_img,
    },
    {
      id: "sole-proprietorship-registration",
      name: "Sole Proprietorship Registration",
      price: 1000,
      quantity: 1,
      subtotal: 1000,
      image: product_cart_img,
    },
    {
      id: "partnership-registration",
      name: "Partnership Registration",
      price: 999,
      quantity: 1,
      subtotal: 999,
      image: product_cart_img,
    },
    {
      id: "digital-signature-certificate",
      name: "Digital Signature Certificate (DSC)",
      price: 890,
      quantity: 2,
      subtotal: 1780,
      image: product_cart_img,
    },
    {
      id: "gem-registration",
      name: "Government E-Marketpalce (GEM) Registration",
      price: 450,
      quantity: 1,
      subtotal: 450,
      image: product_cart_img,
    },
    {
      id: "msme-registration",
      name: "MSME/UDYAM Registration Certificate",
      price: 450,
      quantity: 1,
      subtotal: 450,
      image: product_cart_img,
    },
    {
      id: "iso-certification",
      name: "ISO Certificate",
      price: 450,
      quantity: 1,
      subtotal: 450,
      image: product_cart_img,
    },
  ];

  const handleAddToCart = (item: Item) => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item: Item) => {
    dispatch(removeFromCart(item.id));
  };
  const handleIncrement = (item: Item, value: number) => {
    if (item.quantity + value > 0) {
      dispatch(
        updateQuantity({ id: item.id, quantity: item.quantity + value })
      );
    }
  };
  const handleAddToWishlist = (item: Item) => {
    dispatch(addToWishlist(item));
    dispatch(removeFromCart(item.id));
  };
  const tax = 12;
  const total = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
  const subtotal =
    cartItems.reduce((acc, item) => acc + item.subtotal, 0) +
    (cartItems.reduce((acc, item) => acc + item.subtotal, 0) * tax) / 100;

  const [totalItemsInWishlist, setTotalItemsInWishlist] = useState(0);

  return (
    <div className=" ">
      <div className="bg-p1  sbp-15 overflow-hidden rounded">
        <div className=" mt-12 ml-5 flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col">
          <div className="flex flex-col justify-center items-start w-full lg:max-xxl:w-1/2 xxl:max-w-[550px] max-xxl:pb-8 max-xxl:overflow-hidden">
            <p className="text-lg font-medium underline wow animate__animated animate__fadeInUp">
              Experience Ensurekar
            </p>

            <h1 className="display-4 pb-6 pt-4 wow animate__animated animate__fadeInDown">
              Your Ensurekar Cart is here
            </h1>

            <p className="pb-8 wow animate__animated animate__fadeInUp"></p>

            <Link
              href="/wishlist"
              className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border font-semibold border-mainTextColor text-mainTextColor group "
            >
              <Heart /> <p>Wishlist ({totalItemsInWishlist})</p>
              <span className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl">
                <ArrowUpRight />
              </span>
            </Link>
          </div>
          <div className=" lg:max-xxl:w-1/2 flex-col self-stretch flex justify-center max-xxl:items-center lg:py-5 wow animate__animated animate__fadeInUp">
            <button
              className="bg-red-400 gap-x-2 flex mx-auto rounded mb-5 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white duration-500"
              onClick={() => {
                dispatch(emptyCart());
              }}
            >
              <Trash size={24} />
              <p>Empty Cart</p>
            </button>
            <section className=" grid grid-cols-12 ">
              <div className="bg-white shadow-xl rounded-lg  p-5 min-w-80 col-span-12 md:col-span-6 md:col-start-4">
                <div className="flex justify-between items-center pb-6 border-b text-bodyText">
                  <p>Tax</p>
                  <p>₹ {total} + 12% GST</p>
                </div>
                <div className="flex justify-between text-mainTextColor font-bold items-center  pt-6 pb-6 border-b mb-8">
                  <p>Subtotal</p>
                  <p>₹ {subtotal} /-</p>
                </div>
                <button
                  className="bg-s2 rounded group border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium  border-mainTextColor text text-mainTextColor flex gap-x-3 duration-500"
                  onClick={() => {
                    Checkout();
                  }}
                >
                  <p>Proceed To Checkout</p>{" "}
                  <ArrowRight
                    size={24}
                    className="group-hover:pl-1 duration-300"
                  />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section className="stp-15 sbp-30  gap-x-5 flex justify-center flex-wrap">
        <div className="bg-softBg1  overflow-x-auto">
          <table className=" m-4 pl-5 min-w-80 ">
            <thead className="">
              <tr className="w-full border-b">
                <th className="text-start pb-4">Product</th>
                <th className="text-start pb-4 pl-3">Name</th>
                <th className="text-start pb-4 pl-3 whitespace-nowrap">
                  Unit Price
                </th>
                <th className="text-start pb-4 pl-3 whitespace-nowrap">
                  Quantity
                </th>
                <th className="text-start pb-4 pl-3 whitespace-nowrap">
                  Subtotal
                </th>
                <th className="text-start pb-4 pl-3"></th>
                <th className="text-start pb-4 pl-3"></th>
              </tr>
            </thead>

            <tbody>
              {cartItems?.map((item, index) => (
                <tr key={index} className="w-full border-b ">
                  <td className="py-3">
                    <Image src={item.image} alt="product" />
                  </td>
                  <td className="text-start pl-3 min-w-60 ">{item.name}</td>
                  <td className="text-start whitespace-nowrap pl-3">
                    ₹ {item.price}
                  </td>
                  <td className="text-start pl-3">
                    <div className="flex justify-between items-center text-lg border border-strokeColor w-[130px] px-3">
                      <button
                        className="pr-2 remove"
                        onClick={() => {
                          handleIncrement(item, -1);
                        }}
                      >
                        <Minus size={16} />
                      </button>
                      <div className="flex justify-center items-center">
                        <p className="w-[50px] outline-none border-x pl-4 py-1 sm:py-2 count">
                          {item.quantity}
                        </p>
                      </div>
                      <button
                        className="pl-2 add"
                        onClick={() => {
                          handleIncrement(item, 1);
                        }}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="text-start pl-3">₹ {item.subtotal}</td>
                  <td className="text-start pl-3 ">
                    <button
                      className="pl-3"
                      onClick={() => {
                        handleRemoveFromCart(item);
                      }}
                    >
                      <Trash size={24} />
                    </button>
                  </td>
                  <td className="text-start px-5">
                    <button
                      className=""
                      onClick={() => {
                        handleAddToWishlist(item);
                      }}
                    >
                      <Heart size={24} />
                    </button>
                  </td>
                </tr>
              ))}
              {cartItems?.length === 0 && (
                <tr className="w-full border-b py-14 ">
                  <td className="py-3 text-center " colSpan={6} rowSpan={3}>
                    <PiCalendarSlash size={32} className="mx-auto m-5" />
                    Your Ensurekar Cart is empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-start my-10 items-center ">
          <input
            type="text"
            className="border outline-none px-2 md:px-8 py-2 sm:py-3 text-bodyText placeholder:text-bodyText "
            placeholder="Coupon Code"
          />
          <button className="bg-p1 border border-p1 py-2 sm:py-3 px-2 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500">
            Coupon Code
          </button>
        </div>
        {/* <div className="md:fle justify-between items-center flex-wrap flex-col  pt-6 gap-6 w-full max-sm:flex-col-reverse hidden">
          <div className="flex justify-start items-center ">
            <input
              type="text"
              className="border outline-none px-2 md:px-8 py-2 sm:py-3 text-bodyText placeholder:text-bodyText "
              placeholder="Coupon Code"
            />
            <button className="bg-p1 border border-p1 py-2 sm:py-3 px-2 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500">
              Coupon Code
            </button>
          </div>
          <div className="sm:w-2/3 sbp-15">
            <div className="border p-8 col-span-12 md:col-span-6 md:col-start-4">
              <div className="flex justify-between items-center pb-6 border-b text-bodyText">
                <p>Tax</p>
                <p>₹ {total} + 12% GST</p>
              </div>
              <div className="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8">
                <p>Subtotal</p>
                <p>₹ {subtotal} /-</p>
              </div>
              <button
                className="bg-p1 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500"
                onClick={() => {
                  Checkout();
                }}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div> */}
      </section>
      {/* <section className=" grid grid-cols-12 container sbp-15">
        <div className="border p-8 col-span-12 md:col-span-6 md:col-start-4">
          <div className="flex justify-between items-center pb-6 border-b text-bodyText">
            <p>Tax</p>
            <p>₹ {total} + 12% GST</p>
          </div>
          <div className="flex justify-between items-center font-medium pt-6 pb-6 border-b mb-8">
            <p>Subtotal</p>
            <p>₹ {subtotal} /-</p>
          </div>
          <button
            className="bg-p1 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500"
            onClick={() => {
              Checkout();
            }}
          >
            Proceed To Checkout
          </button>
        </div>
      </section> */}
      {/* //comment available item demo  */}

      {/* <section className="stp-30 sbp-30 container overflow-hidden">
        <h2 className=" heading-1 my-14 font-semibold">
          Available Items (DEMO)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-[774px] w-full whitespace-nowrap">
            <thead className="">
              <tr className="w-full border-b">
                <th className="text-start pb-4">Product</th>
                <th className="text-start pb-4">Name</th>
                <th className="text-start pb-4">Unit Price</th>
                <th className="text-start pb-4">Quantity</th>
                <th className="text-start pb-4">Subtotal</th>
                <th className="text-start pb-4">Add to Cart</th>
              </tr>
            </thead>

            <tbody>
              {itemsData.map((item, index) => (
                <tr key={index} className="w-full border-b ">
                  <td className="py-3">
                    <Image src={item.image} alt="product" />
                  </td>
                  <td className="text-start">{item.name}</td>
                  <td className="text-start">₹ {item.price}</td>
                  <td className="text-start">
                    <div className="flex justify-between items-center text-lg border border-strokeColor w-[130px] px-3">
                      <button className="pr-2 remove" onClick={() => { handleIncrement(item, -1)}}>
                        <Minus size={16} />
                      </button>
                      <div className="flex justify-center items-center">
                        <p className="w-[50px] outline-none border-x pl-4 py-1 sm:py-2 count">
                          {item.quantity}
                        </p>
                      </div>
                      <button className="pl-2 add" onClick={() => {handleIncrement(item, 1)}}>
                        <Plus size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="text-start">₹ {item.subtotal}</td>
                  <td className="text-start">
                    <button
                      className="bg-p1 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500"
                      onClick={() => {
                        handleAddToCart(item);
                      }}
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}
    </div>
  );
};

export default Cart;
