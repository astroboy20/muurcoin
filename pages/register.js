import { Register } from "@/container/Register";
import React from "react";
import Head from "next/head"
const register = () => {
  return (
    <>
      <Head>
        <title>NationalExchange | Register</title>
        <meta name="description" content="muurcoin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Register />
    </>
  );
};

export default register;
