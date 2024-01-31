import Button from "@/components/Button/Button";
import React from "react";
import Image from "next/image";
import { AuthContainer } from "./Auth.style";
import Link from "next/link";

const Auth = () => {
  return (
    <>
      <AuthContainer>
        <div className="left"></div>
        {/* <Image
          src={"/images/logo.png"}
          width={75}
          height={75}
          alt="auth-image"
        /> */}
        <div className="right">
          <Image
            src={"/images/coin.png"}
            width={250}
            height={250}
            alt="auth-image"
          />
          <div className="text">Get Crypto.Trade Stock. Start Gaining</div>

          <div className="button">
            <Link className="link" href={"/register"}>
              Create account
            </Link>
            <Link className="link" href={"/loign"}>
              Login
            </Link>
          </div>
        </div>
      </AuthContainer>
    </>
  );
};

export { Auth };
