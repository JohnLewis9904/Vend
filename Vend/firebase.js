// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
// import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBImr8gf_Wupk-CjQ8nbO8tjDENtlLnTgo",
  authDomain: "vend-7ad56.firebaseapp.com",
  projectId: "vend-7ad56",
  storageBucket: "vend-7ad56.appspot.com",
  messagingSenderId: "129882785054",
  appId: "1:129882785054:web:41025252a849da1dec750f",
  measurementId: "G-6NW9M9JDHL"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);
export const col = collection(database, 'Item');

export const provider = new GoogleAuthProvider();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const app = initializeApp(firebaseConfig);
export {app, firebase}