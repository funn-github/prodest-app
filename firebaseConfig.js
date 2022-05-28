// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3rTgLLKhNJQwjAsCvqH1socVN91ZgtKk",
  authDomain: "nextjstest-86e6d.firebaseapp.com",
  projectId: "nextjstest-86e6d",
  storageBucket: "nextjstest-86e6d.appspot.com",
  messagingSenderId: "987293321655",
  appId: "1:987293321655:web:d23b74629827307c784032"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const db = getFirestore(app);
