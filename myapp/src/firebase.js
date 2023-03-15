import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDi0TGF6ZNQy9l0g8-OTUShrlcBQ4gpd7w",
    authDomain: "clone-94196.firebaseapp.com",
    projectId: "clone-94196",
    storageBucket: "clone-94196.appspot.com",
    messagingSenderId: "838096154267",
    appId: "1:838096154267:web:1f1b8e22e8a1d5daee203e"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage };