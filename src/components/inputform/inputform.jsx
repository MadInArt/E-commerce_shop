import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./inputform.styles";

const InputForm = ({ onChangeHandle, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={onChangeHandle} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);
export default InputForm;
