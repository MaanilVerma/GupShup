// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBOfOAi8SEptSFgtBu2Id19E5eGTCJ0UfY",
  authDomain: "gupshup2121.firebaseapp.com",
  projectId: "gupshup2121",
  storageBucket: "gupshup2121.appspot.com",
  messagingSenderId: "847565062318",
  appId: "1:847565062318:web:745e40f7a83f5ddd9a6d3f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
