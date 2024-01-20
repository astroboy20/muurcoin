import React from "react";
import { OverviewContainer } from "./Overview.style";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

const Overview = () => {
  return (
    <OverviewContainer>
      {/* Overview */}
      <CryptoCurrencyMarket
        colorTheme="dark"
        width="100%"
        height={490}
        // autosize
        displayCurrency="USD"
      ></CryptoCurrencyMarket>
    </OverviewContainer>
  );
};

export { Overview };
