import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBReV6UrwPhUgcJ9wrj75G32dbjkwGrrCI",
  authDomain: "auth-react-5c5d9.firebaseapp.com",
  databaseURL: "auth-react-5c5d9.firebaseapp.com",
  projectId: "auth-react-5c5d9",
  storageBucket: "auth-react-5c5d9.appspot.com",
  messagingSenderId: "643429436500",
  appId: "1:643429436500:web:d499d367174f1f923571c1",
});

export const auth = app.auth();
export default app;
