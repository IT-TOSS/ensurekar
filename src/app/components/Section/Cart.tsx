// //src/app/components/Section/Cart.tsx
// "use client";
// import React, { useEffect, useState } from "react";
// import product_cart_img from "../../images/product_cart_img.png";
// import Image, { StaticImageData } from "next/image";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Heart,
//   Minus,
//   Plus,
//   Trash,
// } from "lucide-react";
// import { useSelector, useDispatch } from "react-redux";
// import { IRootState } from "@/store";
// import {
//   addToCart,
//   addToWishlist,
//   emptyCart,
//   removeFromCart,
//   updateQuantity,
// } from "@/store/store";
// import { useRouter } from "next/navigation";
// import { PiCalendarSlash } from "react-icons/pi";
// import Link from "next/link";
// import StillConfused from "@/app/SVGFiles/Still-Confused";
// import { ArrowArcRight } from "phosphor-react";
// import { AddToCartArray } from "@/api/SEOSetup/addToCart";
// import { Item } from "../../../../types/Items-Types";

// const Cart = () => {
//   // Force refresh cart items on component mount and when cart changes
//   const [refreshTrigger, setRefreshTrigger] = useState(0);
  
//   const cartItems = useSelector((state: IRootState) => state.themeConfig.cart) || [];
//   const WishItems = useSelector((state: IRootState) => state.themeConfig.wishlist) || [];
  
//   useEffect(() => {
//     // Refresh component when mounted to ensure latest cart state is displayed
//     setRefreshTrigger(prev => prev + 1);
//     setTotalItemsInWishlist(WishItems.length);
//   }, [WishItems, cartItems]);

//   const dispatch = useDispatch();
//   const router = useRouter();
  
//   const Checkout = async () => {
//     // You can uncomment this when API integration is ready
//     // const addCartResponce = await AddToCartArray(cartItems);
//     // console.log(addCartResponce);
//     router.push("/checkout");
//   };
//   const handleBuyNow = () => {
//     console.log("Buy Now clicked");
//     const defaultPlan = {
//       id: "income-tax-plan-default",
//       name: "Income Tax Return Filing - Normal",
//       price: 999,
//       quantity: 1,
//       subtotal: 999,
//       image: product_cart_img,
      
//     };
    
//     console.log("Adding to cart:", defaultPlan);
//     dispatch(addToCart(defaultPlan));
//     console.log("Navigating to cart");
//     router.push("/cart");
//   };
//   const handleAddToCart = (item: Item) => {
//     dispatch(addToCart(item));
//     // Force refresh after adding to cart
//     setRefreshTrigger(prev => prev + 1);
//   };
  
//   const handleRemoveFromCart = (item: Item) => {
//     dispatch(removeFromCart(item.id));
//   };
  
//   const handleIncrement = (item: Item, value: number) => {
//     if (item.quantity + value > 0) {
//       dispatch(
//         updateQuantity({ id: item.id, quantity: item.quantity + value })
//       );
//     }
//   };
  
//   const handleAddToWishlist = (item: Item) => {
//     dispatch(addToWishlist(item));
//     dispatch(removeFromCart(item.id));
//   };
  
//   const tax = 18;
//   const total = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
//   const subtotal =
//     cartItems.reduce((acc, item) => acc + item.subtotal, 0) +
//     (cartItems.reduce((acc, item) => acc + item.subtotal, 0) * tax) / 100;

//   const [totalItemsInWishlist, setTotalItemsInWishlist] = useState(0);

//   return (
//     <div className=" ">
//       <div className="bg-p1  sbp-15 overflow-hidden rounded">
//         <div className=" mt-12 ml-5 flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col">
//           <div className="flex flex-col justify-center items-start w-full lg:max-xxl:w-1/2 xxl:max-w-[550px] max-xxl:pb-8 max-xxl:overflow-hidden">
//             <p className="text-lg font-medium underline wow animate__animated animate__fadeInUp">
//               Experience Ensurekar
//             </p>

