import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HeaderContainer, MobileSection } from "./Header.style";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import { Input } from "../Input";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { clearUser, logOut } from "@/feature/slice/authSlice";
import {toast} from "react-toastify"
import { TradeContainer } from "./TradeHeader.style";

const TraderHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };
  const isActiveLink = (href) => {
    return router.pathname === href;
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsBlurred(true);
    } else setIsBlurred(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleHamburger);
    };
  }, []);

  const handleLogout = async () => {
    await dispatch(clearUser());
    toast.success("Request Successful")
    router.push("/login")
  };
  return (
    <>
      <TradeContainer className={isBlurred && "is-blurred"}>
        <nav>
          <Image src={"/images/logo.png"} width={75} height={75} alt="logo" />
          {/* <div className="search">
            {" "}
            <Input
              variant={"search"}
              type={"text"}
              icon={<CiSearch fontSize={"30px"} color="white" fontWeight={500}/>}
              placeholder={"Search"}
            />
          </div> */}

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
              className={`section-link ${isActiveLink("/fiat") && "active"}`}
              href={"/fiat"}
            >
              Fiat
            </Link>
            <Link
              className={`section-link ${
                isActiveLink("/dashboard") && "active"
              }`}
              href={"/dashboard"}
            >
              Dashboard
            </Link>
            <Link
              className={`section-link ${
                isActiveLink("/withdrawal") && "active"
              }`}
              href={"/withdrawal"}
            >
              Withdrawal
            </Link>
          </div>

          <div className="icons">
            {/* Logout */}
            {/* <IoMdWallet fontSize={"25px"} /> */}
            {/* <FaUserAlt fontSize={"25px"} /> */}
            <Button size={"transparent"} onClick={handleLogout}>Logout</Button>
            <Button size={"large"}>Deposit</Button>
            <div className="hamburger" onClick={handleHamburger}>
              {isOpen ? (
                <IoMdClose fontSize={"30px"} />
              ) : (
                <GiHamburgerMenu fontSize={"30px"} />
              )}
            </div>
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
              <Link className="section-link" href={"/fiat"}>
                Fiat
              </Link>
              <Link className="section-link" href={"/dashboard"}>
                Dashboard
              </Link>
              <Link className="section-link" href={"/withdrawal"}>
                Withdrawal
              </Link>
              {user ? (
                <span className="section-link" onClick={handleLogout}>
                  Logout
                </span>
              ) : (
                <Link className="section-link" href={"/auth"}>
                  Get started
                </Link>
              )}
            </MobileSection>
          </>
        )}
      </TradeContainer>
    </>
  );
};

export { TraderHeader };
