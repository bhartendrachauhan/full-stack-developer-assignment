import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAmsI75J2WIChuvsfyeXhurLNJSmGurhbQ",
  authDomain: "full-stack-assignment-def31.firebaseapp.com",
  projectId: "full-stack-assignment-def31",
  storageBucket: "full-stack-assignment-def31.appspot.com",
  messagingSenderId: "571561654370",
  appId: "1:571561654370:web:6735637c0d9f454b54b93b",
  measurementId: "G-2NZB4MDPB2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
