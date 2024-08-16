// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7edfIz32kPrbF7h4UK0ym7jfmnkrI_us",
    authDomain: "face-recognition-f37fb.firebaseapp.com",
    databaseURL: "https://face-recognition-f37fb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "face-recognition-f37fb",
    storageBucket: "face-recognition-f37fb.appspot.com",
    messagingSenderId: "503347611652",
    appId: "1:503347611652:web:b46def3f22b2b790e7cd51"
    
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export {database};
