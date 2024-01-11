// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2zScHakbXXj-jmflqCD9zZdQklCquhlY",
  authDomain: "gamematch-36b12.firebaseapp.com",
  projectId: "gamematch-36b12",
  storageBucket: "gamematch-36b12.appspot.com",
  messagingSenderId: "590587385308",
  appId: "1:590587385308:web:1f6f498c2e8fc88d7eeb19",
  measurementId: "G-YG9PYY5DZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
