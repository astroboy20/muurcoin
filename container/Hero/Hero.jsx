import React from "react";
import { HeroContainer } from "./Hero.style";

const HeroSection = () => {
  return (
    <HeroContainer>
      <div className="hero-text">
        <div>
          <h1>MurrCoin</h1>
          <h3> NEXT FUTURE TECHNOLOGY</h3>
        </div>

        <p>
          we provide the best service for your company products in real world
          and in meta-verse
        </p>
      </div>
      <div className="hero-image"></div>
    </HeroContainer>
  );
};

export { HeroSection };
