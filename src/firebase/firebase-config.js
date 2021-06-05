import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyC_JldSdOOsHYlp33F7D7H5MhNsmVaCXlM",
//     authDomain: "educapp-392c9.firebaseapp.com",
//     projectId: "educapp-392c9",
//     storageBucket: "educapp-392c9.appspot.com",
//     messagingSenderId: "932667572091",
//     appId: "1:932667572091:web:b07cbad927e69cd55fc7de"
// };

// firebase.initializeApp(firebaseConfig);

//Esta configuración de firebase es temporar y solo para pruebasX
const firebaseConfig = {
  apiKey: "AIzaSyAoM1JK3WQUDQ3Hch3FV4x-WJEVw2hqAEQ",
  authDomain: "educapp-1.firebaseapp.com",
  projectId: "educapp-1",
  storageBucket: "educapp-1.appspot.com",
  messagingSenderId: "1037407072622",
  appId: "1:1037407072622:web:3258979ab080308279d17f",
  measurementId: "G-TKQENWTQJ1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
