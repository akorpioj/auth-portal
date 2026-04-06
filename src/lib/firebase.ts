import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  projectId: "pew-bab23",
  appId: "1:1085978783517:web:176e7cb8f828ebbc0b3bf4",
  storageBucket: "pew-bab23.firebasestorage.app",
  apiKey: "AIzaSyAuP4Ijy_npXcewmFT9w0GlUFqV821oX20",
  authDomain: "pew-bab23.firebaseapp.com",
  messagingSenderId: "1085978783517",
  measurementId: "G-NRSJC0CJHP",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider("microsoft.com");
export default app;
