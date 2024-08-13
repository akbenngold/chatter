import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJH1hzBbYyHmo3mLg1UnxsJyQdgBq25_I",
  authDomain: "chatter-9b2b4.firebaseapp.com",
  projectId: "chatter-9b2b4",
  storageBucket: "chatter-9b2b4.appspot.com",
  messagingSenderId: "1085860566139",
  appId: "1:1085860566139:web:735bbb0278e97d34f37ede",
  measurementId: "G-ZL8F6B2B41",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = new getStorage();
export const db = getFirestore(app);
