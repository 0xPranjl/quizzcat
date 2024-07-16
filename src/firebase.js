// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvbHizWaTFQfEucFTKMcw68zvjFCNmG8c",
  authDomain: "quizzcat-a716b.firebaseapp.com",
  projectId: "quizzcat-a716b",
  storageBucket: "quizzcat-a716b.appspot.com",
  messagingSenderId: "689879843572",
  appId: "1:689879843572:web:5dceedbb1a11875e69d4a1",
  measurementId: "G-EV1F3SN029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();