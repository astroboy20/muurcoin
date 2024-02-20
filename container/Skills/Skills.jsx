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
          const scrollStep = 1;
          const scrollIntervalTime = 50;

          const scrollInterval = setInterval(() => {
            iconScrollRef.current.scrollLeft += scrollStep;

            if (iconScrollRef.current.scrollLeft >= scrollWidth) {
              console.log("S",iconScrollRef.current.scrollLeft)
              iconScrollRef.current.scrollLeft = 0; // Reset to beginning
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
              src={"/images/ETH.png"}
              alt="icon"
            />
            <span>ETH</span>
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
              src={"/images/ETH.png"}
              alt="icon"
            />
            <span>ETH</span>
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
              src={"/images/ETH.png"}
              alt="icon"
            />
            <span>ETH</span>
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
              src={"/images/ETH.png"}
              alt="icon"
            />
            <span>ETH</span>
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
              src={"/images/ETH.png"}
              alt="icon"
            />
            <span>ETH</span>
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
              src={"/images/ETH.png"}
              alt="icon"
            />
            <span>ETH</span>
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
              src={"/images/ETH.png"}
              alt="icon"
            />
            <span>ETH</span>
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
