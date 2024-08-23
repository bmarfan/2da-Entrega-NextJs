import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQuRfRvZJdiQVVjPPo1xGDY4flpztgKxw",
  authDomain: "proyecto-nextjs-coder.firebaseapp.com",
  projectId: "proyecto-nextjs-coder",
  storageBucket: "proyecto-nextjs-coder.appspot.com",
  messagingSenderId: "727875746644",
  appId: "1:727875746644:web:cc3695f55d41149db626c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)