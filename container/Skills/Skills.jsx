import React from "react";
import Image from "next/image";
import { SkillContainer } from "./Skills.style";
import Button from "@/components/Button/Button";
import Link from "next/link"

const Skills = () => {
  return (
    <SkillContainer>
      <div className="skill-container" data-aos="fade-up" data-aos-delay="1000">
        <div className="header">
          <h1>Invest and earn</h1>
          <p>Simple & Secure. Search popular coins and start earning</p>
        </div>

        <div className="icons">
          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/btc.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>BTC</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.64%-71.53%</span> APR
              </span>
            </div>
          </div>

          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/usdt.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>USDT</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.60%-201.77%</span> APR
              </span>
            </div>
          </div>

          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/ETH.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>ETH</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.31%-184.44%</span> APR
              </span>
            </div>
          </div>
          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/bnb.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>BNB</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.35%-60.96%</span> APR
              </span>
            </div>
          </div>

          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/btc.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>BTC</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.64%-71.53%</span> APR
              </span>
            </div>
          </div>
          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/xrp.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>XRP</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.30%-180.44%</span> APR
              </span>
            </div>
          </div>
          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/btc.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>BTC</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.64%-71.53%</span> APR
              </span>
            </div>
          </div>
          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/btc.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>BTC</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.64%-71.53%</span> APR
              </span>
            </div>
          </div>
          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/btc.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>BTC</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.64%-71.53%</span> APR
              </span>
            </div>
          </div>
          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/btc.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>BTC</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.64%-71.53%</span> APR
              </span>
            </div>
          </div>
          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/btc.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>BTC</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.64%-71.53%</span> APR
              </span>
            </div>
          </div>
          <div className="icon">
            <div>
              <Image
                width={30}
                height={30}
                src={"/images/btc.png"}
                alt="icon"
              />
            </div>
            <div className="text">
              <span>BTC</span>
              <span class="text-sm dark:text-jacarta-300">
                <span class="text-green">0.64%-71.53%</span> APR
              </span>
            </div>
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
