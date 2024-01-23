import { Login } from "@/container/Login";
import React from "react";
import Head from "next/head";

const login = () => {
  return (
    <>
      <Head>
        <title>Murrcoin | Login</title>
        <meta name="description" content="muurcoin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Login />
    </>
  );
};

export default login;
