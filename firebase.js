import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDNJiQPZc9ZsvEM17uqdmceqjBwLKyWtmg",
    authDomain: "docs-2-9f898.firebaseapp.com",
    projectId: "docs-2-9f898",
    storageBucket: "docs-2-9f898.appspot.com",
    messagingSenderId: "906370240701",
    appId: "1:906370240701:web:0d7bcf3bfc120da36327d4"
};
  

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export { db };