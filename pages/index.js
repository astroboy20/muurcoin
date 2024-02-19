import Head from "next/head";
import { Inter } from "next/font/google";
// import styles from '@/styles/Home.module.css'
import { Header } from "@/components/Header";
import { HeroSection } from "@/container/Hero";
import { Layout, Steps } from "@/container/Steps/Steps";
import { Market } from "@/container/Market";
import { Footer } from "@/components/Footer";
import { What } from "@/container/What";
import { Skills } from "@/container/Skills/Skills";
import { Stat } from "@/container/Stat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NationalExchange</title>
        <meta name="description" content="muurcoin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      {/* <Layout> */}
      <Header />
      <HeroSection />
      {/* <Stat/> */}
      <Market />
      <Stat />
      <What />
      {/* <Skills /> */}
      <Steps/>
      <Footer />
      {/* </Layout> */}
    </>
  );
}
