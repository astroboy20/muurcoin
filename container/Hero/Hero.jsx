import React from "react";
import { HeroContainer, Introduction } from "./Hero.style";
import Button from "@/components/Button/Button";
import { FaMobileAlt } from "react-icons/fa";
import { CgLivePhoto } from "react-icons/cg";
import { FiBox } from "react-icons/fi";

const HeroSection = () => {
  return (
    <HeroContainer>
      <div className="header">
        <div className="hero-text">
          <div>
            <h1>MurrCoin</h1>
            <h3> NEXT FUTURE TECHNOLOGY</h3>
          </div>

          <p>
            we provide the best service for your company products in real world
            and in meta-verse
          </p>

          <Button size={"small"}>Get started</Button>
        </div>
      </div>

      <div className="hero-image"></div>
      <Introduction>
        <div className="information">
          <FiBox fontSize={"50px"}color="#B3538B" />
          <h2>Multiple method</h2>
          <p>
            We provide the best services for your company products in real world
            and the meta world
          </p>
        </div>
        <div className="information">
          <CgLivePhoto fontSize={"50px"} color="#B3538B"/>
          <h2>Live tested </h2>
          <p>
            We provide the best services for your company products in real world
            and the meta world
          </p>
        </div>
        <div className="information">
          <FaMobileAlt fontSize={"50px"} color="#B3538B"/>
          <h2>Mobile integration</h2>{" "}
          <p>
            We provide the best services for your company products in real world
            and the meta world
          </p>
        </div>
      </Introduction>
    </HeroContainer>
  );
};

export { HeroSection };
