import React from "react";
import Style from "./Button.module.scss";

const Button_Type_Classes = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, btnType, onClick }) => {
  return (
    <button
      className={`${Style.buttonContainer} ${Button_Type_Classes[buttonType]}`}
      type={btnType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
