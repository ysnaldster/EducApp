import firebase from "firebase/aoo"

import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAoM1JK3WQUDQ3Hch3FV4x-WJEVw2hqAEQ",
    authDomain: "educapp-1.firebaseapp.com",
    projectId: "educapp-1",
    storageBucket: "educapp-1.appspot.com",
    messagingSenderId: "1037407072622",
    appId: "1:1037407072622:web:3258979ab080308279d17f",
    measurementId: "G-TKQENWTQJ1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log("Firebase configurado...")

  export default firebase.firestore()