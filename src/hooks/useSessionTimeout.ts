"use client";

import { useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/store/themeConfigSlice";

const SESSION_TIMEOUT = 40 * 60 * 1000; // 40 minutes in milliseconds
const SESSION_START_KEY = "sessionStartTime";
const LAST_ACTIVITY_KEY = "lastActivityTime";

export const useSessionTimeout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearSession = useCallback(() => {
    // Clear all session data
    localStorage.removeItem(SESSION_START_KEY);
    localStorage.removeItem(LAST_ACTIVITY_KEY);
    localStorage.removeItem("Token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("authToken");
    
    // Dispatch logout action
    dispatch(logout());
    
    // Redirect to login page
    router.push("/Login");
  }, [dispatch, router]);

  const resetSessionTimer = useCallback(() => {
    // Clear existing timers
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (warningTimeoutRef.current) {
      clearTimeout(warningTimeoutRef.current);
    }

    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      return;
    }

    // Update last activity time
    const now = Date.now();
    localStorage.setItem(LAST_ACTIVITY_KEY, now.toString());

    // Set session start time if not exists
    const sessionStart = localStorage.getItem(SESSION_START_KEY);
    if (!sessionStart) {
      localStorage.setItem(SESSION_START_KEY, now.toString());
    }

    // Calculate time remaining
    const sessionStartTime = parseInt(sessionStart || now.toString(), 10);
    const elapsed = now - sessionStartTime;
    const remaining = SESSION_TIMEOUT - elapsed;

    if (remaining <= 0) {
      // Session already expired
      clearSession();
      return;
    }

    // Set warning at 5 minutes before timeout (35 minutes)
    const warningTime = remaining - (5 * 60 * 1000);
    if (warningTime > 0) {
      warningTimeoutRef.current = setTimeout(() => {
        // Show warning (optional - you can add a toast/notification here)
        console.warn("Your session will expire in 5 minutes due to inactivity.");
      }, warningTime);
    }

    // Set logout timeout
    timeoutRef.current = setTimeout(() => {
      clearSession();
    }, remaining);
  }, [clearSession]);

  const handleUserActivity = useCallback(() => {
    resetSessionTimer();
  }, [resetSessionTimer]);

  useEffect(() => {
    // Check if user is authenticated on mount
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      return;
    }

    // Check if session has expired
    const sessionStart = localStorage.getItem(SESSION_START_KEY);
    const lastActivity = localStorage.getItem(LAST_ACTIVITY_KEY);
    
    if (sessionStart) {
      const sessionStartTime = parseInt(sessionStart, 10);
      const now = Date.now();
      const elapsed = now - sessionStartTime;

      if (elapsed >= SESSION_TIMEOUT) {
        // Session expired
        clearSession();
        return;
      }

      // If last activity exists, check if it's been too long
      if (lastActivity) {
        const lastActivityTime = parseInt(lastActivity, 10);
        const timeSinceActivity = now - lastActivityTime;
        
        // If no activity for 40 minutes, logout
        if (timeSinceActivity >= SESSION_TIMEOUT) {
          clearSession();
          return;
        }
      }
    }

    // Initialize session timer
    resetSessionTimer();

    // Listen for user activity events
    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];

    events.forEach((event) => {
      window.addEventListener(event, handleUserActivity, { passive: true });
    });

    // Cleanup
    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleUserActivity);
      });
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
    };
  }, [handleUserActivity, resetSessionTimer, clearSession]);

  return { resetSessionTimer };
};

