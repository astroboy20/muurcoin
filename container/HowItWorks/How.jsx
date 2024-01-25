/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { HowContainer, Introduction } from "./How.style";
import { FaDownload } from "react-icons/fa6";
import { FaConnectdevelop } from "react-icons/fa";
import { FcNeutralTrading } from "react-icons/fc";
import { MdInsertChart } from "react-icons/md";

const How = () => {
  return (
    <HowContainer>
      <div data-aos="fade-up" data-aos-delay="1300">
        <h1>How it works</h1>
        <Introduction>
          <div className="information">
            <FaDownload fontSize={"50px"} color="#B3538B" />
            <h2>Download</h2>
            <p>
              Install Discover our production-ready library of stackable content
              blocks designed for websites, meticulously crafted in React
              Native. Enhance your site by effortlessly installing Stacks.
            </p>
          </div>
          <div className="information">
            <FaConnectdevelop fontSize={"50px"} color="#B3538B" />
            <h2>Connect Wallet </h2>
            <p>
              Connect Wallet Immerse yourself in the Stacks experience.
              Seamlessly connect your wallet and unlock a world of possibilities
              for your web projects.
            </p>
          </div>
          <div className="information">
            <MdInsertChart fontSize={"50px"} color="#B3538B" />
            <h2>Start trading</h2>{" "}
            <p>
              Start Trading Embark on a journey of innovation. Utilize Stacks to
              build and enhance your website, taking it to new heights with the
              power of React Native.
            </p>
          </div>
          <div className="information">
            <MdInsertChart fontSize={"50px"} color="#B3538B" />
            <h2> Start trading </h2>{" "}
            <p>
              Launch Unleash the potential of Stacks on your website. Begin
              trading and witness the impact of our production-ready library on
              your site's content and functionality.
            </p>
          </div>
        </Introduction>
      </div>
    </HowContainer>
  );
};

export { How };
