import { Overview } from "@/container/Overview";
import React from "react";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";

const overview = () => {
  return (
    <>
      <ProtectedRoute>
        <Head>
          <title>NationalExchange | Overview</title>
          <meta name="description" content="muurcoin" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/logo.png" />
        </Head>

        <Overview />
        <Footer />
      </ProtectedRoute>
    </>
  );
};

export default overview;
