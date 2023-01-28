import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCafIigWFnAm-eMlzd3aA-rcNn7RtTHPv4",
    authDomain: "message-app-c5253.firebaseapp.com",
    projectId: "message-app-c5253",
    storageBucket: "message-app-c5253.appspot.com",
    messagingSenderId: "444961483849",
    appId: "1:444961483849:web:9416b2d61707939cd56398",
    measurementId: "G-Z19BK1V19S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()