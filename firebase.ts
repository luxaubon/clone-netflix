// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUkhrNmhS-QCx_uRv6T8NFGkHDULZ7oKM",
  authDomain: "clone-nf-new.firebaseapp.com",
  projectId: "clone-nf-new",
  storageBucket: "clone-nf-new.appspot.com",
  messagingSenderId: "904893698056",
  appId: "1:904893698056:web:9b3911e74a819bf9e441bd"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }