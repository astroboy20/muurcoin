import React from "react";
import { OverviewContainer } from "./Overview.style";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { Header } from "@/components/Header";


const Overview = () => {
  return (
    <>
      <Header />
      <OverviewContainer>
        <h1> Overview</h1>
        <h1 className="text-3xl font-bold underline">ggfkdajg</h1>
        <CryptoCurrencyMarket
          colorTheme="dark"
          width="100%"
          height={490}
          // autosize
          displayCurrency="USD"
        ></CryptoCurrencyMarket>
      </OverviewContainer>
    </>
  );
};

export { Overview };
