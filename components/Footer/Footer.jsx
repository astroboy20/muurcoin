/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FooterContainer } from "./Footer.style";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

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
          <p>Fiat</p>

        </div>

        <div className="right">
          <h3>Exchange</h3>
          <p>BTC to USDT</p>
          <p>ETH to DOGE</p>
          <p>BTC to ETH</p>
        </div>

        <div className="right">
          <h3>Features</h3>
          <p>Transfer</p>
          <p>Exchange</p>
        </div>

        <div className="social-media">
          <h3>Social Media</h3>
          <div className="icons">
            {" "}
            <FaXTwitter />
            <FaInstagramSquare />
            <FaWhatsappSquare />
            <FaFacebookF />
          </div>
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
