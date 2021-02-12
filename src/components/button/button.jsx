import React from "react";

import { CustomButtonContainer } from "./button.styles";

export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
