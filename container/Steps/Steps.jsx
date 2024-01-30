import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { StepContainer } from "./Steps.style";

const Steps = () => {
  return (
    <StepContainer>
      <div className="skill-container" data-aos="fade-up" data-aos-delay="1000">
        <div className="header">
          <h1> Get started in a few minutes</h1>
          <p>Supports a variety of the most popular digital currencies.</p>
        </div>

        <div className="informations">
          <div className="information">
            <span>Step 01</span>
            <h3>Create an account</h3>
            <p>
              {" "}
              Once you've set up your wallet of choice, connect it to OpenSeaby
              clicking the NFT Marketplacein.
            </p>
          </div>
          <div className="information">
            <span>Step 02</span>
            <h3>Link your bank account</h3>
            <p>
              {" "}
              Once you've set up your wallet of choice, connect it to OpenSeaby
              clicking the NFT Marketplacein.
            </p>
          </div>
          <div className="information">
            <span>Step 03</span>

            <h3>Start buying & selling</h3>
            <p>
              {" "}
              Once you've set up your wallet of choice, connect it to OpenSeaby
              clicking the NFT Marketplacein.
            </p>
          </div>
        </div>
        <div className="percentage">
          <div className="text">
            <h3>Earn up to $13 worth of crypto</h3>
            <p>
              Discover how specific cryptocurrencies work — and get <br/> a bit of
              each crypto to try out for yourself.
            </p>
          </div>
         
            <button className="button">Get started</button>
          
        </div>
      </div>
    </StepContainer>
  );
};

export { Steps };
