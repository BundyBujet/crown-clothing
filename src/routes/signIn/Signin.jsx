import React from "react";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// the auth actes as a authantication memeory bank to see if you are authannticated or not even if you leave the app
import {
  auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  // useEffect(() => {
  //   // get the redirect result with the auth -memeory bank-

  //   const getRedirectRespose = async () => {
  //     const response = await getRedirectResult(auth);
  //     // if signIn creat doc
  //     // getRedirectResult() responsed with null if not authanticated
  //     if (response) {
  //       createUserDocFromAuth(response.user);
  //     }
  //   };
  //   // cleanUp the useeffect
  //   getRedirectRespose();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default Signin;
