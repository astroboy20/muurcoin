/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FooterContainer } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="top">
        <div className="left">
          <h3>Let's talk!</h3>
          <p>+12 345 678 9101</p>
          <p>forntendmart@gmail.com</p>
          <p>Cecilia Chapman 711-2000 Nulle St. Mankato Mississippi 90022</p>
        </div>
        <div className="center">
          <h3>Links</h3>
          <p>Home</p>
          <p>Overview</p>
          <p>Spot-trading</p>
        </div>
        <div className="right">
          <h3>NewsLetter</h3>
        </div>
      </div>
      <hr className="hr" />
      <div className="bottom">
        <p>2023 All Rights Reserved Terms of Service | Privacy Terms</p>
      </div>
    </FooterContainer>
  );
};

export { Footer };
