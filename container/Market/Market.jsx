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
          src={"/images/hero_crypto_trading.png"}
          alt="hero"
          width={400}
          height={400}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <CryptoCurrencyMarket
          colorTheme="light"
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
