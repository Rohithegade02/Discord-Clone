import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLTN6FUsyl3pYWEefDyHNbOqoqyU3Kt1c",
  authDomain: "discord-fa437.firebaseapp.com",
  projectId: "discord-fa437",
  storageBucket: "discord-fa437.appspot.com",
  messagingSenderId: "146346618741",
  appId: "1:146346618741:web:a226d1230e261ae079ad3c",
  measurementId: "G-ZE4C8LJBEW",
};
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
