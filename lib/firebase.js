// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAVw_eWwFiZfVO73eZLXfajP8ddIWnkzOI",
  authDomain: "elect-ecom.firebaseapp.com",
  projectId: "elect-ecom",
  storageBucket: "elect-ecom.firebasestorage.app",
  messagingSenderId: "560869466604",
  appId: "1:560869466604:web:b322ac3b81b5b5e05020c9",
  measurementId: "G-N8TP20SPZ1"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
if (typeof window !== "undefined") {
setPersistence(auth, browserLocalPersistence).catch(console.error);
auth.useDeviceLanguage();
}

export default app;
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();