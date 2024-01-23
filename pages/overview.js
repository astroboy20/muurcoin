import { Overview } from "@/container/Overview";
import React from "react";
import Head from "next/head";

const overview = () => {
  return (
    <>
      <Head>
        <title>Murrcoin | Overview</title>
        <meta name="description" content="muurcoin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Overview />
    </>
  );
};

export default overview;
