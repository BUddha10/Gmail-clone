import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKkf8sxlDBvKJrXhl4qAzBI0JFnR8zl7I",
  authDomain: "clone-b5761.firebaseapp.com",
  projectId: "clone-b5761",
  storageBucket: "clone-b5761.appspot.com",
  messagingSenderId: "69355819938",
  appId: "1:69355819938:web:673e0c9e97680f0b7f58fb",
  measurementId: "G-5QS7REBCT3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
