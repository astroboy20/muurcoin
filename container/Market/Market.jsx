import { TickerTape } from "react-ts-tradingview-widgets";

import React from "react";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { MarketContainer } from "./Market.style";

const Market = () => {
  return (
    <MarketContainer>
      {/* margin: ; */}
      {/* <TickerTape colorTheme="dark"></TickerTape> */}
      <h1>Market update</h1>

      <CryptoCurrencyMarket
        colorTheme="dark"
        width="100%"
        height={490}
        // autosize
        displayCurrency="USD"
      ></CryptoCurrencyMarket>
    </MarketContainer>
  );
};

export { Market };
