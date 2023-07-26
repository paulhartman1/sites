// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';  
import { getAuth, onAuthStateChanged } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1s5Ci-gLVtHp1u9dLr8SiQTdxM6B4jfY",
  authDomain: "dgh0-392921.firebaseapp.com",
  projectId: "dgh0-392921",
  storageBucket: "dgh0-392921.appspot.com",
  messagingSenderId: "558799594031",
  appId: "1:558799594031:web:e4e40d5a03e06103369cda",
  measurementId: "G-2B3F0PSRX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid);
  } else {
    console.log("no user");
    // User is signed out
  }
});
console.log(app);
//const analytics = getAnalytics(app);

const storage = getStorage(app);
export default storage;