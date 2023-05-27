//this config is firebase unique google wants it that way
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo_n4XAk3yS4ATofJELaFfuQubN_wGMQE",
  authDomain: "crown-clothing-db-319f3.firebaseapp.com",
  projectId: "crown-clothing-db-319f3",
  storageBucket: "crown-clothing-db-319f3.appspot.com",
  messagingSenderId: "707505758015",
  appId: "1:707505758015:web:76e0f65af54ba39127bd8a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
// initailize the sign in process with Auth And a provider
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// instantiat a db
export const db = getFirestore();

//handel the document checking an creating base on the auth from the provider -Google-
// additionParam is an Object that set the displayename
export const createUserDocFromAuth = async (userAuth, additionParam) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  // userSnashot is the document in the collection User that will house the indeviduial user auth info
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    //the parameter that retruns of the signInWithPop object
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //setDoc(the document refrence,{object if field you want to set})
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionParam,
      });
    } catch (error) {
      console.log("SignIn failed", error.message);
    }
  } else {
    console.log("User Aleady signed in");
    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
