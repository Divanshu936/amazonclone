import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAFToHp5UOTYPfDL5dezhjGzEcKdntHbcM",
    authDomain: "new-ba4dc.firebaseapp.com",
    projectId: "new-ba4dc",
    storageBucket: "new-ba4dc.appspot.com",
    messagingSenderId: "461208391853",
    appId: "1:461208391853:web:39849e52901ab362927624",
    measurementId: "G-DRK2C394V7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };