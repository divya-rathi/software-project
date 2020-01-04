import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtkHaqBq8TzOR4C_KbbiZUol6kMHsssCc",
  authDomain: "crp-backend-server.firebaseapp.com",
  databaseURL: "https://crp-backend-server.firebaseio.com",
  projectId: "crp-backend-server",
  storageBucket: "crp-backend-server.appspot.com",
  messagingSenderId: "913988629768",
  appId: "1:913988629768:web:f09d6d0621a6c2c03ba8bd",
  measurementId: "G-KYDMDCL5CH"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : "";

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const fireDb = firebase.firestore();
export default firebase;
