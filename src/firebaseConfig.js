// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBXKe48RklSX01XgJTyl7aF8l44PENhdg",
  authDomain: "rhema2-238e6.firebaseapp.com",
  projectId: "rhema2-238e6",
  storageBucket: "rhema2-238e6.appspot.com",
  messagingSenderId: "504411882058",
  appId: "1:504411882058:web:67f74f8c779278d4155cb3",
  measurementId: "G-1WB0HEXHNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);
