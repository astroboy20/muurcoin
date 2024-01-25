import React from "react";
import Image from "next/image";
import { SkillContainer } from "./Skills.style";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Skills = () => {
  return (
    <SkillContainer>
      <div className="skill-container" data-aos="fade-up" data-aos-delay="1000">
        {" "}
        <div className="text">
          <div className="header">
            <h1> Free Your Money & Invest With Confident</h1>
            <p>
              With Cryptor Trade, you can be sure your trading skills are
              matched
            </p>
          </div>

          <div className="body">
            <div>
              <IoIosCheckmarkCircle color="#ea4ba7"/>
            </div>
            <div>
              <h3>Buy, Sell, And Trade On The Go</h3>
              <p> Manage Your Holdings From Your Mobile Decive</p>
            </div>
          </div>
          <div className="body">
            <div>
              <IoIosCheckmarkCircle color="#ea4ba7"/>
            </div>
            <div>
              <h3>Take Control Of Your Wealth</h3>
              <p>Rest Assured You (And Only You) Have Access To Your funds</p>
            </div>
          </div>
        </div>
        <div className="image">
          <Image
            src={"/images/what.png"}
            width={350}
            height={350}
            alt="what-image"
            objectFit=""
          />
        </div>
      </div>
    </SkillContainer>
  );
};

export { Skills };
