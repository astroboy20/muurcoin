import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbPasswordUser } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { Input } from "@/components/Input";
import Button from "@/components/Button/Button";
import { RegisterContainer } from "./Register.style";
import { FaUser } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";

const Register = () => {
  return (
    <RegisterContainer>
      <div className="btc">
        {/* <Image src={"/images/btc.jpg"} width={75} height={75} alt="logo" /> */}
      </div>
      <div className="form">
        <div className="header">
          <Image src={"/images/logo.png"} width={75} height={75} alt="logo" />
          {/* Muurcoin */}
        </div>
        <div className="form-container">
          <form>
            <Input
              variant={"text"}
              type={"text"}
              icon={<FaUser fontSize={"30px"} color="#000" />}
              placeholder={"First Name"}
            />
            <Input
              variant={"text"}
              type={"text"}
              icon={<FaUser fontSize={"30px"} color="#000" />}
              placeholder={"Last Name"}
            />
            <Input
              variant={"text"}
              type={"text"}
              icon={<FaUser fontSize={"30px"} color="#000" />}
              placeholder={"Username"}
            />
            <Input
              variant={"text"}
              type={"text"}
              icon={<MdEmail fontSize={"30px"} color="#000" />}
              placeholder={"Email"}
            />
            <Input
              variant={"text"}
              type={"text"}
              icon={<IoLogoCodepen fontSize={"30px"} color="#000" />}
              placeholder={"Country code"}
            />
            <Input
              variant={"text"}
              type={"text"}
              icon={<FaMobile fontSize={"30px"} color="#000" />}
              placeholder={"Mobile"}
            />

            <Input
              variant={"password"}
              type={"password"}
              icon={<TbPasswordUser fontSize={"30px"} color="#000" />}
              placeholder={"Password"}
            />
            <Input
              variant={"password"}
              type={"password"}
              icon={<TbPasswordUser fontSize={"40px"} color="#000" />}
              placeholder={"Confirm Password"}
            />

            <Button size={"large"}> Register</Button>
          </form>
        </div>

        <div className="signup-div">
          Have an account?{" "}
          <Link className="signup" href={"/register"}>
            Sign Up
          </Link>
          {/* </CustomText> */}
        </div>
      </div>
    </RegisterContainer>
  );
};

export { Register };
