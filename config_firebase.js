// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM8M3D8HKJtxqIGIqtJWwenPuuy25qmIA",
  authDomain: "audiopair.firebaseapp.com",
  projectId: "audiopair",
  storageBucket: "audiopair.appspot.com",
  messagingSenderId: "278610435172",
  appId: "1:278610435172:web:a085710c83f73d4532d371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;