import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    // apiKey: "AIzaSyBNfaSOhfb7Fn5UJampB0aFoEUfuXAoEmU",
    // authDomain: "moviw-auth.firebaseapp.com",
    // projectId: "moviw-auth",
    // storageBucket: "moviw-auth.appspot.com",
    // messagingSenderId: "246125649856",
    // appId: "1:246125649856:web:0cac34cdf3e4356f5cb225",

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export default app;
