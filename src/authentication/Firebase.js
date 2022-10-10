import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB2IxlU9VtPJY6t4wJ_0BtoCDpWcKHXCss",
  authDomain: "authentication-2f339.firebaseapp.com",
  projectId: "authentication-2f339",
  storageBucket: "authentication-2f339.appspot.com",
  messagingSenderId: "953199972744",
  appId: "1:953199972744:web:bb23aa285c1efb09a2aa3d",
  measurementId: "G-Q993D1V95Q"
};

const loginButton = initializeApp(firebaseConfig);
const auth = getAuth();
export {loginButton, auth}

