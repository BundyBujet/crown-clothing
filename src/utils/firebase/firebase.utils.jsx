//this config is firebase unique google wants it that way
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

//initialize the write to db function
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  //the batch taht govern the transaction to the DB --CRUD operation-
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    //path the document reference to add
    //to get the spacific db you'r using for the operation
    //second parameter is the key for the document -title-
    const docRef = doc(collectionRef, object.title.toLowerCase());
    //useing the batch to do a set  operation and passing the document to set it with object as value -sec param-
    batch.set(docRef, object);
  });
  //wait for your set -commit- to be handeled
  await batch.commit();
  console.log("Done");
};

export const getCategoriesAndDocuments = async () => {
  // pase the collection refrence (database, collection Name);
  const collectionRef = collection(db, "categories");
  //generate the query using the collection refrence
  //it return an object with snapshot
  const genQuery = query(collectionRef);
  //use the snapshot to get the document
  //we use it to fetch this document spapshots -actual data inside-
  const querySnapshot = await getDocs(genQuery);

  const categoryMap = querySnapshot.docs.reduce((acc, querySnapshot) => {
    const { title, items } = querySnapshot.data();

    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

//handel the document checking an creating base on the auth from the provider -Google-
// additionParam is an Object that set the displayename
export const createUserDocFromAuth = async (userAuth, additionParam) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  // userSnashot is the document in the collection User that will house the indeviduial user auth info

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
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);
