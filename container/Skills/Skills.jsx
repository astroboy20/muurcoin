import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { SkillContainer } from "./Skills.style";
import Button from "@/components/Button/Button";
import Link from "next/link";

const Skills = () => {
  const iconScrollRef = useRef(null);

  useEffect(() => {
    let isUnmounted = false;

    const startScrolling = () => {
      if (!isUnmounted && iconScrollRef.current) {
        const { scrollWidth, clientWidth } = iconScrollRef.current;
        if (scrollWidth > clientWidth) {
          const scrollStep = 1; // Adjust scroll step as needed
          const scrollIntervalTime = 50; // Adjust interval time as needed

          const scrollInterval = setInterval(() => {
            if (iconScrollRef.current) { // Ensure ref is still valid
              const { scrollLeft } = iconScrollRef.current;
              iconScrollRef.current.scrollLeft = (scrollLeft + scrollStep) >= scrollWidth ? 0 : (scrollLeft + scrollStep);
            }
          }, scrollIntervalTime);

          return () => {
            clearInterval(scrollInterval);
          };
        }
      }
    };

    startScrolling();

    return () => {
      isUnmounted = true;
    };
  }, []);
  

  return (
    <SkillContainer>
      <div className="skill-container" data-aos="fade-up" data-aos-delay="1000">
        <div className="header">
          <h1>Invest and earn</h1>
          <p>Simple & Secure. Search popular coins and start earning</p>
        </div>

        <div className="icons" ref={iconScrollRef}>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/btc.png"}
              alt="icon"
            />
            <span>BTC</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/ETH.png"}
              alt="icon"
            />
            <span>ETH</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/doge.png"}
              alt="icon"
            />
            <span>Doge</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/bch.png"}
              alt="icon"
            />
            <span>BCH</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/fdusd.jpeg"}
              alt="icon"
            />
            <span>FDUSD</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/dot.png"}
              alt="icon"
            />
            <span>DOT</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/etc.png"}
              alt="icon"
            />
            <span>ETC</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/icp.jpeg"}
              alt="icon"
            />
            <span>ICP</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/matic.png"}
              alt="icon"
            />
            <span>MATIC</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/hbar.png"}
              alt="icon"
            />
            <span>HBAR</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/link.png"}
              alt="icon"
            />
            <span>LINK</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/ltc.png"}
              alt="icon"
            />
            <span>LTC</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/mkr.jpeg"}
              alt="icon"
            />
            <span>MKR</span>
          </div>
        </div>
        <div className="icons" ref={iconScrollRef}>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/inj.png"}
              alt="icon"
            />
            <span>INJ</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/ldo.jpeg"}
              alt="icon"
            />
            <span>LDO</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/grt.png"}
              alt="icon"
            />
            <span>GRT</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/bnb.png"}
              alt="icon"
            />
            <span>BNB</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/fil.png"}
              alt="icon"
            />
            <span>FIL</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/etc.png"}
              alt="icon"
            />
            <span>ETC</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/imx.png"}
              alt="icon"
            />
            <span>IMX</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/edid.jpeg"}
              alt="icon"
            />
            <span>EDID</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/dai.png"}
              alt="icon"
            />
            <span>DAI</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/hbar.png"}
              alt="icon"
            />
            <span>HBAR</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/link.png"}
              alt="icon"
            />
            <span>LINK</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/arb.png"}
              alt="icon"
            />
            <span>ARB</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/atom.png"}
              alt="icon"
            />
            <span>ATOM</span>
          </div>
        <div className="icon">
            <Image
              width={30}
              height={30}
              src={"/images/avax.png"}
              alt="icon"
            />
            <span>AVAX</span>
          </div>
        </div>

        <Link href="/auth" className="link">
          <Button size={"large"}>Start Trading</Button>
        </Link>
      </div>
    </SkillContainer>
  );
};

export { Skills };
