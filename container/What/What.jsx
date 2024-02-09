import React from "react";
import { WhatContainer } from "./What.style";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "@/components/Button/Button";
import { RiBriefcase3Fill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";
import { MdInsertChart } from "react-icons/md";

const What = () => {
  return (
    <WhatContainer>
      <div className="what-container" data-aos="fade-up" data-aos-delay="1000">
        <div className="image">
          <Image
            src={"/images/hero.jpg"}
            width={600}
            height={500}
            alt="what-image"
            objectFit="contain"
            style={{
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="responsive-image">
          <Image
            src={"/images/hero.jpg"}
            width={350}
            height={350}
            alt="what-image"
            objectFit="contain"
            style={{
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="text">
          <div className="header">
            <h1>Create your cryptocurrency portfolio today</h1>
            <p>Start your first trade with these easy steps.</p>
          </div>

          <div className="body">
            <div className="icon">
              <RiBriefcase3Fill fontSize={"30px"} color="#8358FF" />
            </div>
            <div>
              <h3>Verify your identity</h3>
              <p>
                {" "}
                Complete the identity verification process to secure your
                account and transactions.
              </p>
            </div>
          </div>
          <div className="body">
            <div>
              <FaUserPlus fontSize={"30px"} color="#8358FF"/>
            </div>
            <div>
              <h3>Fund your account.</h3>
              <p>
                Add funds to your crypto account to start trading crypto. You
                can add funds with a variety of payment methods.
              </p>
            </div>
          </div>
          <div className="body">
            <div className="icon">
              <MdInsertChart fontSize={"30px"} color="#8358FF"/>
            </div>

            <div>
              <h3>Start trading</h3>
              <p>
                Complete the identity verification process to secure your
                account and transactions.
              </p>
            </div>
          </div>
          <Button size={"small"}>Explore more</Button>
        </div>
        <div className="text"></div>
      </div>
    </WhatContainer>
  );
};

export { What };
