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
  apiKey: "AIzaSyBj_zsTuDzBQneec5KQGf3Z651EGGrBMHk",
  authDomain: "fexbit-71986.firebaseapp.com",
  projectId: "fexbit-71986",
  storageBucket: "fexbit-71986.firebasestorage.app",
  messagingSenderId: "1090283751021",
  appId: "1:1090283751021:web:d7b57712b5bd3e7c186164"
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
