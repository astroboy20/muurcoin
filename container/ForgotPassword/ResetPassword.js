import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ForgotContainer } from "./RestWithEmail.style";
import { Input } from "@/components/Input";
import { TbPasswordUser } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "@/feature/slice/authSlice";
import { toast } from "react-toastify";
import Button from "@/components/Button/Button";
const ResetPassword = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const { isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const [resetDetails, setResetDetails] = useState({
    token: token,
    email: email,
    password: "",
    password_confirmation: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setResetDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
    }
    if (isError) {
      toast.error(message);
    }
  }, [isError,isSuccess,message]);

  const onSubmit = (e) => {
    e.preventDefault();

    // dispatch(resetPassword(resetDetails));
    console.log(resetDetails)
  };
  return (
    <>
      <ForgotContainer>
        <form onSubmit={onSubmit}>
          <input
            type="hidden"
            value={resetDetails.token}
            onChange={onChange}
            name="email"
            placeholder={"Email"}
          />
          <input
            type={"hidden"}
            value={resetDetails.email}
            onChange={onChange}
            name="email"
            placeholder={"Email"}
          />
          <Input
            variant={"password"}
            type={"password"}
            name="password"
            value={resetDetails.password}
            onChange={onChange}
            icon={<TbPasswordUser fontSize={"40px"} color="#000" />}
            placeholder={"Password"}
          />
          <Input
            variant={"password"}
            type={"password"}
            name="password_confirmation"
            value={resetDetails.password_confirmation}
            onChange={onChange}
            icon={<TbPasswordUser fontSize={"40px"} color="#000" />}
            placeholder={"Comfirm Password"}
          />
          <Button size={"large"}> Reset</Button>
        </form>
      </ForgotContainer>
    </>
  );
};

export default ResetPassword;
