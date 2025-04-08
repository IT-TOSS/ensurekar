// src/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Using environment variables (recommended)
const firebaseConfig = {
  apiKey:"AIzaSyAV9jO-wD7XFdh82I3tvtIKqDoAD7d9PyU",
  authDomain: "ensurekar-d48bd.firebaseapp.com",
  projectId:"ensurekar-d48bd",
  storageBucket: "ensurekar-d48bd.firebasestorage.app",
  messagingSenderId:  "491265324820",
  appId:  "1:491265324820:web:8c1fb8bfc0b89e13467401",
  measurementId:  "G-5S2D92TP65"
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