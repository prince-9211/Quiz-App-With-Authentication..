import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCp6_5oNUg7e24tymvXANUn3f2Ioyd-H6o",
  authDomain: "authentication-91572.firebaseapp.com",
  projectId: "authentication-91572",
  storageBucket: "authentication-91572.appspot.com",
  messagingSenderId: "758698898505",
  appId: "1:758698898505:web:590b2c0cf9327828a53b98",
  measurementId: "G-DQD8Z37LZE"
};

const loginButton = initializeApp(firebaseConfig);
const auth = getAuth();
export {loginButton, auth}

