import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAz6Hlffi0D_1vLBuEz1lUpmlBM-DvmJFc",
    authDomain: "olx-clone-dfa2b.firebaseapp.com",
    projectId: "olx-clone-dfa2b",
    storageBucket: "olx-clone-dfa2b.appspot.com",
    messagingSenderId: "917590690242",
    appId: "1:917590690242:web:3d0d786efd4be7787c2e5b"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);