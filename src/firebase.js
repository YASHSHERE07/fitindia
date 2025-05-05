import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBNuHs7ghTzDLCudvnkjc1ZgdVCGTMysaQ",
  authDomain: "edupulse-acb26.firebaseapp.com",
  projectId: "edupulse-acb26",
  storageBucket: "edupulse-acb26.firebasestorage.app",
  messagingSenderId: "440520413107",
  appId: "1:440520413107:web:d98af1ed0b6b0a0be6c5c6",
  measurementId: "G-KEZG38RNJX",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
