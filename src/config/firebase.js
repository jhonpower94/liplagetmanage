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
  apiKey: "AIzaSyCNios8rrMbld4jR9Wrf6RtuC2ZAVvIXSY",
  authDomain: "liplaget.firebaseapp.com",
  projectId: "liplaget",
  storageBucket: "liplaget.firebasestorage.app",
  messagingSenderId: "301312289712",
  appId: "1:301312289712:web:42ba03540c9602eae94475"
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
