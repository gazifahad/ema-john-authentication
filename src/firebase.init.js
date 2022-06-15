// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1ImyGB0hIe9DChdlQrPM0zyO_ChOQaMc",
  authDomain: "ema-john-4ce22.firebaseapp.com",
  projectId: "ema-john-4ce22",
  storageBucket: "ema-john-4ce22.appspot.com",
  messagingSenderId: "76204111522",
  appId: "1:76204111522:web:a475a6d1f8b2e9457589fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;