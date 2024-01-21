import Head from "next/head";
import { Inter } from "next/font/google";
// import styles from '@/styles/Home.module.css'
import { Header } from "@/components/Header";
import { HeroSection } from "@/container/Hero";
import { Layout } from "@/container/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Murrcoin</title>
        <meta name="description" content="muurcoin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      {/* <Layout> */}
        <Header />
        <HeroSection />
      {/* </Layout> */}
    </>
  );
}
