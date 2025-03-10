import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAaAJUUBi4otkE6u9ru7CrZSmytvIqx0PA",
  authDomain: "olx-clone-f1171.firebaseapp.com",
  projectId: "olx-clone-f1171",
  storageBucket: "olx-clone-f1171.firebasestorage.app",
  messagingSenderId: "987028115853",
  appId: "1:987028115853:web:3699c79fe8bcc5256f6dc4"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const googleProvider = new  GoogleAuthProvider()
