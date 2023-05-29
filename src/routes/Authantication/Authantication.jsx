import React from "react";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";
import "./Authantication.style.scss";

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// the auth actes as a authantication memeory bank to see if you are authannticated or not even if you leave the app

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

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Signin;
