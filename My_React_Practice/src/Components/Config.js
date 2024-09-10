
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB0YFUT5H3Ug1UhqES1nfX6874_zpc1tvA",
  authDomain: "my-first-project-c5fb7.firebaseapp.com",
  projectId: "my-first-project-c5fb7",
  storageBucket: "my-first-project-c5fb7.appspot.com",
  messagingSenderId: "214992268907",
  appId: "1:214992268907:web:70cce560aea21f85e48b2e",
  measurementId: "G-L3L4QP7KJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};