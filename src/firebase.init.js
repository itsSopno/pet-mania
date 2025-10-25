// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // for authentication
const firebaseConfig = {
  apiKey: "AIzaSyCPd4SqVcHCgEqtG_uxGwwf17PMtifQ4tI",
  authDomain: "my-pet-cb699.firebaseapp.com",
  projectId: "my-pet-cb699",
  storageBucket: "my-pet-cb699.firebasestorage.app",
  messagingSenderId: "422321929935",
  appId: "1:422321929935:web:7e323533f8977db16a01ba",
  measurementId: "G-QYN5QCF1NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

export default auth;