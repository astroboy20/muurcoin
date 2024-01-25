import React from "react";
import { WhatContainer } from "./What.style";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "@/components/Button/Button";

const What = () => {
  return (
    <WhatContainer>
      <div className="what-container" data-aos="fade-up" data-aos-delay="1000">
        <div className="image">
          <Image
            src={"/images/what.png"}
            width={350}
            height={350}
            alt="what-image"
            objectFit=""
          />
        </div>
        <div className="text">
          <div className="header">
            <h1>What Is Rockie</h1>
            <p>
              Experience a variety of trading on Bitcost. You can use various
              types of coin transactions such as Spot Trade, Futures Trade, P2P,
              Staking, Mining, and margin
            </p>
          </div>

          <div className="body">
            <div>
              <IoIosCheckmarkCircle color="#ea4ba7" />
            </div>
            <div>
              <h3>View real-time cryptocurrency prices</h3>
              <p>
                {" "}
                Experience A Variety Of Trading On Bitcost. You Can Use Various
                Types Of Coin Transactions Such As Spot Trade, Futures Trade.
                P2P, Staking, Mining And Margin
              </p>
            </div>
          </div>
          <div className="body">
            <div>
              <IoIosCheckmarkCircle color="#ea4ba7" />
            </div>
            <div>
              <h3>Buy and sell BTC, ETH, XRP, OKB, Etc...</h3>
              <p>
                Experience A Variety Of Trading On Bitcost. You Can Use Various
                Types Of Coin Transactions Such As Spot Trade, Futures Trade,
                P2P, Staking Mining And Margin Explore More
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
