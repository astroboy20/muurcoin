import React from "react";
import { ButtonStyle, SmallButtonStyle } from "./Button.style";

const Button = ({ size, children, OnClick }) => {
  return size === "small" ? (
    <SmallButtonStyle size={size} onClick={OnClick}>
      {children}
    </SmallButtonStyle>
  ) : (
    size === "large" && (
      <>
        {" "}
        <ButtonStyle size={size} onClick={OnClick}>
          {children}
        </ButtonStyle>
      </>
    )
  );
};

export default Button;
