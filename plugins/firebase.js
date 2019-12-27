import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
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

  firebase.initializeApp(config);
}

const fireDb = firebase.firestore();

export { fireDb };
