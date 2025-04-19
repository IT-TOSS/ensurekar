// src/firebase/auth.service.js
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration


// shuti firebase
// shruti.vishwa14@gmail.com


// const firebaseConfig = {
//   apiKey: "AIzaSyAV9jO-wD7XFdh82I3tvtIKqDoAD7d9PyU",
//   authDomain: "ensurekar-d48bd.firebaseapp.com",
//   projectId: "ensurekar-d48bd",
//   storageBucket: "ensurekar-d48bd.firebasestorage.app",
//   messagingSenderId: "491265324820",
//   appId: "1:491265324820:web:8c1fb8bfc0b89e13467401",
//   measurementId: "G-5S2D92TP65"
// };


// toss125training@gmail.com

const firebaseConfig = {
  apiKey: "AIzaSyAstvx3MeMYAMfn6WmYs669g40F-H9bvbY",
  authDomain: "ensurakar.firebaseapp.com",
  projectId: "ensurakar",
  storageBucket: "ensurakar.firebasestorage.app",
  messagingSenderId: "615716766125",
  appId: "1:615716766125:web:e1e52eb71d99831cca2124",
  measurementId: "G-8438HC997L"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Authentication functions
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const AdmainloginWithEmailAndPassword = async (email, password) => {
  try {

    console.log(email,password)
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google login error:", error);
    throw error;
  }
};


export const getAllData = async ()=> {
  const dbRef = ref(db);
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val(); // Return entire database content
    } else {
      console.log("No data found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};



// Export Firebase instances
export { auth, db, googleProvider };