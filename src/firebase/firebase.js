// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAai_VYPTela-p-7NszEZshp0gYworBR9g",
  authDomain: "wedding-snb.firebaseapp.com",
  databaseURL: "https://wedding-snb-default-rtdb.firebaseio.com",
  projectId: "wedding-snb",
  storageBucket: "wedding-snb.firebasestorage.app",
  messagingSenderId: "981317826433",
  appId: "1:981317826433:web:83d3e9ce7d388d456ada80",
  measurementId: "G-55VBH1WG7Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export const auth = getAuth(app);
