import React from "react";
import { ForgotContainer } from "./ForgotPassword.style";
import { Input } from "@/components/Input";
import Button from "@/components/Button/Button";
import { MdEmail } from "react-icons/md";

const ForgotPassword = () => {
  return (
    <>
      <ForgotContainer>
        <div>
          <h1>Reset Your Password</h1>
          <p> Regain Access to Your Account in Just a Few Steps</p>
        </div>

        <form>
          <Input
            icon={<MdEmail fontSize={"30px"} color="#000" />}
            variant={"text"}
            type={"text"}
            placeholder={"Email"}
          />
          <Button size={"large"}> Login</Button>
        </form>
      </ForgotContainer>
    </>
  );
};

export { ForgotPassword };
