// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxMJ-0ZJ-7oytbotpD-bVgg9Ds86KBjAY",
    authDomain: "interviewai-4641b.firebaseapp.com",
    projectId: "interviewai-4641b",
    storageBucket: "interviewai-4641b.firebasestorage.app",
    messagingSenderId: "255787250212",
    appId: "1:255787250212:web:d69ae3e94cd1322ab49eb1",
    measurementId: "G-LPS9KWNL8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);