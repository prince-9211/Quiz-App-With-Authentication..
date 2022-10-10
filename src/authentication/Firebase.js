import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDojn9cCHOl2yFEXBxP7DHsKeMWMJBVTlo",
  authDomain: "authentication-e462d.firebaseapp.com",
  projectId: "authentication-e462d",
  storageBucket: "authentication-e462d.appspot.com",
  messagingSenderId: "1009488178271",
  appId: "1:1009488178271:web:e5108d45fa714377b2ffea",
  measurementId: "G-NXBKNGLSR4"
};

const loginButton = initializeApp(firebaseConfig);
const auth = getAuth();
export {loginButton, auth}

