import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACRBwd4cHVF_imSIOJdnB48dYicazKvoc",
  authDomain: "olx-clone-b8a46.firebaseapp.com",
  projectId: "olx-clone-b8a46",
  storageBucket: "olx-clone-b8a46.appspot.com",
  messagingSenderId: "871713789412",
  appId: "1:871713789412:web:a5dc4e265f8fcc8a41a3f1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
