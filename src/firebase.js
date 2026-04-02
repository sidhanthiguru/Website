import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiPHomvAVzDtH17q3w2dDp5VsnsimMEfQ",
  authDomain: "website-ed9df.firebaseapp.com",
  projectId: "website-ed9df",
  storageBucket: "website-ed9df.firebasestorage.app",
  messagingSenderId: "752808427695",
  appId: "1:752808427695:web:9bc6a1869af9dd9934945a",
  measurementId: "G-BT3H0K74EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
