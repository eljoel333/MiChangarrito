// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYH8mUtjjtjxMJqT2NA3yjDoXYpACV3_M",
  authDomain: "coderbdf.firebaseapp.com",
  projectId: "coderbdf",
  storageBucket: "coderbdf.appspot.com",
  messagingSenderId: "959726891706",
  appId: "1:959726891706:web:d80647ef87c831d1720883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);