import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCs8RpUYGVY29DETh9XMSbeHYDCSdoeqCM",
  authDomain: "redlion-db.firebaseapp.com",
  databaseURL: "https://redlion-db.firebaseio.com",
  projectId: "redlion-db",
  storageBucket: "redlion-db.appspot.com",
  messagingSenderId: "1099326480504",
  appId: "1:1099326480504:web:5b0192cafe5ae609bb4d8d",
  measurementId: "G-EGHVF0Q91N",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error adding user to database.", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
