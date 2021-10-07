import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCY-yklvlBG7c1yH-kHm6PZMqwcAcWqXkI",
    authDomain: "quizzhandicap.firebaseapp.com",
    projectId: "quizzhandicap",
    storageBucket: "quizzhandicap.appspot.com",
    messagingSenderId: "936983810507",
    appId: "1:936983810507:web:8f506047b113773d4d664e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;