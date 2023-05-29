import React from "react";
import "./Button.style.scss";

const Button_Type_Classes = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, btnType, onClick }) => {
  return (
    <button
      className={`button-container ${Button_Type_Classes[buttonType]}`}
      type={btnType}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