//             <h1 className="display-4 pb-6 pt-4 wow animate__animated animate__fadeInDown">
//               Your Ensurekar Cart is here
//             </h1>

//             <p className="pb-8 wow animate__animated animate__fadeInUp"></p>

//             <Link
//               href="/wishlist"
//               className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border font-semibold border-mainTextColor text-mainTextColor group "
//             >
//               <Heart /> <p>Wishlist ({totalItemsInWishlist})</p>
//               <span className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl">
//                 <ArrowUpRight />
//               </span>
//             </Link>
//           </div>
//           <div className=" lg:max-xxl:w-1/2 flex-col self-stretch flex justify-center max-xxl:items-center lg:py-5 wow animate__animated animate__fadeInUp">
//             <button
//               className="bg-red-400 gap-x-2 flex mx-auto rounded mb-5 border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium text-white duration-500"
//               onClick={() => {
//                 dispatch(emptyCart());
//               }}
//             >
//               <Trash size={24} />
//               <p>Empty Cart</p>
//             </button>
//             <section className=" grid grid-cols-12 ">
//               <div className="bg-white shadow-xl rounded-lg p-5 min-w-80 col-span-12 md:col-span-6 md:col-start-4">
//                 <div className="flex justify-between items-center pb-6 border-b text-bodyText">
//                   <p>Tax</p>
//                   <p>₹ {total} + 18% GST</p>
//                 </div>
//                 <div className="flex justify-between text-mainTextColor font-bold items-center pt-6 pb-6 border-b mb-8">
//                   <p>Subtotal</p>
//                   <p>₹ {subtotal} /-</p>
//                 </div>
//                 <button
//                   className="bg-s2 rounded group border border-p1 py-2 sm:py-3 px-4 sm:px-6 font-medium border-mainTextColor text text-mainTextColor flex gap-x-3 duration-500"
//                   onClick={() => {
//                     Checkout();
//                   }}
//                 >
//                   <p>Proceed To Checkout</p>{" "}
//                   <ArrowRight
//                     size={24}
//                     className="group-hover:pl-1 duration-300"
//                   />
//                 </button>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>

//       <section className="stp-15 sbp-30 gap-x-5 flex justify-center flex-wrap">
//         <div className="bg-softBg1 overflow-x-auto">
//           <table className="m-4 pl-5 min-w-80">
//             <thead className="">
//               <tr className="w-full border-b">
//                 {/* <th className="text-start pb-4">Product</th> */}
//                 <th className="text-start pb-4 pl-3">Name</th>
//                 <th className="text-start pb-4 pl-3 whitespace-nowrap">
//                   Price
//                 </th>
//                 <th className="text-start pb-4 pl-3 whitespace-nowrap">
//                   Quantity
//                 </th>
//                 <th className="text-start pb-4 pl-3 whitespace-nowrap">
//                   Subtotal
//                 </th>
//                 <th className="text-start pb-4 pl-3"></th>
//                 <th className="text-start pb-4 pl-3"></th>
//               </tr>
//             </thead>

