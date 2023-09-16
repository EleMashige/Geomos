// src/firebase.js
import firebase from 'firebase/compat/app'; // Note the 'compat' part
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDj1YgcIDpTdAH3iACyFlATYoXychaGaIg",
  authDomain: "clarence-fa6e7.firebaseapp.com",
  projectId: "clarence-fa6e7",
  storageBucket: "clarence-fa6e7.appspot.com",
  messagingSenderId: "672646766521",
  appId: "1:672646766521:web:b4e808195d20ddfdd96068",
  measurementId: "G-TXHXG7PZ7M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.database()
export const storage = firebase.storage();
export default firebase;

