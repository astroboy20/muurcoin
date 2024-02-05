import { useEffect, useState } from "react";
import { ForgotContainer } from "./RestWithEmail.style";
import { Input } from "@/components/Input";
import Button from "@/components/Button/Button";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { resetEmail } from "@/feature/slice/authSlice";
import {toast} from "react-toastify"
import { useRouter } from "next/router";

const ResetWithEmail = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [email, setEmail] = useState("");
  const { isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if(isSuccess){
      toast.success(message)
      // router.push("/reset-password")
    }
    if(isError){
      toast.error(message)
    }
  }, [isSuccess, message])
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(resetEmail({email}));
  };
  return (
    <>
      <ForgotContainer>
        <div>
          <h1>Reset Your Password</h1>
          <p> Regain Access to Your Account in Just a Few Steps</p>
        </div>

        <form onSubmit={onSubmit}>
          <Input
            icon={<MdEmail fontSize={"30px"} color="#000" />}
            variant={"text"}
            type={"text"}
            placeholder={"Email"}
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button size={"large"}> Login</Button>
        </form>
      </ForgotContainer>
    </>
  );
};

export { ResetWithEmail };
