/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { HowContainer, Introduction } from "./How.style";

const How = () => {
  return (
    <HowContainer>
      <div data-aos="fade-up" data-aos-delay="1300">
        <Introduction>
          <div className="information">
            <h2>$ 159B</h2>
            <p>Quarterly volume traded</p>
          </div>
          <div className="information">
            <h2>100+ </h2>
            <p>Countries supported</p>
          </div>
          <div className="information">
            <h2>108M+</h2> <p>Verified users</p>
          </div>
        </Introduction>
      </div>
    </HowContainer>
  );
};

export { How };
