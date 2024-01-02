// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiDO-b0yvWkK34r7QSRiEI2bFRmU_3R5w",
  authDomain: "expense-tracker-cb6c1.firebaseapp.com",
  projectId: "expense-tracker-cb6c1",
  storageBucket: "expense-tracker-cb6c1.appspot.com",
  messagingSenderId: "218958162391",
  appId: "1:218958162391:web:ab145e90568d82cd61c392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)