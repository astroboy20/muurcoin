import React, { useState } from "react";
import Image from "next/image";
import { HeaderContainer, MobileSection } from "./Header.style";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HeaderContainer>
        <Image src={"/images/logo.jpg"} width={50} height={50} alt="logo" />
        <div className="section">
          <Link className="section-link" href={"/login"}>
            Home
          </Link>
          <Link className="section-link" href={"/"}>
            Overview
          </Link>
          <Link className="section-link" href={"/"}>
            Spot trading
          </Link>
        </div>

        <div>
          <button>Sign up</button>
        </div>

        <div className="hamburger" onClick={handleHamburger}>
          {isOpen ? (
            <IoMdClose fontSize={"40px"} />
          ) : (
            <GiHamburgerMenu fontSize={"40px"} />
          )}
        </div>
      </HeaderContainer>
      {isOpen && (
        <>
          <MobileSection>
            <Link className="section-link" href={"/login"}>
              Home
            </Link>
            <Link className="section-link" href={"/"}>
              Overview
            </Link>
            <Link className="section-link" href={"/"}>
              Spot trading
            </Link>
            <Link className="section-link" href={"/"}>
              Sign up
            </Link>
          </MobileSection>
        </>
      )}
    </>
  );
};

export { Header };
