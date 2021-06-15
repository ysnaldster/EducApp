import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_JldSdOOsHYlp33F7D7H5MhNsmVaCXlM",
  authDomain: "educapp-392c9.firebaseapp.com",
  projectId: "educapp-392c9",
  storageBucket: "educapp-392c9.appspot.com",
  messagingSenderId: "932667572091",
  appId: "1:932667572091:web:b07cbad927e69cd55fc7de",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
