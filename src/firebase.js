import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAc974aPMeklBlPsdqAo7FsY_TSzLwyBU8",
    authDomain: "messenger-clone-22526.firebaseapp.com",
    databaseURL: "https://messenger-clone-22526.firebaseio.com",
    projectId: "messenger-clone-22526",
    storageBucket: "messenger-clone-22526.appspot.com",
    messagingSenderId: "68114748298",
    appId: "1:68114748298:web:f80846cd589c1cb3c5ee73",
    measurementId: "G-JT4F520EGT"
});

const db = firebase.firestore();

export { db };
