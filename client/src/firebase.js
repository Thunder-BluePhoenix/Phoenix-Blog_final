// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "phoenix-blog-3189f.firebaseapp.com",
  projectId: "phoenix-blog-3189f",
  storageBucket: "phoenix-blog-3189f.appspot.com",
  messagingSenderId: "717958104935",
  appId: "1:717958104935:web:5932f703872d32fdf411c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
