import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAARFkIxbOtr3xgoQC9Cn3BNmos7AzSZLs",
  authDomain: "netflix-clone-3a63c.firebaseapp.com",
  projectId: "netflix-clone-3a63c",
  storageBucket: "netflix-clone-3a63c.firebasestorage.app",
  messagingSenderId: "409920573442",
  appId: "1:409920573442:web:8eba21ad938c2148e4d71b"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db))
    }catch(err){

    }

}
