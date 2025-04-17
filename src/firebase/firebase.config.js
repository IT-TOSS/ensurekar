// src/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Using environment variables (recommended)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAV9jO-wD7XFdh82I3tvtIKqDoAD7d9PyU",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "ensurekar-d48bd.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ensurekar-d48bd",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "ensurekar-d48bd.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "491265324820",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:491265324820:web:8c1fb8bfc0b89e13467401",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-5S2D92TP65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;


export const saveProfileToFirebase = async (userData) => {
  try {
    const db = getFirestore(app);
    
    // Save user data with userId as document ID
    await setDoc(doc(db, "userProfiles", userData.username || 'defaultuser'), userData);
    console.log("User profile saved to Firebase");
    return true;
  } catch (error) {
    console.error("Error saving profile to Firebase:", error);
    return false;
  }
};

export const getProfileFromFirebase = async (userId) => {
  try {
    const db = getFirestore(app);
    const docRef = doc(db, "userProfiles", userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No profile found for this user");
      return null;
    }
  } catch (error) {
    console.error("Error fetching profile from Firebase:", error);
    return null;
  }
};

export { app, auth, db, analytics };