//             <tbody>
//               {cartItems && cartItems.length > 0 ? (
//                 cartItems.map((item, index) => (
//                   <tr key={index} className="w-full border-b">
//                     {/* <td className="py-3">
//                       <Image src={item.image} alt="product" />
//                     </td> */}
//                     <td className="text-start pl-3 min-w-60">{item.name}</td>
//                     <td className="text-start whitespace-nowrap pl-3">
//                       ₹ {item.price}
//                     </td>
//                     <td className="text-start pl-3">
//                       <div className="flex justify-between items-center text-lg border border-strokeColor w-[130px] px-3">
//                         <button
//                           className="pr-2 remove"
//                           onClick={() => {
//                             handleIncrement(item, -1);
//                           }}
//                         >
//                           <Minus size={16} />
//                         </button>
//                         <div className="flex justify-center items-center">
//                           <p className="w-[50px] outline-none border-x pl-4 py-1 sm:py-2 count">
//                             {item.quantity}
//                           </p>
//                         </div>
//                         <button
//                           className="pl-2 add"
//                           onClick={() => {
//                             handleIncrement(item, 1);
//                           }}
//                         >
//                           <Plus size={16} />
//                         </button>
//                       </div>
//                     </td>
//                     <td className="text-start pl-3">₹ {item.subtotal}</td>
//                     <td className="text-start pl-3">
//                       <button
//                         className="pl-3"
//                         onClick={() => {
//                           handleRemoveFromCart(item);
//                         }}
//                       >
//                         <Trash size={24} />
//                       </button>
//                     </td>
//                     {/* <td className="text-start px-5">
//                       <button
//                         className=""
//                         onClick={() => {
//                           handleAddToWishlist(item);
//                         }}
//                       >
//                         <Heart size={24} />
//                       </button>
//                     </td> */}
//                   </tr>
//                 ))
//               ) : (
//                 <tr className="w-full border-b py-14">
//                   <td className="py-3 text-center" colSpan={7} rowSpan={3}>
//                     <PiCalendarSlash size={32} className="mx-auto m-5" />
//                     Your Ensurekar Cart is empty
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//         <div className="flex justify-start my-10 items-center">
//           <input
//             type="text"
//             className="border outline-none px-2 md:px-8 py-2 sm:py-3 text-bodyText placeholder:text-bodyText"
//             placeholder="Coupon Code"
//           />
//           <button className="bg-p1 border border-p1 py-2 sm:py-3 px-2 sm:px-6 font-medium text-white hover:border-mainTextColor hover:bg-s2 hover:text-mainTextColor duration-500">
//             Coupon Code
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Cart;

//------------------------------------------------------------------------------------


//src/app/components/Section/Cart.tsx
// "use client";
// import React, { useEffect, useState } from "react";
// import product_cart_img from "../../images/product_cart_img.png";
// import Image from "next/image";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Heart,
//   Minus,
//   Plus,
//   Trash,
// } from "lucide-react";
// import { useSelector, useDispatch } from "react-redux";
// import { IRootState } from "@/store";
// import {
//   addToCart,
//   addToWishlist,
//   emptyCart,
//   removeFromCart,
//   updateQuantity,
// } from "@/store/store";
// import { useRouter } from "next/navigation";
// import { PiCalendarSlash } from "react-icons/pi";
// import Link from "next/link";
// import { Item } from "../../../../types/Items-Types";

// const Cart = () => {
//   // Force refresh cart items on component mount and when cart changes
//   const [refreshTrigger, setRefreshTrigger] = useState(0);
  
//   const cartItems = useSelector((state: IRootState) => state.themeConfig.cart) || [];
//   const WishItems = useSelector((state: IRootState) => state.themeConfig.wishlist) || [];
  
//   useEffect(() => {
//     // Refresh component when mounted to ensure latest cart state is displayed
//     setRefreshTrigger(prev => prev + 1);
//     setTotalItemsInWishlist(WishItems.length);
//   }, [WishItems, cartItems]);

//   const dispatch = useDispatch();
//   const router = useRouter();
  
//   const Checkout = async () => {
//     // You can uncomment this when API integration is ready
//     // const addCartResponse = await AddToCartArray(cartItems);
//     // console.log(addCartResponse);
//     router.push("/checkout");
//   };

//   const handleRemoveFromCart = (item: Item) => {
//     dispatch(removeFromCart(item.id));
//   };
  
//   const handleIncrement = (item: Item, value: number) => {
//     if (item.quantity + value > 0) {
//       dispatch(
//         updateQuantity({ id: item.id, quantity: item.quantity + value })
//       );
//     }
//   };
  
//   const handleAddToWishlist = (item: Item) => {
//     dispatch(addToWishlist(item));
//     dispatch(removeFromCart(item.id));
//   };
  
//   const tax = 18;
//   const total = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
//   const subtotal =
//     cartItems.reduce((acc, item) => acc + item.subtotal, 0) +
//     (cartItems.reduce((acc, item) => acc + item.subtotal, 0) * tax) / 100;

