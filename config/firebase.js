import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "proyecto-nextjs-coder.firebaseapp.com",
  projectId: "proyecto-nextjs-coder",
  storageBucket: "proyecto-nextjs-coder.appspot.com",
  messagingSenderId: "727875746644",
  appId: "1:727875746644:web:cc3695f55d41149db626c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
