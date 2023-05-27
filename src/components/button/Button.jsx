import React from "react";
import "./Button.style.scss";

const Button_Type_Classes = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType }, ...otheProp) => {
  return (
    <button
      className={`button-container ${Button_Type_Classes[buttonType]}`}
      {...otheProp}
    >
      {children}
    </button>
  );
};

export default Button;
