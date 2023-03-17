import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCbtTcW5jVvOQ3_bCeZISJIHYZF4_Yfhjk",
    authDomain: "chat-engine-7a3ac.firebaseapp.com",
    projectId: "chat-engine-7a3ac",
    storageBucket: "chat-engine-7a3ac.appspot.com",
    messagingSenderId: "750421171287",
    appId: "1:750421171287:web:d6039043b97008427fd712",
  })
  .auth();
