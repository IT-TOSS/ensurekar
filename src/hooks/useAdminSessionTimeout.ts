"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

const ADMIN_SESSION_TIMEOUT = 90 * 60 * 1000; // 90 minutes (1.5 hours) in milliseconds
const ADMIN_SESSION_START_KEY = "adminSessionStartTime";
const ADMIN_LAST_ACTIVITY_KEY = "adminLastActivityTime";
const SUPER_ADMIN_SESSION_START_KEY = "superAdminSessionStartTime";
const SUPER_ADMIN_LAST_ACTIVITY_KEY = "superAdminLastActivityTime";

export const useAdminSessionTimeout = (isSuperAdmin: boolean = false) => {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getSessionKeys = useCallback(() => {
    if (isSuperAdmin) {
      return {
        sessionStart: SUPER_ADMIN_SESSION_START_KEY,
        lastActivity: SUPER_ADMIN_LAST_ACTIVITY_KEY,
        authKey: "superAdminAuth",
        loginPath: "/super_admin",
      };
    }
    return {
      sessionStart: ADMIN_SESSION_START_KEY,
      lastActivity: ADMIN_LAST_ACTIVITY_KEY,
      authKey: "adminAuth",
      loginPath: "/admin/Login",
    };
  }, [isSuperAdmin]);

  const clearSession = useCallback(() => {
    const keys = getSessionKeys();
    
    // Clear all session data
    localStorage.removeItem(keys.sessionStart);
    localStorage.removeItem(keys.lastActivity);
    localStorage.removeItem(keys.authKey);
    localStorage.removeItem("superAdminToken");
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("superAdminAuth");
    
    // Redirect to login page
    router.push(keys.loginPath);
  }, [getSessionKeys, router]);

  const resetSessionTimer = useCallback(() => {
    const keys = getSessionKeys();
    
    // Clear existing timers
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (warningTimeoutRef.current) {
      clearTimeout(warningTimeoutRef.current);
    }

    // Check if admin/super admin is authenticated
    const authKey = localStorage.getItem(keys.authKey);
    if (!authKey) {
      return;
    }

    // Update last activity time
    const now = Date.now();
    localStorage.setItem(keys.lastActivity, now.toString());

    // Set session start time if not exists
    const sessionStart = localStorage.getItem(keys.sessionStart);
    if (!sessionStart) {
      localStorage.setItem(keys.sessionStart, now.toString());
    }

    // Calculate time remaining
    const sessionStartTime = parseInt(sessionStart || now.toString(), 10);
    const elapsed = now - sessionStartTime;
    const remaining = ADMIN_SESSION_TIMEOUT - elapsed;

    if (remaining <= 0) {
      // Session already expired
      clearSession();
      return;
    }

    // Set warning at 10 minutes before timeout (80 minutes)
    const warningTime = remaining - (10 * 60 * 1000);
    if (warningTime > 0) {
      warningTimeoutRef.current = setTimeout(() => {
        // Show warning (optional - you can add a toast/notification here)
        console.warn(`Your ${isSuperAdmin ? 'Super Admin' : 'Admin'} session will expire in 10 minutes due to inactivity.`);
      }, warningTime);
    }

    // Set logout timeout
    timeoutRef.current = setTimeout(() => {
      clearSession();
    }, remaining);
  }, [clearSession, getSessionKeys, isSuperAdmin]);

  const handleUserActivity = useCallback(() => {
    resetSessionTimer();
  }, [resetSessionTimer]);

  useEffect(() => {
    const keys = getSessionKeys();
    
    // Check if admin/super admin is authenticated on mount
    const authKey = localStorage.getItem(keys.authKey);
    if (!authKey) {
      return;
    }

    // Check if session has expired
    const sessionStart = localStorage.getItem(keys.sessionStart);
    const lastActivity = localStorage.getItem(keys.lastActivity);
    
    if (sessionStart) {
      const sessionStartTime = parseInt(sessionStart, 10);
      const now = Date.now();
      const elapsed = now - sessionStartTime;

      if (elapsed >= ADMIN_SESSION_TIMEOUT) {
        // Session expired
        clearSession();
        return;
      }

      // If last activity exists, check if it's been too long
      if (lastActivity) {
        const lastActivityTime = parseInt(lastActivity, 10);
        const timeSinceActivity = now - lastActivityTime;
        
        // If no activity for 90 minutes, logout
        if (timeSinceActivity >= ADMIN_SESSION_TIMEOUT) {
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
  }, [handleUserActivity, resetSessionTimer, clearSession, getSessionKeys]);

  return { resetSessionTimer };
};

