import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnZbt3SmYI82v5su3AfbG4DfkWbaUApVc",
  authDomain: "olx-clone-36453.firebaseapp.com",
  projectId: "olx-clone-36453",
  storageBucket: "olx-clone-36453.appspot.com",
  messagingSenderId: "1047522499371",
  appId: "1:1047522499371:web:8afabdb0d7d1ad08a3836e"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);