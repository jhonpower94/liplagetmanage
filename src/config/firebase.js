import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Set up Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCVga0u3ZsB4IrUcBFkw7j4b50EqhRD5GY",
  authDomain: "trustcoin-44e97.firebaseapp.com",
  projectId: "trustcoin-44e97",
  storageBucket: "trustcoin-44e97.appspot.com",
  messagingSenderId: "354799327569",
  appId: "1:354799327569:web:0b24e913ffd250bc55db70"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

const storage = getStorage(app);

// Listen only for logged in state

export {
  app,
  auth,
  db,
  storage,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  setPersistence,
};
