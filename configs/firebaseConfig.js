// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-b86fb.firebaseapp.com",
  projectId: "netflix-b86fb",
  storageBucket: "netflix-b86fb.firebasestorage.app",
  messagingSenderId: "274029897945",
  appId: "1:274029897945:web:bae9dfd76c050d784bf6c8",
  measurementId: "G-68Z93CFDGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage=getStorage(app);
