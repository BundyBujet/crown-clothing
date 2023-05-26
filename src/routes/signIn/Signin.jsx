import React from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  );
};

export default Signin;
