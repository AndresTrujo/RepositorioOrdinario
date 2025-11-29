
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9cBMJY36Ydzbu3hcMht1-VryOQ5OhPII",
  authDomain: "demofirebaseauth-a766b.firebaseapp.com",
  projectId: "demofirebaseauth-a766b",
  storageBucket: "demofirebaseauth-a766b.firebasestorage.app",
  messagingSenderId: "768055673078",
  appId: "1:768055673078:web:db73f80a8884dbc3cfbc2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);