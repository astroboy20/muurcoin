import React from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Fiat } from "@/container/Fiat";
const fiat = () => {
  return (
    <>
      <Head>
        <title>Murrcoin | Fiat</title>
        <meta name="description" content="muurcoin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Header />
      <Fiat />
      <Footer />
    </>
  );
};

export default fiat;
