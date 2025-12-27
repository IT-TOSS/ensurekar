"use client";

import { createSlice } from "@reduxjs/toolkit";

import themeConfig from "../theme.config";

const defaultState = {
  isDarkMode: false,
  mainLayout: "app",
  theme: "light",
  menu: "vertical",
  layout: "full",
  rtlClass: "ltr",
  animation: "",
  navbar: "navbar-sticky",
  locale: "en",
  sidebar: false,
  pageTitle: "",
  languageList: [
    { code: "in", name: "Hindi" },
    { code: "zh", name: "Chinese" },
    { code: "da", name: "Danish" },
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "el", name: "Greek" },
    { code: "hu", name: "Hungarian" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "pl", name: "Polish" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "es", name: "Spanish" },
    { code: "sv", name: "Swedish" },
    { code: "tr", name: "Turkish" },
  ],
  semidark: false,
  authToken:
    typeof window !== "undefined" ? localStorage.getItem("Token") || "" : "",
  initialRoutes:
    typeof window !== "undefined" ? window.location.pathname || "" : "",
  localUrl: '', //process.env.NEXT_LOCAL_API_URL || "",
  isAuthenticated: false,
  userInfo: {
    Fname: "",
    Lname: "",
    email: "",
    username: "",
    contact: "",
    picture: "",
    role: "",
  },
  role: "",
};

const initialState = {
  theme:
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || themeConfig.theme
      : themeConfig.theme,
  menu:
    typeof window !== "undefined"
      ? localStorage.getItem("menu") || themeConfig.menu
      : themeConfig.menu,
  layout:
    typeof window !== "undefined"
      ? localStorage.getItem("layout") || themeConfig.layout
      : themeConfig.layout,
  rtlClass:
    typeof window !== "undefined"
      ? localStorage.getItem("rtlClass") || themeConfig.rtlClass
      : themeConfig.rtlClass,
  animation:
    typeof window !== "undefined"
      ? localStorage.getItem("animation") || themeConfig.animation
      : themeConfig.animation,
  navbar:
    typeof window !== "undefined"
      ? localStorage.getItem("navbar") || themeConfig.navbar
      : themeConfig.navbar,
  locale:
    typeof window !== "undefined"
      ? localStorage.getItem("i18nextLng") || themeConfig.locale
      : themeConfig.locale,
  isDarkMode: false,
  sidebar:
    typeof window !== "undefined"
      ? localStorage.getItem("sidebar") || defaultState.sidebar
      : defaultState.sidebar,
  semidark:
    typeof window !== "undefined"
      ? localStorage.getItem("semidark") || themeConfig.semidark
      : themeConfig.semidark,
  authToken:
    typeof window !== "undefined" ? localStorage.getItem("Token") || "" : "",
  initialRoutes:
    typeof window !== "undefined"
      ? localStorage.getItem("initialRoutes") || defaultState.initialRoutes
      : defaultState.initialRoutes,
  languageList: [
    { code: "in", name: "Hindi" },
    { code: "zh", name: "Chinese" },
    { code: "da", name: "Danish" },
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "el", name: "Greek" },
    { code: "hu", name: "Hungarian" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "pl", name: "Polish" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "es", name: "Spanish" },
    { code: "sv", name: "Swedish" },
    { code: "tr", name: "Turkish" },
    { code: "ae", name: "Arabic" },
  ],
  localUrl:
    typeof window !== "undefined"
      ? localStorage.getItem("localUrl") || defaultState.localUrl
      : defaultState.localUrl,
  userInfo:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userInfo") || "{}") ||
        defaultState.userInfo
      : defaultState.userInfo,
  isAuthenticated:
    typeof window !== "undefined"
      ? localStorage.getItem("isAuthenticated") || false
      : false,
};

const themeConfigSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    toggleTheme(state: typeof initialState, { payload }: { payload: string }) {
      payload = payload || state.theme; // light | dark | system
      localStorage.setItem("theme", payload);
      state.theme = payload;
      if (payload === "light") {
        state.isDarkMode = false;
      } else if (payload === "dark") {
        state.isDarkMode = true;
      } else if (payload === "system") {
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          state.isDarkMode = true;
        } else {
          state.isDarkMode = false;
        }
      }

      if (state.isDarkMode) {
        document.querySelector("body")?.classList.add("dark");
      } else {
        document.querySelector("body")?.classList.remove("dark");
      }
    },
    toggleMenu(state, { payload }) {
      payload = payload || state.menu; // vertical, collapsible-vertical, horizontal
      state.sidebar = false; // reset sidebar state
      localStorage.setItem("menu", payload);
      state.menu = payload;
    },
    toggleLayout(state, { payload }) {
      payload = payload || state.layout; // full, boxed-layout
      localStorage.setItem("layout", payload);
      state.layout = payload;
    },
    toggleRTL(state, { payload }) {
      payload = payload || state.rtlClass; // rtl, ltr
      localStorage.setItem("rtlClass", payload);
      state.rtlClass = payload;
      document
        .querySelector("html")
        ?.setAttribute("dir", state.rtlClass || "ltr");
    },
    toggleAnimation(state, { payload }) {
      payload = payload || state.animation; // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
      payload = payload?.trim();
      localStorage.setItem("animation", payload);
      state.animation = payload;
    },
    toggleNavbar(state, { payload }) {
      payload = payload || state.navbar; // navbar-sticky, navbar-floating, navbar-static
      localStorage.setItem("navbar", payload);
      state.navbar = payload;
    },
    toggleSemidark(state, { payload }) {
      payload = payload === true || payload === "true" ? true : false;
      localStorage.setItem("semidark", payload);
      state.semidark = payload;
    },

    toggleSidebar(state) {
      state.sidebar = !state.sidebar;
    },
    setPageTitle(state, { payload }) {
      document.title = `${payload}`;
    },
    // setAuthToken(state, { payload }) {
    //     localStorage.setItem('Token', payload);
    //     state.authToken = payload;
    // },
    // setUserInfo(state, { payload }) {
    //     localStorage.setItem('userInfo', JSON.stringify(payload));
    //     state.userInfo = payload;
    // },
    
    setAuth(state, { payload }) {
      console.log(payload);
      localStorage.setItem("Token", payload.Token);
      localStorage.setItem("isAuthenticated", payload.isAuthenticated);
      localStorage.setItem(
        "userInfo",
        JSON.stringify(payload.userInfo) || "{}"
      );
      
      state.userInfo = payload.userInfo;
      state.authToken = payload.Token;
      state.isAuthenticated = payload.isAuthenticated;
    },

    logout(state) {
      localStorage.removeItem("Token");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("sessionStartTime");
      localStorage.removeItem("lastActivityTime");
      localStorage.removeItem("authToken");
      state.authToken = "";
      state.userInfo = {};
      state.isAuthenticated = false;
    },
  },
});

export const {
  toggleTheme,
  toggleMenu,
  toggleLayout,
  toggleRTL,
  toggleAnimation,
  toggleNavbar,
  toggleSemidark,
  toggleSidebar,
  setPageTitle,
  setAuth,
  logout,
} = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
