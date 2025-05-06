//src/app/components/Section/Cart.tsx
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
  // Force refresh cart items on component mount and when cart changes
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  const cartItems = useSelector((state: IRootState) => state.themeConfig.cart) || [];
  const WishItems = useSelector((state: IRootState) => state.themeConfig.wishlist) || [];
  
  useEffect(() => {
    // Refresh component when mounted to ensure latest cart state is displayed
    setRefreshTrigger(prev => prev + 1);
    setTotalItemsInWishlist(WishItems.length);
  }, [WishItems, cartItems]);

  const dispatch = useDispatch();
  const router = useRouter();
  
  const Checkout = async () => {
    // You can uncomment this when API integration is ready
    // const addCartResponce = await AddToCartArray(cartItems);
    // console.log(addCartResponce);
    router.push("/checkout");
  };
  const handleBuyNow = () => {
    console.log("Buy Now clicked");
    const defaultPlan = {
      id: "income-tax-plan-default",
      name: "Income Tax Return Filing - Normal",
      price: 999,
      quantity: 1,
      subtotal: 999,
      image: product_cart_img,
      
    };
    
    console.log("Adding to cart:", defaultPlan);
    dispatch(addToCart(defaultPlan));
    console.log("Navigating to cart");
    router.push("/cart");
  };
  const handleAddToCart = (item: Item) => {
    dispatch(addToCart(item));
    // Force refresh after adding to cart
    setRefreshTrigger(prev => prev + 1);
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
              <div className="bg-white shadow-xl rounded-lg p-5 min-w-80 col-span-12 md:col-span-6 md:col-start-4">
                <div className="flex justify-between items-center pb-6 border-b text-bodyText">
                  <p>Tax</p>
                  <p>₹ {total} + 12% GST</p>
                </div>
                <div className="flex justify-between text-mainTextColor font-bold items-center pt-6 pb-6 border-b mb-8">
                  <p>Subtotal</p>
                  <p>₹ {subtotal} /-</p>
                </div>
                <button
                  className="bg-s2 rounded group border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium border-mainTextColor text text-mainTextColor flex gap-x-3 duration-500"
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

      <section className="stp-15 sbp-30 gap-x-5 flex justify-center flex-wrap">
        <div className="bg-softBg1 overflow-x-auto">
          <table className="m-4 pl-5 min-w-80">
            <thead className="">
              <tr className="w-full border-b">
                {/* <th className="text-start pb-4">Product</th> */}
                <th className="text-start pb-4 pl-3">Name</th>
                <th className="text-start pb-4 pl-3 whitespace-nowrap">
                  Price
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
              {cartItems && cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <tr key={index} className="w-full border-b">
                    {/* <td className="py-3">
                      <Image src={item.image} alt="product" />
                    </td> */}
                    <td className="text-start pl-3 min-w-60">{item.name}</td>
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
                    <td className="text-start pl-3">
                      <button
                        className="pl-3"
                        onClick={() => {
                          handleRemoveFromCart(item);
                        }}
                      >
                        <Trash size={24} />
                      </button>
                    </td>
                    {/* <td className="text-start px-5">
                      <button
                        className=""
                        onClick={() => {
                          handleAddToWishlist(item);
                        }}
                      >
                        <Heart size={24} />
                      </button>
                    </td> */}
                  </tr>
                ))
              ) : (
                <tr className="w-full border-b py-14">
                  <td className="py-3 text-center" colSpan={7} rowSpan={3}>
                    <PiCalendarSlash size={32} className="mx-auto m-5" />
                    Your Ensurekar Cart is empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-start my-10 items-center">
          <input
            type="text"
            className="border outline-none px-2 md:px-8 py-2 sm:py-3 text-bodyText placeholder:text-bodyText"
            placeholder="Coupon Code"
          />
          <button className="bg-p1 border border-p1 py-2 sm:py-3 px-2 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500">
            Coupon Code
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
