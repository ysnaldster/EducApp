import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhAq3Ru8Z_mjtdZ8JOHuFU5vveGAOuYxA",
  authDomain: "educcap-de-prueba-1.firebaseapp.com",
  databaseURL: "https://educcap-de-prueba-1-default-rtdb.firebaseio.com",
  projectId: "educcap-de-prueba-1",
  storageBucket: "educcap-de-prueba-1.appspot.com",
  messagingSenderId: "32360618649",
  appId: "1:32360618649:web:c50f43b317a72f137d3608",
  measurementId: "G-QFGPXYS08T"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
