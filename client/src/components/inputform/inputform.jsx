import React from "react";

import "./inputform.scss";

const InputForm = ({ onChangeHandle, label, ...otherProps }) => (
  <div className="form">
    <input className="form-input" onChange={onChangeHandle} {...otherProps} />
    {label ? (
      <label
        className={`${
        otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default InputForm;
