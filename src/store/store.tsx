"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import themeConfig from "../theme.config";
import { StaticImageData } from "next/image";
import { Item } from "../../types/Items-Types";

interface UserInfo {
  Fname: string;
  Lname: string;
  email: string;
  username: string;
  contact: string;
  picture: string |StaticImageData;
  role: string;
}

interface SeoData {
  title?:string;
  description?:string;
  icon?:string | StaticImageData;
  url?:string;
  image?:string | StaticImageData;
  short_description?:string;
}
interface State {
  isDarkMode: boolean;
  theme: string;
  menu: string;
  layout: string;
  rtlClass: string;
  animation: string;
  navbar: string;
  locale: string;
  sidebar: boolean;
  semidark: boolean;
  authToken: string;
  initialRoutes: string;
  isAuthenticated: boolean;
  userInfo: UserInfo;
  cart?: Item[];
  wishlist?: Item[];
  languageList: { code: string; name: string }[];
  localUrl: string;
  SeoData: SeoData;

}

const initialState: State = {
  isDarkMode: false,
  theme: themeConfig.theme,
  menu: themeConfig.menu,
  layout: themeConfig.layout,
  rtlClass: themeConfig.rtlClass,
  animation: themeConfig.animation,
  navbar: themeConfig.navbar,
  locale: themeConfig.locale,
  sidebar: false,
  semidark: themeConfig.semidark,
  authToken:
    typeof window !== "undefined" ? localStorage.getItem("Token") || "" : "",
  initialRoutes: typeof window !== "undefined" ? (localStorage.getItem("initialRoutes") || "") : (themeConfig.initialRoutes || "") ,
  isAuthenticated:
    typeof window !== "undefined"
      ? localStorage.getItem("isAuthenticated") === "true"
      : false,
  userInfo: {
    Fname:
      typeof window !== "undefined" && localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") || "{}").Fname
        : "",
    Lname:
      typeof window !== "undefined" && localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") || "{}").Lname
        : "",
    email:
      typeof window !== "undefined" && localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") || "{}").email
        : "",
    username:
      typeof window !== "undefined" && localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") || "{}").username
        : "",
    contact:
      typeof window !== "undefined" && localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") || "{}").contact
        : "",
    picture:
      typeof window !== "undefined" && localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") || "{}").picture
        : "",
    role:
      typeof window !== "undefined" && localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") || "{}").role
        : "",
  },
  cart:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : [],
  wishlist:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("wishlist") || "[]")
      : [],
  languageList: [
    { code: "in", name: "Hindi" },
    { code: "zh", name: "Chinese" },
    { code: "en", name: "English" },
    // Other languages...
  ],
  localUrl: process.env.NEXT_LOCAL_API_URL || "",
  SeoData : {
    title: themeConfig.SeoData.title,
    description: themeConfig.SeoData.description,
    icon: themeConfig.SeoData.icon,
    url: themeConfig.SeoData.url,
    image: themeConfig.SeoData.image,
    short_description: themeConfig.SeoData.short_description,
  }
};

const themeConfigSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleTheme(state, action: PayloadAction<string>) {
      const theme = action.payload || state.theme;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
        document.body.classList.toggle("dark", theme === "dark");
      }
      state.theme = theme;
      state.isDarkMode = theme === "dark";
    },
    toggleMenu(state, action: PayloadAction<string>) {
      const menu = action.payload || state.menu;
      if (typeof window !== "undefined") {
        localStorage.setItem("menu", menu);
      }
      state.menu = menu;
    },
    setAuth(
      state,
      action: PayloadAction<{
        Token: string;
        userInfo: UserInfo;
        isAuthenticated: boolean;
      }>
    ) {
      const { Token, userInfo, isAuthenticated } = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("Token", Token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        localStorage.setItem("isAuthenticated", String(isAuthenticated));
      }
      state.authToken = Token;
      state.userInfo = userInfo;
      state.isAuthenticated = isAuthenticated;
    },
    setInitialRoutes(state, action: PayloadAction<string>) {
      console.log(action.payload);
      const initialRoutes = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("initialRoutes", initialRoutes);
      }
      state.initialRoutes = initialRoutes;
    },
    logout(state) {
      if (typeof window !== "undefined") {
        localStorage.clear();
      }
      state.authToken = "";
      state.userInfo = {} as UserInfo;
      state.isAuthenticated = false;
    },
    setWishlist(state, action: PayloadAction<Item[]>) {
      const wishlist = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      }
      state.wishlist = wishlist;
    },
    addToCart(state, action: PayloadAction<Item>) {
      const existingItem = state.cart?.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
      } else {
        state.cart?.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, action: PayloadAction<string|number>) {
      state.cart = state.cart?.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string|number; quantity: number }>
    ) {
      const item = state.cart?.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.subtotal = item.quantity * item.price;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    emptyCart(state) {
      state.cart = [];
      localStorage.removeItem("cart");
    },
    addToWishlist(state, action: PayloadAction<Item>) {
      const existingItem = state.wishlist?.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.subtotal = existingItem.quantity * existingItem.price;
      } else {
        state.wishlist?.push(action.payload);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromWishlist(state, action: PayloadAction<string|number>) {
      state.wishlist = state.wishlist?.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    emptyWishlist(state) {
      state.wishlist = [];
      localStorage.removeItem("wishlist");
    },
    addSeoData(state, action: PayloadAction<SeoData>) {
      const actionSeo = action.payload;
      state.SeoData = {
        title: `Ensurekar ${actionSeo.title ? " | " + actionSeo.title : ""}`,
        description: actionSeo.description ||"",
        icon: actionSeo.icon ||"",
        url: actionSeo.url ||"" ,
        image: actionSeo.image ||"",
        short_description: actionSeo.short_description ||"",
      };
    }
  },
});

export const {
  toggleTheme,
  toggleMenu,
  setAuth,
  logout,
  addToCart,
  removeFromCart,
  updateQuantity,
  emptyCart,
  addToWishlist,
  removeFromWishlist,
  emptyWishlist,
  setInitialRoutes,
  addSeoData,
} = themeConfigSlice.actions;
export default themeConfigSlice.reducer;
