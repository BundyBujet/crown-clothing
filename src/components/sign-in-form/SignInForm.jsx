import React from "react";
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import Style from "./SignIn.module.scss";
import Button from "../button/Button";

const defualtForm = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFileds, setFormFields] = useState(defualtForm);
  const { email, password } = formFileds;

  const signInWIthGoogle = async () => {
    await signInWithGooglePopup();
  };

  //clear the inputfields
  const clearForm = () => {
    setFormFields(defualtForm);
  };

  //handel the form update
  const formHandler = (event) => {
    const { name, value } = event.target;

    //[name]=> so it wont use the name value as the property name but the -name- as property name
    setFormFields({ ...formFileds, [name]: value });
  };

  //submit handler
  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      clearForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        case "auth/user-not-found":
          alert("Wrong Email");
          break;
        default:
          console.log(error.message);
      }
    }
  };

  return (
    <div className={Style.signUpContainer}>
      <h2>Aleardy Have an Account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={formHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={formHandler}
          name="password"
          value={password}
        />
        <div className={Style.buttonsContainer}>
          <Button btnType="submit">SignIn</Button>
          <Button
            btnType="button"
            buttonType="google"
            onClick={signInWIthGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
