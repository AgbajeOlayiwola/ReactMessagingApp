import firebase from "firebase"
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyB0Z7McglL0DKunCBnhsJJNf3VWFAStzmw",
  authDomain: "messageapp-c1492.firebaseapp.com",
  databaseURL: "https://messageapp-c1492-default-rtdb.firebaseio.com",
  projectId: "messageapp-c1492",
  storageBucket: "messageapp-c1492.appspot.com",
  messagingSenderId: "577070522064",
  appId: "1:577070522064:web:0681621b4a7d28847e08d5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider, storage};