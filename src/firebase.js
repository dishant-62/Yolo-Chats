
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";


var app;
var storage;

try {
  app = getApp();
} catch (error) {
  const firebaseConfig = {
    apiKey: "AIzaSyC0DpP_e4eP-eWcy8HSfjnrRcjG_8K7a6w",
    authDomain: "yolo-connect-2b214.firebaseapp.com",
    projectId: "yolo-connect-2b214",
    storageBucket: "yolo-connect-2b214.appspot.com",
    messagingSenderId: "36163474299",
    appId: "1:36163474299:web:97bf832d0b5f211718e3de",
    measurementId: "G-FV65DESPC1"
  };
  app = initializeApp(firebaseConfig);
}
storage = getStorage(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, storage };
