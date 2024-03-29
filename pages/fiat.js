import React from "react";
import Head from "next/head";
import { Header, TraderHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Fiat } from "@/container/Fiat";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
const fiat = () => {
  return (
    <>
      <ProtectedRoute>
        <Head>
          <title>NationalExchange | Fiat</title>
          <meta name="description" content="muurcoin" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/logo.png" />
        </Head>
        <TraderHeader />
        <Fiat />
        <Footer />
      </ProtectedRoute>
    </>
  );
};

export default fiat;
