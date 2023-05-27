import React from "react";
import "./FormInput.style.scss";

const FormInput = ({ label, ...otherProp }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProp} />
      {label && (
        <label
          className={`${
            otherProp.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
