import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import "./SignUp.style.scss";
import Button from "../button/Button";

const defualtForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFileds, setFormFields] = useState(defualtForm);
  const { displayName, email, password, confirmPassword } = formFileds;

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

    if (password !== confirmPassword) {
      alert("password didn't match");
      return;
    }
    try {
      //set the Auth with email & password
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      //create the Doc with Auth and object for adding displayName to the Doc
      createUserDocFromAuth(user, { displayName: displayName });

      clearForm();

      console.log(user);
    } catch (error) {
      //cheak if already sign In
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in Use");
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't Have an Account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={formHandler}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={formHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
