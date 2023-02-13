// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxsXGVOnhDw2KhoDXPKgdbLuutoBAuXKA",
  authDomain: "st-step-business.firebaseapp.com",
  projectId: "st-step-business",
  storageBucket: "st-step-business.appspot.com",
  messagingSenderId: "672484027520",
  appId: "1:672484027520:web:1a18b2954f175e3d8cca65",
  measurementId: "G-PZEPG29YKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


