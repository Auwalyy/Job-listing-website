import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAARFkIxbOtr3xgoQC9Cn3BNmos7AzSZLs",
  authDomain: "netflix-clone-3a63c.firebaseapp.com",
  projectId: "netflix-clone-3a63c",
  storageBucket: "netflix-clone-3a63c.firebasestorage.app",
  messagingSenderId: "409920573442",
  appId: "1:409920573442:web:8eba21ad938c2148e4d71b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    console.log("User signed up successfully");
  } catch (error) {
    console.error("Error during signup:", err);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful");
  } catch (error) {
    console.error("Error during login:", error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export { auth, db, signup, login, logout };
