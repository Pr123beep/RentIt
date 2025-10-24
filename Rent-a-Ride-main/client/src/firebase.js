// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AlzaSyBgmKeRRJBSTL1T06Y_KjmAGqxpycj3MqM",
  authDomain: "rent-a-ride-72fc3.firebaseapp.com",
  projectId: "rent-a-ride-72fc3",
  storageBucket: "rent-a-ride-72fc3.appspot.com",
  messagingSenderId: "1083679696849",
  appId: "1:1083679696849:web:your_app_id_here" // You'll need to get this from Firebase Console
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);