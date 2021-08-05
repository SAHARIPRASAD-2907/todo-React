// const firebaseConfig = {
//   apiKey: "AIzaSyDDpKiZvTbqvgfLfHj8Qt1O2oSIPc5hA0M",
//   authDomain: "todo-app-8cfdd.firebaseapp.com",
//   projectId: "todo-app-8cfdd",
//   storageBucket: "todo-app-8cfdd.appspot.com",
//   messagingSenderId: "554625484515",
//   appId: "1:554625484515:web:63c6e27f4c56d07a57e7d6",
//   measurementId: "G-H0LTJKGT7B"
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDpKiZvTbqvgfLfHj8Qt1O2oSIPc5hA0M",
    authDomain: "todo-app-8cfdd.firebaseapp.com",
    projectId: "todo-app-8cfdd",
    storageBucket: "todo-app-8cfdd.appspot.com",
    messagingSenderId: "554625484515",
    appId: "1:554625484515:web:63c6e27f4c56d07a57e7d6",
    measurementId: "G-H0LTJKGT7B"
});

const  db = firebaseApp.firestore()
// const auth = firebase.auth();
// const storage = firebase.storage();


export default db;
