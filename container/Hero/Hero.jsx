import React from "react";
import { HeroContainer } from "./Hero.style";
import Link from "next/link"
import Button from "@/components/Button/Button";

const HeroSection = () => {
  return (
    <HeroContainer>
      <div className="header" data-aos="fade-right" data-aos-delay="1000">
        <div className="hero-text">
            <p>Open Free Crypto Trading Account</p>
            <h1>
              Join the Future of Blockchain <br /> Buy & Trade Crypto
            </h1>

          <Button size={"small"}>
          <Link className="section-link" href={"/auth"}>
                Get started
              </Link></Button>
        </div>
      </div>
    </HeroContainer>
  );
};

export { HeroSection };
