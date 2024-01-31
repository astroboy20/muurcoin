import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbPasswordUser } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { Input } from "@/components/Input";
import Button from "@/components/Button/Button";
import { RegisterContainer } from "./Register.style";
import { FaUser } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { register, reset } from "@/feature/slice/authSlice";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    country_code: "",
    password: "",
    password_confirmation: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
  if(isError){
    console.log("error")
  }
  if(isSuccess || user){
    console.log("success")
  }
  dispatch(reset())
  }, [userDetails, isError, message, isSuccess])

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(userDetails.password !== userDetails.password_confirmation){
      console.log("no match")
    }else{
      dispatch(register(userDetails))
    }
  };
  return (
    <RegisterContainer>
      <div className="btc">
        {/* <Image src={"/images/btc.jpg"} width={75} height={75} alt="logo" /> */}
      </div>
      <div className="form">
        <div className="header">
          <Image src={"/images/logo.png"} width={75} height={75} alt="logo" />
          Muurcoin
        </div>
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <Input
              variant={"text"}
              type={"text"}
              icon={<FaUser fontSize={"30px"} color="#000" />}
              placeholder={"First Name"}
              onChange={onChange}
              name="firstname"
            />
            <Input
              variant={"text"}
              type={"text"}
              icon={<FaUser fontSize={"30px"} color="#000" />}
              placeholder={"Last Name"}
              onChange={onChange}
              name="lastname"
            />
            <Input
              variant={"text"}
              type={"text"}
              icon={<FaUser fontSize={"30px"} color="#000" />}
              placeholder={"Username"}
              onChange={onChange}
              name="username"
            />
            <Input
              variant={"text"}
              type={"text"}
              icon={<MdEmail fontSize={"30px"} color="#000" />}
              placeholder={"Email"}
              onChange={onChange}
              name="email"
            />
            <Input
              variant={"text"}
              type={"text"}
              icon={<IoLogoCodepen fontSize={"30px"} color="#000" />}
              placeholder={"Country code"}
              onChange={onChange}
              name="country_code"
            />
            <Input
              variant={"text"}
              type={"text"}
              icon={<FaMobile fontSize={"30px"} color="#000" />}
              placeholder={"Mobile"}
              onChange={onChange}
              name="mobile"
            />

            <Input
              variant={"password"}
              type={"password"}
              icon={<TbPasswordUser fontSize={"30px"} color="#000" />}
              placeholder={"Password"}
              onChange={onChange}
              name="password"
            />
            <Input
              variant={"password"}
              type={"password"}
              icon={<TbPasswordUser fontSize={"40px"} color="#000" />}
              placeholder={"Confirm Password"}
              onChange={onChange}
              name="password_confirmation"
            />

            <Button size={"large"}>Register</Button>
          </form>
        </div>

        <div className="signup-div">
          Have an account?{" "}
          <Link className="signup" href={"/login"}>
            Sign In
          </Link>
        </div>
      </div>
    </RegisterContainer>
  );
};

export { Register };
