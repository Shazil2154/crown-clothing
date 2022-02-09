import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <CustomButtonContainer className={` ${inverted ? "inverted" : ""} custom-button`} {...otherProps}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
