import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBAaTi42aAJBVqP_ObKJZaBupI4DHekECg",
  authDomain: "frmp-9b184.firebaseapp.com",
  projectId: "frmp-9b184",
  storageBucket: "frmp-9b184.appspot.com",
  messagingSenderId: "79094562937",
  appId: "1:79094562937:web:ab7dfba558a06f7d1214a8",
  measurementId: "G-VJQRRQQWGP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
