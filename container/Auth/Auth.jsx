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
            src={"/images/btc.png"}
            width={250}
            height={250}
            alt="auth-image"
          />
          Get Crypto.Trade Stock. Start Gaining
          <div className="button">
            <Button size={"large"}>
              <Link className="link" href={"/register"}>
                Create account
              </Link>
            </Button>
            <Button size={"large"}>
              <Link className="link" href={"/login"}>
                Login
              </Link>
            </Button>
          </div>
        </div>
      </AuthContainer>
    </>
  );
};

export { Auth };
