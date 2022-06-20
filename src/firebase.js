// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3Mv67__Xp5yLYXYrXgScAklWZqRq0Qd0",
  authDomain: "projet-nodejs-react.firebaseapp.com",
  projectId: "projet-nodejs-react",
  storageBucket: "projet-nodejs-react.appspot.com",
  messagingSenderId: "938701393577",
  appId: "1:938701393577:web:8c9e1481a0eec59ef0a3b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore(app)



export {app, auth, firestore};