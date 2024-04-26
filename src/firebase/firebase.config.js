// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD_5XhtREj6n-L5WgpYOK5FoVqL9veQ60",
  authDomain: "assignment-10-4fd57.firebaseapp.com",
  projectId: "assignment-10-4fd57",
  storageBucket: "assignment-10-4fd57.appspot.com",
  messagingSenderId: "121366972530",
  appId: "1:121366972530:web:b24938ad4227d779119aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;