//   const [totalItemsInWishlist, setTotalItemsInWishlist] = useState(0);
//   const [couponCode, setCouponCode] = useState("");

//   return (
//     <div className="relative">
//       {/* Background image div with overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center z-0" 
//         style={{ 
//           backgroundImage: "url('/images/cart-background.jpg')", 
//           backgroundAttachment: "fixed",
//           filter: "brightness(0.4)"
//         }}
//       ></div>

//       {/* Header section with improved styling */}
//       <div className="relative z-10 py-16 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 text-white">
//             <div className="w-full lg:w-1/2 mb-8 lg:mb-0 animate__animated animate__fadeIn">
//               <p className="text-lg font-medium text-s2 mb-2">
//                 Experience Ensurekar
//               </p>
//               <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                 Your Ensurekar Cart
//               </h1>
//               <p className="text-gray-200 mb-8 max-w-lg">
//                 Review your selected items and proceed to checkout when you're ready.
//               </p>
//               <Link
//                 href="/wishlist"
//                 className="inline-flex items-center gap-3 py-3 px-6 rounded-full bg-white/10 hover:bg-s2 border border-white/20 hover:border-s2 text-white hover:text-mainTextColor transition-all duration-300 backdrop-blur-sm"
//               >
//                 <Heart className="h-5 w-5" /> 
//                 <span>Wishlist ({totalItemsInWishlist})</span>
//                 <ArrowUpRight className="h-5 w-5 transform group-hover:rotate-45 transition-transform duration-300" />
//               </Link>
//             </div>
            
//             <div className="w-full lg:w-1/3 animate__animated animate__fadeInRight">
//               <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-white">
//                 <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
//                 <div className="flex justify-between items-center py-3 border-b border-white/20">
//                   <p>Subtotal</p>
//                   <p>₹ {total}</p>
//                 </div>
//                 <div className="flex justify-between items-center py-3 border-b border-white/20">
//                   <p>Tax (GST 18%)</p>
//                   <p>₹ {(total * tax) / 100}</p>
//                 </div>
//                 <div className="flex justify-between items-center py-3 mt-2 text-xl font-medium">
//                   <p>Total</p>
//                   <p>₹ {subtotal}</p>
//                 </div>
                
//                 <div className="mt-6 flex flex-col space-y-3">
//                   <button
//                     onClick={Checkout}
//                     className="w-full py-3 bg-s2 text-mainTextColor font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-s2/80 transition-all duration-300"
//                   >
//                     Proceed to Checkout <ArrowRight className="h-5 w-5" />
//                   </button>
                  
