import React from "react";
import Style from "./FormInput.module.scss";

const FormInput = ({ label, ...otherProp }) => {
  return (
    <div className={Style.group}>
      <input className={Style.formInput} {...otherProp} />
      {label && (
        <label
          className={`${otherProp.value.length ? Style.shrink : ""} ${
            Style.formInputLabel
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
