import { TickerTape } from "react-ts-tradingview-widgets";

import React from "react";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { MarketContainer } from "./Market.style";
import Image from "next/image";

const Market = () => {
  return (
    <MarketContainer>
      <div className="hero-image">
        <Image
          src={"/images/hero_crypto.jpg"}
          alt="hero"
          style={{ borderRadius: "20px" }}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="crypto" data-aos="fade-up" data-aos-delay="300">
        <CryptoCurrencyMarket
          colorTheme="dark"
          width="100%"
          height={490}
          // autosize
          displayCurrency="USD"
        ></CryptoCurrencyMarket>
      </div>
    </MarketContainer>
  );
};

export { Market };
