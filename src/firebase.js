import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCqCvkeplpFLwOmLvXkoSvwFfravJ3dv6s",
  authDomain: "disney-rc.firebaseapp.com",
  projectId: "disney-rc",
  storageBucket: "disney-rc.appspot.com",
  messagingSenderId: "621382825638",
  appId: "1:621382825638:web:838ee28cbc44d86fdd2667",
  measurementId: "G-CEH7L029Q1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
