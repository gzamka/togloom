import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore"

export const firebaseConfig = {
  apiKey: "AIzaSyBASncoFHm9SgWgwPNG5vwd5SPru3vBTrc",
  authDomain: "grocery-ad589.firebaseapp.com",
  projectId: "grocery-ad589",
  storageBucket: "grocery-ad589.appspot.com",
  messagingSenderId: "437347665187",
  appId: "1:437347665187:web:5091b8b902caeb3706f896"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);