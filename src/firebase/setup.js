 
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
 import {getFirestore} from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyC3ONoXHgyZGAR9iJ6AuXUeqVBDUL7mBoA",
  authDomain: "whatsaap-clone-9570b.firebaseapp.com",
  projectId: "whatsaap-clone-9570b",
  storageBucket: "whatsaap-clone-9570b.appspot.com",
  messagingSenderId: "1027719903443",
  appId: "1:1027719903443:web:4915650dd15bab83c9fc26"
};

 
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)

export const googleProvider= new GoogleAuthProvider(app)
export const database=getFirestore(app)
