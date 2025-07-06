// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAdwuClW5pqkHhxU2KLPuELjOyvtZSCZJY",
  authDomain: "portfolio-70590.firebaseapp.com",
  projectId: "portfolio-70590",
  storageBucket: "portfolio-70590.firebasestorage.app",
  messagingSenderId: "179003389536",
  appId: "1:179003389536:web:07e62901cdf6eda98ff505",
  measurementId: "G-RRQHNBSTK3"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore
const db = getFirestore(app);

// ✅ Export the Firestore instance
export { db };
