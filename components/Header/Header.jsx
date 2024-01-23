import React, { useState } from "react";
import Image from "next/image";
import { HeaderContainer, MobileSection } from "./Header.style";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };
  const isActiveLink = (href) => {
    return router.pathname === href;
  };
  return (
    <>
      <HeaderContainer>
        <nav>
          <Image src={"/images/logo.png"} width={75} height={75} alt="logo" />
          <div className="section">
            <Link
              className={`section-link ${isActiveLink("/") && "active"}`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={`section-link ${
                isActiveLink("/overview") && "active"
              }`}
              href={"/overview"}
            >
              Overview
            </Link>
            <Link
              className={`section-link ${
                isActiveLink("/spot-trading") && "active"
              }`}
              href={"/spot-trading"}
            >
              Spot trading
            </Link>
          </div>

          <div>
            <button>
              {" "}
              <Link className="section-link" href={"/auth"}>
                Get started
              </Link>
            </button>
          </div>

          <div className="hamburger" onClick={handleHamburger}>
            {isOpen ? (
              <IoMdClose fontSize={"40px"} />
            ) : (
              <GiHamburgerMenu fontSize={"40px"} />
            )}
          </div>
        </nav>
        {isOpen && (
          <>
            <MobileSection>
              <Link className="section-link" href={"/"}>
                Home
              </Link>
              <Link className="section-link" href={"/overview"}>
                Overview
              </Link>
              <Link className="section-link" href={"/spot-trading"}>
                Spot trading
              </Link>
              <Link className="section-link" href={"/auth"}>
                Get started
              </Link>
            </MobileSection>
          </>
        )}
      </HeaderContainer>
    </>
  );
};

export { Header };
