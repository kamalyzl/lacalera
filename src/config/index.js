// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOUveGurmAW9AbFhlNdOTm4l5KSDC0YEM",
  authDomain: "ciber-la-calera.firebaseapp.com",
  projectId: "ciber-la-calera",
  storageBucket: "ciber-la-calera.appspot.com",
  messagingSenderId: "309363348404",
  appId: "1:309363348404:web:d42c290e3436e57279d8e1",
  measurementId: "G-10MP7LG7YS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);