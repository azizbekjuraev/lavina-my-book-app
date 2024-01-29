// firebase.js

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa8-Cgs0TN607Qoz7Mfcdx37NA-zjoqsI",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "web-book-store-be33c",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Check if a Firebase app has not already been initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
