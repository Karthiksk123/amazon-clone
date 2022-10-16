// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAyVIFH9WJqGcMsfwllneq_W6APMCsnOw",
  authDomain: "clone-26e18.firebaseapp.com",
  projectId: "clone-26e18",
  storageBucket: "clone-26e18.appspot.com",
  messagingSenderId: "349214663266",
  appId: "1:349214663266:web:eab8ffaf238e2bf311273b",
  measurementId: "G-Y1NRKCLWKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);