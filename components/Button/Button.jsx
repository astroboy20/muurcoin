import React from "react";
import {
  ButtonStyle,
  SmallButtonStyle,
  TransparentButton,
} from "./Button.style";

const Button = ({ size, children, onClick }) => {
  return size === "small" ? (
    <SmallButtonStyle size={size} onClick={onClick}>
      {children}
    </SmallButtonStyle>
  ) : size === "large" ? (
    <>
      {" "}
      <ButtonStyle size={size} onClick={onClick}>
        {children}
      </ButtonStyle>
    </>
  ) : size === "transparent" ? (
    <TransparentButton>{children}</TransparentButton>
  ) : null;
};

export default Button;
