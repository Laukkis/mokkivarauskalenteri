import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/auth");

export const config = {
  apiKey: "AIzaSyCgj59-aTIzB-cX37jv8iMLZj18xKUSlBM",
  authDomain: "varauskalenteri-mokki.firebaseapp.com",
  projectId: "varauskalenteri-mokki",
  storageBucket: "varauskalenteri-mokki.appspot.com",
  messagingSenderId: "994449697592",
  appId: "1:994449697592:web:3ac77ca572a9ced99f6fcd",
};
//initialize firebase
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
