import React from "react";
import { HeroContainer, Introduction } from "./Hero.style";
import Button from "@/components/Button/Button";
import { FaMobileAlt } from "react-icons/fa";
import { CgLivePhoto } from "react-icons/cg";
import { FiBox } from "react-icons/fi";
import Image from "next/image";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

const HeroSection = () => {
  return (
    <HeroContainer>
      <div className="header" data-aos="fade-right" data-aos-delay="1000">
        <div className="hero-text">
            <p>Open Free Crypto Trading Account</p>
            <h1>
              Join the Future of Blockchain <br /> Buy & Trade Crypto
            </h1>

          <Button size={"small"}>Get started</Button>
        </div>
      </div>
    </HeroContainer>
  );
};

export { HeroSection };