//                   <button
//                     onClick={() => dispatch(emptyCart())}
//                     className="w-full py-3 bg-red-500/80 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition-all duration-300"
//                   >
//                     <Trash className="h-5 w-5" /> Empty Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Cart items section with glass morphism effect */}
//       <div className="relative z-10 px-4 md:px-8 pb-24">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
//             {cartItems && cartItems.length > 0 ? (
//               <div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full min-w-full">
//                     <thead>
//                       <tr className="bg-white/5 text-white border-b border-white/10">
//                         <th className="px-6 py-4 text-left">Product</th>
//                         <th className="px-6 py-4 text-left">Price</th>
//                         <th className="px-6 py-4 text-left">Quantity</th>
//                         <th className="px-6 py-4 text-left">Subtotal</th>
//                         <th className="px-6 py-4 text-left">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="text-white">
//                       {cartItems.map((item, index) => (
//                         <tr 
//                           key={index} 
//                           className={`border-b border-white/10 hover:bg-white/5 transition-colors ${
//                             index % 2 === 0 ? 'bg-white/0' : 'bg-white/5'
//                           }`}
//                         >
//                           <td className="px-6 py-4">
//                             <div className="flex items-center">
//                               {item.image && (
//                                 <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden bg-white/5 mr-4">
//                                   <Image 
//                                     src={item.image} 
//                                     alt={item.name} 
//                                     width={64} 
//                                     height={64}
//                                     className="h-full w-full object-cover"
//                                   />
//                                 </div>
//                               )}
//                               <div>
//                                 <p className="font-medium">{item.name}</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4">₹ {item.price}</td>
//                           <td className="px-6 py-4">
//                             <div className="flex items-center bg-white/5 border border-white/20 rounded-md w-32">
//                               <button 
//                                 className="px-3 py-2 hover:bg-white/10 transition-colors rounded-l-md"
//                                 onClick={() => handleIncrement(item, -1)}
//                               >
//                                 <Minus className="h-4 w-4" />
//                               </button>
//                               <div className="flex-1 text-center py-2">{item.quantity}</div>
//                               <button 
//                                 className="px-3 py-2 hover:bg-white/10 transition-colors rounded-r-md"
//                                 onClick={() => handleIncrement(item, 1)}
//                               >
//                                 <Plus className="h-4 w-4" />
//                               </button>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 font-medium">₹ {item.subtotal}</td>
//                           <td className="px-6 py-4">
//                             <div className="flex space-x-2">
//                               <button 
//                                 onClick={() => handleRemoveFromCart(item)}
//                                 className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-full transition-colors"
//                                 title="Remove from cart"
//                               >
//                                 <Trash className="h-5 w-5" />
//                               </button>
//                               <button 
//                                 onClick={() => handleAddToWishlist(item)}
//                                 className="p-2 text-white hover:text-pink-300 hover:bg-pink-500/20 rounded-full transition-colors"
//                                 title="Move to wishlist"
//                               >
//                                 <Heart className="h-5 w-5" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
                
//                 {/* Coupon code section */}
//                 <div className="p-6 border-t border-white/10">
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <input
//                       type="text"
//                       value={couponCode}
//                       onChange={(e) => setCouponCode(e.target.value)}
//                       placeholder="Enter coupon code"
//                       className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-s2/50"
//                     />
//                     <button className="px-6 py-3 bg-s2 text-mainTextColor font-medium rounded-lg hover:bg-s2/80 transition-all duration-300 whitespace-nowrap">
//                       Apply Coupon
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="py-24 flex flex-col items-center justify-center text-white">
//                 <div className="bg-white/5 p-6 rounded-full mb-6">
//                   <PiCalendarSlash className="h-16 w-16 text-white/60" />
//                 </div>
//                 <h3 className="text-2xl font-medium mb-4">Your Ensurekar Cart is empty</h3>
//                 <p className="text-white/60 mb-8 text-center max-w-md">
//                   Looks like you haven't added any products to your cart yet.
//                 </p>
//                 <Link
//                   href="/products"
//                   className="px-6 py-3 bg-s2 text-mainTextColor font-medium rounded-lg hover:bg-s2/80 transition-all duration-300 flex items-center gap-2"
//                 >
//                   Continue Shopping <ArrowRight className="h-5 w-5" />
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

//------------------------------------------------------------------------------------

