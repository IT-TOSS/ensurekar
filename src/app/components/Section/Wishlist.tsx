"use client";
import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

import product_cart_img from "../../images/product_cart_img.png";
import blog_img1 from "../../images/blog_img1.png";
import {
  Heart,
  Plus,
  PlusSquare,
  ShoppingBag,
  ShoppingCart,
  Trash,
  Trash2Icon,
} from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Money,
  PersonSimpleRun,
  SignIn,
} from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  addToWishlist,
  emptyCart,
  emptyWishlist,
  removeFromWishlist,
} from "@/store/store";
import { IRootState } from "@/store";
import { useRouter } from "next/navigation";
import { Item } from "../../../../types/Items-Types";


const Wishlist = () => {
  const dispatch = useDispatch();
  const WishItems =
    useSelector((state: IRootState) => state.themeConfig.wishlist) || [];
  const route = useRouter();
  const itemsData = [
    {
      id: "private-limited-company-registration",
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
  const handleAddToWishlist = (item: Item) => {
    dispatch(addToWishlist(item));
  };
  const handleCheckout = (item: Item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
    route.push("/cart");
  };
  const handleRemoveWishlist = (item: Item) => {
    dispatch(removeFromWishlist(item.id));
  };
  const handleAddToCart = (item: Item) => {
    dispatch(removeFromWishlist(item.id));

    dispatch(addToCart(item));
  };
  const handleClearWishlist = () => {
    dispatch(emptyWishlist());
  };
  const itemref = React.useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (itemref.current) {
      itemref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const gst = 12;
  const subtotal = WishItems.reduce((acc, item) => acc + item.price, 0);

  const ProceedToCart = () => {
    WishItems.map((item) => {
      dispatch(addToCart(item));
      dispatch(removeFromWishlist(item.id));
    });
    route.push("/cart");
  };
  return (
    <>
      <div className="bg-p1 stp-15 sbp-15">
        <div className="max-xxl:container xxl:ml-[calc((100%-1296px)/2)] flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col">
          <div className="flex flex-col justify-center w-56 items-start ml-5  lg:w-1/2 pb-8">
            <p className="text-lg font-medium underline wow animate__animated animate__fadeInUp">
              Experience Ensurekar
            </p>

            <h1 className="display-4 pb-6 pt-4 wow animate__animated animate__fadeInDown">
              My Wishlist <Heart size={60} className="text-2xl inline" />
            </h1>

            <p className="pb-8 wow animate__animated animate__fadeInUp">
              Total Items ({WishItems.length})
            </p>

            <Link
              href="/cart"
              className="flex justify-center items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border font-semibold border-mainTextColor text-mainTextColor group"
            >
              <ShoppingCart /> <p>Visit cart</p>
              <span className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl">
                <ArrowUpRight />
              </span>
            </Link>
          </div>

          <div className=" flex  flex-col justify-center mx-5 items-center lg:py-5">
            {WishItems.length > 0 && (
              
              <button
                className="bg-red-400 gap-x-2 flex mx-auto rounded mb-5 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white duration-500"
                onClick={handleClearWishlist}
              >
                <Trash size={24} />
                <p>Empty Wishlist</p>
              </button>
            )}

            <div className="overflow-y-auto max-h-[400px] w-full mx-4">
              <table className="lg:min-w-[774px] sm:w-full whitespace-nowrap">
                <thead>
                  <tr className="w-full border-b">
                    <th className="text-start pb-4">Product</th>
                    <th className="text-start pb-4 pl-2">Name</th>
                    <th className="text-start pb-4">Price</th>
                    <th className="text-center pb-4">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {WishItems.map((item, index) => (
                    <tr key={index} className="w-full border-b">
                      <td className="py-3">
                        <Image
                          src={item.image}
                          alt="product"
                          className="w-20 h-20 border"
                        />
                      </td>
                      <td className="text-start whitespace-normal pl-2">
                        {item.name}
                      </td>
                      <td className="text-start">₹ {item.price}</td>
                      <td>
                        <div className="flex ml-3 flex-col justify-center items-center my-2 space-y-2">
                          <button
                            className="bg-p1 flex border border-white p-3 gap-x-2 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500 items-center"
                            onClick={() => handleAddToCart(item)}
                          >
                            <SignIn size={24} /> <p>Add to Cart</p>
                          </button>
                          <div className="flex justify-between items-center w-20 space-x-2">
                            <button
                              onClick={() => handleCheckout(item)}
                              title="Checkout"
                            >
                              <ShoppingBag />
                            </button>
                            <button
                              className="hover:text-red-700 duration-500 items-center"
                              onClick={() => handleRemoveWishlist(item)}
                              title="Delete"
                            >
                              <Trash />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {WishItems.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center my-5">
                        <h2 className="heading-3 my-5">No Items in Wishlist</h2>
                        <div
                          className="bg-p1 flex border border-white py-2 sm:py-3 gap-2 sm:gap-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor mb-4 hover:bg-s2 max-w-40 hover:text-mainTextColor duration-500 items-center cursor-pointer justify-center mx-auto"
                          onClick={handleScroll}
                        >
                          <ShoppingBag /> <p>Shop Now</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {WishItems.length > 0 && (
            <button
              className="flex justify-center group items-center gap-2 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border mt-5 font-semibold border-mainTextColor text-mainTextColor"
              onClick={ProceedToCart}
              
            >
              <Money size={32} />
              Checkout All
              <ArrowRight
              size={32}
              className="group-hover:translate-x-2 transition-transform duration-500"
              />
            </button>
               )}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-center gap-5">
        {WishItems.map((item, index) => (
          <div className="m-5 max-w-[400px] shadow-lg " key={index}>
            <div color="blue-gray">
              <Image
                src={item.image}
                alt="ui/ux review check"
                className="w-full h-44"
              />
            </div>

            <h4 className="heading-4 my-3 pl-2">{item.name}</h4>

            <div className="p-2">
              <p className="text-bodyText font-bold text-center py-3">
                price: {item.price}
              </p>
            </div>
            <div className="gap-2 flex flex-wrap items-center justify-center">
              <button
                className="bg-p1 flex border border-p1 py-2 sm:py-3 gap-2 sm:gap-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor mb-4 hover:bg-s2 hover:text-mainTextColor duration-500  items-center"
                onClick={() => handleAddToCart(item)}
              >
                <SignIn size={24} /> <p>Add to Cart</p>
              </button>
              <button
                className="bg-p1 flex border border-p1 py-2 sm:py-3 gap-2 sm:gap-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor mb-4 hover:bg-s2 hover:text-mainTextColor duration-500  items-center"
                onClick={() => handleCheckout(item)}
              >
                <ShoppingBag /> <p>Checkout</p>
              </button>
              <button
                className="bg-p1 flex justify-center mx-5 border border-p1 py-2 sm:py-3 gap-2 sm:gap-3 px-4 sm:px-6 font-medium text-white w-full hover:border-mainTextColor mb-4 hover:bg-red-700 hover:text-white duration-500  items-center"
                onClick={() => handleRemoveWishlist(item)}
              >
                <Trash /> <p>Remove Wish</p>
              </button>
            </div>
          </div>
        ))}
        {WishItems.length === 0 && (
          <div className="flex justify-center items-center flex-col my-14 gap-5">
            <h2 className="heading-3">No Items in Wishlist</h2>
            {/* <Link href="/wishlist"> 
            <div
              className="bg-p1 flex border border-p1 py-2 sm:py-3 gap-2 sm:gap-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor mb-4 hover:bg-s2 hover:text-mainTextColor duration-500 min-w-48 items-center cursor-pointer"
              onClick={handleScroll}
            >
              <ShoppingBag /> <p>Shop Now</p>
            </div>
            {/* </Link> */}
      {/* <Link href="/cart">
                <div className="bg-p1 flex border border-p1 py-2 sm:py-3 gap-2 sm:gap-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor mb-4 hover:bg-s2 hover:text-mainTextColor duration-500 min-w-48 items-center">
                  <ShoppingCart /> <p>Visit Cart</p>
                </div>
              </Link> 
          </div>
        )}
      </div> */}
      <section className="container grid grid-cols-12 gap-6 ">
        {/* <div className="col-span-12 lg:col-span-12 flex   p-8 flex-col gap-6 lg:gap-10">
          {WishItems.map((item, index) => (
            <div
              className="flex justify-between  px-14 p-5 flex-col shadow-sm md:flex-row w-full items-center"
              key={index}
            >
              <div>
                <h2 className="heading-3 pt-5 pb-6">{item.name}</h2>
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt="image"
                    className="hover:scale-110  duration-500 max-w-72"
                  />
                </div>
                <p className="pt-6 pb-6 text-bodyText">price: {item.price}</p>
              </div>
              <div className="gap-5">
                <button
                  className="bg-p1 flex border border-p1 py-2 sm:py-3 gap-2 sm:gap-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor mb-4 hover:bg-s2 hover:text-mainTextColor duration-500 min-w-48 items-center"
                  onClick={() => handleAddToCart(item)}
                >
                  <SignIn weight="duotone" size={30} /> <p>Add to Cart</p>
                </button>
                <button
                  className="bg-p1 flex border border-p1 py-2 sm:py-3 gap-2 sm:gap-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor mb-4 hover:bg-s2 hover:text-mainTextColor duration-500 min-w-48 items-center"
                  onClick={() => handleCheckout(item)}
                >
                  <ShoppingBag /> <p>Checkout</p>
                </button>
                <button
                  className="bg-p1 flex border border-p1 py-2 sm:py-3 gap-2 sm:gap-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor mb-4 hover:bg-s2 hover:text-mainTextColor duration-500 min-w-48 items-center"
                  onClick={() => handleRemoveWishlist(item)}
                >
                  <Trash /> <p>Remove Wish</p>
                </button>
              </div>
            </div>
          ))}
         
        </div> */}

        {/* <div className="col-span-12 lg:col-span-4">
        <div className="sticky top-32 flex flex-col gap-6 lg:gap-10">
          <div className="border p-6 sm:p-8">
            <h4 className="heading-4 pb-5">Search</h4>
            <div className="flex justify-between items-center">
              <input
                type="text"
                className="border px-6 py-3 outline-none placeholder:text-bodyText text-bodyText w-full"
                placeholder="Search here..."
              />
              <button className="block text-2xl text-white bg-p1 p-3 border border-p1 hover:bg-s2 hover:text-mainTextColor duration-500 hover:border-mainTextColor !leading-[0]">
                <i className="ph ph-magnifying-glass"></i>
              </button>
            </div>
          </div>

          <div className="border p-6 sm:p-8">
            <h4 className="heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1">
              Categories
            </h4>
            <ul className="flex flex-col gap-4 justify-start items-start">
              <li className="w-full border-b">
                <Link
                  href=""
                  className="flex justify-between items-center pb-4 border-b last:border-transparent w-full hover:text-s2 duration-300"
                >
                  <span>Accounting</span>
                  <span>(4)</span>
                </Link>
              </li>
              <li className="w-full border-b">
                <Link
                  href=""
                  className="flex justify-between items-center pb-4 border-b last:border-transparent w-full hover:text-s2 duration-300"
                >
                  <span>Finance</span>
                  <span>(3)</span>
                </Link>
              </li>
              <li className="w-full border-b">
                <Link
                  href=""
                  className="flex justify-between items-center pb-4 border-b last:border-transparent w-full hover:text-s2 duration-300"
                >
                  <span>Invest</span>
                  <span>(6)</span>
                </Link>
              </li>
              <li className="w-full border-b">
                <Link
                  href=""
                  className="flex justify-between items-center pb-4 border-b last:border-transparent w-full hover:text-s2 duration-300"
                >
                  <span>Payroll Processing</span>
                  <span>(4)</span>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href=""
                  className="flex justify-between items-center pb-4 border-b last:border-transparent w-full hover:text-s2 duration-300"
                >
                  <span>Taxation</span>
                  <span>(6)</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="border p-6 sm:p-8">
            <h4 className="heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1">
              Recent Post
            </h4>
            <div className="flex justify-start items-start flex-col gap-5">
              <div className="flex justify-center items-center gap-4">
                <div className="overflow-hidden self-stretch flex justify-center items-center">
                  <img
                    src="./assets/images/recent_post_img1.png"
                    alt="image"
                    className="overflow-hidden object-cover w-[100px]"
                  />
                </div>
                <div className="w-full">
                  <p className="pb-2">December 15, 2024</p>
                  <Link
                    href=""
                    className="font-bold hover:text-s3 duration-300"
                  >
                    Payroll Processing Essentials
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="overflow-hidden self-stretch flex justify-center items-center">
                  <img
                    src="./assets/images/recent_post_img4.png"
                    alt="image"
                    className="overflow-hidden object-cover w-[100px]"
                  />
                </div>
                <div className="w-full">
                  <p className="pb-2">December 15, 2024</p>
                  <Link
                    href=""
                    className="font-bold hover:text-s3 duration-300"
                  >
                    Financial Management Strategies
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="overflow-hidden self-stretch flex justify-center items-center">
                  <img
                    src="./assets/images/recent_post_img2.png"
                    alt="image"
                    className="overflow-hidden object-cover w-[100px]"
                  />
                </div>
                <div className="w-full">
                  <p className="pb-2">December 15, 2024</p>
                  <Link
                    href=""
                    className="font-bold hover:text-s3 duration-300"
                  >
                    Industry News and Updates
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <div className="overflow-hidden self-stretch flex justify-center items-center">
                  <img
                    src="./assets/images/recent_post_img3.png"
                    alt="image"
                    className="overflow-hidden object-cover w-[100px]"
                  />
                </div>
                <div className="w-full">
                  <p className="pb-2">December 15, 2024</p>
                  <Link
                    href=""
                    className="font-bold hover:text-s3 duration-300"
                  >
                    Innovations in Accounting Software
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border p-6 sm:p-8">
            <h4 className="heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1">
              Recent Post
            </h4>
            <div className="flex justify-start items-start flex-wrap gap-2">
              <Link
                href=""
                className="flex justify-center items-center border text-bodyText px-4 py-2 hover:text-mainTextColor hover:bg-s2 hover:border-mainTextColor duration-300"
              >
                Payroll
              </Link>
              <Link
                href=""
                className="flex justify-center items-center border text-bodyText px-4 py-2 hover:text-mainTextColor hover:bg-s2 hover:border-mainTextColor duration-300"
              >
                Software
              </Link>
              <Link
                href=""
                className="flex justify-center items-center border text-bodyText px-4 py-2 hover:text-mainTextColor hover:bg-s2 hover:border-mainTextColor duration-300"
              >
                Accounting
              </Link>
              <Link
                href=""
                className="flex justify-center items-center border text-bodyText px-4 py-2 hover:text-mainTextColor hover:bg-s2 hover:border-mainTextColor duration-300"
              >
                Solutions
              </Link>
              <Link
                href=""
                className="flex justify-center items-center border text-bodyText px-4 py-2 hover:text-mainTextColor hover:bg-s2 hover:border-mainTextColor duration-300"
              >
                Planning
              </Link>
              <Link
                href=""
                className="flex justify-center items-center border text-bodyText px-4 py-2 hover:text-mainTextColor hover:bg-s2 hover:border-mainTextColor duration-300"
              >
                Finance
              </Link>
              <Link
                href=""
                className="flex justify-center items-center border text-bodyText px-4 py-2 hover:text-mainTextColor hover:bg-s2 hover:border-mainTextColor duration-300"
              >
                Tax
              </Link>
            </div>
          </div>
        </div>
      </div> */}
        {/* <section
          className="col-span-12 container overflow-hidden"
          ref={itemref}
        >
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
                  <th className="text-start pb-4">Add to Wishlist</th>
                </tr>
              </thead>

              <tbody>
                {itemsData.map((item, index) => (
                  <tr key={index} className="w-full border-b ">
                    <td className="py-3 max-w-2">
                      <Image src={item.image} alt="product" />
                    </td>
                    <td className="text-start">{item.name}</td>
                    <td className="text-start">₹ {item.price}</td>
                    {/* <td className="text-start">
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
                        className="bg-p1 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500 flex gap-x-3"
                        onClick={() => {
                          handleAddToWishlist(item);
                        }}
                      >
                        <Heart />
                        <p> Add to Wishlist</p>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section> */}
      </section>
    </>
  );
};

export default Wishlist;
