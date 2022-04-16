// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcj45fpclJGD4lUjBsbLc3O3knPnzMZUI",
  authDomain: "ema-jon-simple-2e3a4.firebaseapp.com",
  projectId: "ema-jon-simple-2e3a4",
  storageBucket: "ema-jon-simple-2e3a4.appspot.com",
  messagingSenderId: "1091022728469",
  appId: "1:1091022728469:web:28a6095f70a50462b14d1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth