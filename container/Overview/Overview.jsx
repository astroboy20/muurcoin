import React from "react";
import { OverviewContainer } from "./Overview.style";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { Header } from "@/components/Header";

import dynamic from "next/dynamic";
const SymbolOverviewNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
  {
    ssr: false,
  }
);

const Overview = () => {
  return (
    <OverviewContainer>
      Overview
      {/* <Header/> */}
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
