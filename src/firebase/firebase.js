import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf71zFwsEXjCkD_PysWU_hGCazsXD3wq0",
  authDomain: "mealkit-92750.firebaseapp.com",
  projectId: "mealkit-92750",
  storageBucket: "mealkit-92750.firebasestorage.app",
  messagingSenderId: "43632864720",
  appId: "1:43632864720:web:d51a7c330d0153d2c05dd5",
  measurementId: "G-2H5Q4CEQG2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);