
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
  

const firebaseConfig = {
    apiKey: "AIzaSyDky5xn8nQm4D--4cmk7AHYZFBxXB2grr4",
    authDomain: "movibes-857ac.firebaseapp.com",
    projectId: "movibes-857ac",
    storageBucket: "movibes-857ac.appspot.com",
    messagingSenderId: "565846481533",
    appId: "1:565846481533:web:e39e5aadfb10d760f5af14"
  };

const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app);
export  const provider = new GoogleAuthProvider();

export default ({auth,provider});