//src/app/components/Section/Cart.tsx
"use client";
import React, { useEffect, useState } from "react";
import product_cart_img from "../../images/product_cart_img.png";
import Image from "next/image";
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
    // const addCartResponse = await AddToCartArray(cartItems);
    // console.log(addCartResponse);
    router.push("/checkout");
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
  
  const tax = 18;
  const total = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
  const subtotal =
    cartItems.reduce((acc, item) => acc + item.subtotal, 0) +
    (cartItems.reduce((acc, item) => acc + item.subtotal, 0) * tax) / 100;

  const [totalItemsInWishlist, setTotalItemsInWishlist] = useState(0);
  const [couponCode, setCouponCode] = useState("");

  return (
    <div className="relative font-['Roboto',sans-serif]">
      {/* Background image div with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/images/cart-background.jpg')", 
          backgroundAttachment: "fixed",
          filter: "brightness(0.4)"
        }}
      ></div>

      {/* Header section with improved styling */}
      <div className="relative z-10 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8 text-white">
            <div>
              <h1 className="text-black text-3xl md:text-4xl font-bold dark:text-white font-['Roboto',sans-serif]">Your Cart</h1>
              <p className="text-gray-400 mt-2 dark:text-gray-300 font-['Roboto',sans-serif]">Review your selected items before checkout.</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/wishlist"
                className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300"
              >
                <Heart className="h-4 w-4" /> 
                <span>Wishlist ({totalItemsInWishlist})</span>
              </Link>
              <button
                onClick={() => dispatch(emptyCart())}
                className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-red-500/80 hover:bg-red-600 text-white transition-all duration-300"
              >
                <Trash className="h-4 w-4 font-['Roboto',sans-serif]" /> Empty Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cart items section with simple table format like the image */}
      <div className="relative z-10 px-4 md:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              {cartItems && cartItems.length > 0 ? (
                <>
                  {/* Simple table format matching the image */}
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b">
                        <th className="px-6 py-3 text-left font-medium text-gray-700 font-['Roboto',sans-serif]">Name</th>
                        <th className="px-6 py-3 text-center font-medium text-gray-700 font-['Roboto',sans-serif]">Quantity</th>
                        <th className="px-6 py-3 text-right font-medium text-gray-700 font-['Roboto',sans-serif]">Price</th>
                        <th className="px-6 py-3 text-right font-medium text-gray-700 font-['Roboto',sans-serif]">Subtotal</th>
                        <th className="w-10"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr 
                          key={index} 
                          className="border-b hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 text-left">
                            <p className="font-medium text-gray-800 font-['Roboto',sans-serif]">{item.name}</p>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center">
                              <button 
                                className="p-1 hover:bg-gray-200 rounded"
                                onClick={() => handleIncrement(item, -1)}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <div className="mx-3 min-w-8 text-center">{item.quantity}</div>
                              <button 
                                className="p-1 hover:bg-gray-200 rounded"
                                onClick={() => handleIncrement(item, 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right font-['Roboto',sans-serif]">₹{item.price.toFixed(2)}</td>
                          <td className="px-6 py-4 text-right font-['Roboto',sans-serif]">₹{item.subtotal.toFixed(2)}</td>
                          <td className="pr-4 py-4 font-['Roboto',sans-serif]">
                            <button 
                              onClick={() => handleRemoveFromCart(item)}
                              className="text-red-500 hover:text-red-700"
                              title="Remove from cart"
                            >
                              <Trash className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {/* Order summary section matching the image */}
                  <div className="p-6">
                    <div className="max-w-md ml-auto">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-['Roboto',sans-serif]">Subtotal:</span>
                        <span className="text-gray-800 font-medium font-['Roboto',sans-serif]">₹{total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-['Roboto',sans-serif]">GST (18%):</span>
                        <span className="text-gray-800 font-medium font-['Roboto',sans-serif]">₹{((total * tax) / 100).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-t mt-2 pt-2">
                        <span className="text-gray-800 font-bold font-['Roboto',sans-serif]">Total:</span>
                        <span className="text-gray-800 font-bold font-['Roboto',sans-serif]">₹{subtotal.toFixed(2)}</span>
                      </div>
                      
                      <div className="mt-6">
                        <button
                          onClick={Checkout}
                           className="w-full py-3 bg-p1 text-white font-medium rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Proceed to Checkout <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Coupon code section */}
                  {/* <div className="p-6 border-t">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Coupon Code comming soon"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded"
                      />
                      <button className="px-6 py-2 bg-p1 text-white font-medium rounded hover:bg-p1/90 transition-all duration-300 whitespace-nowrap hover:bg-yellow-500 hover:text-black">
                        Apply Coupon
                      </button>
                    </div>
                  </div> */}
                </>
              ) : (
                <div className="py-16 flex flex-col items-center justify-center">
                  <PiCalendarSlash className="h-16 w-16 text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium mb-4 text-gray-700">Your Ensurekar Cart is empty</h3>
                  <Link
                    href="/products"
                    className="mt-4 px-6 py-2 bg-p1 text-white font-medium rounded hover:bg-p1/90 transition-all duration-300 flex items-center gap-2"
                  >
                    Continue Shopping <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;