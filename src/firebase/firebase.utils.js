import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAua6FEsvx5i9QorYwR-ELMjA1Z1dbNM_A",
  authDomain: "crwn-clothing-42480.firebaseapp.com",
  projectId: "crwn-clothing-42480",
  storageBucket: "crwn-clothing-42480.appspot.com",
  messagingSenderId: "1076357196818",
  appId: "1:1076357196818:web:19ef67ecfd84b6ec177ccb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
