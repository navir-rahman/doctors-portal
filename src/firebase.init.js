// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqLmcWLWtvOuBy1fm-XL3vd8pv9sEw-GI",
  authDomain: "doctors-portal-6736f.firebaseapp.com",
  projectId: "doctors-portal-6736f",
  storageBucket: "doctors-portal-6736f.appspot.com",
  messagingSenderId: "532278141220",
  appId: "1:532278141220:web:068785a45692dbd12e93b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;