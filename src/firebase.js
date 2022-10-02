// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2sRunysHWblHeKNpzeGzPahkQMC2ZRBc",
  authDomain: "linkedin-e0ecb.firebaseapp.com",
  projectId: "linkedin-e0ecb",
  storageBucket: "linkedin-e0ecb.appspot.com",
  messagingSenderId: "73493637223",
  appId: "1:73493637223:web:a52b935136c2d116f00cc2",
  measurementId: "G-XZHVHFGFFB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
