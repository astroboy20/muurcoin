import { useState, useEffect } from "react";
import { LoginContainer } from "./Login.style";
import Image from "next/image";
import Link from "next/link";
import { TbPasswordUser } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { Input } from "@/components/Input";
import Button from "@/components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { login, reset } from "@/feature/slice/authSlice";
import {toast} from "react-toastify"

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const dispatch = useDispatch();

  const { isSuccess, message, isError, isLoading, user } = useSelector(
    (state) => state.auth
  );

  const token = user?.data.token
  typeof window !== "undefined" && localStorage.setItem("token", token)
  console.log(token)
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevvData) => ({
      ...prevvData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess){
      toast.success(message)
      router.push("/fiat")
    }

    // dispatch(reset())
  
    
  }, [isSuccess, isError, message, router])
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (userDetails.email && userDetails.password) {
      dispatch(login(userDetails));
    }
  };

  if (isLoading){
    <MoonLoader color="#fffff" />
  }
  return (
    <LoginContainer>
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
              value={userDetails.email}
              onChange={onChange}
              name="email"
              icon={<MdEmail fontSize={"40px"} color="#000" />}
              placeholder={"Email"}
            />
            <Input
              variant={"password"}
              type={"password"}
              name="password"
              value={userDetails.password}
              onChange={onChange}
              icon={<TbPasswordUser fontSize={"40px"} color="#000" />}
              placeholder={"Password"}
            />
            <div className="link-div">
              <Link className=" link" href={"/"}>
                Forgot password
              </Link>
            </div>
            <Button size={"large"}> Login</Button>
          </form>
        </div>

        <div className="or">or</div>

        <div className="login-with-google">
          <Button
            // onClick={handleGoogleLogin}
            type={"button"}
            size={"transparent"}
          >
            <div className="button-style">
              <Image src="/images/google.svg" width={25} height={25} alt={""} />{" "}
              Continue with Google
            </div>
          </Button>
          <div className="signup-div">
            Don`t have an account?{" "}
            <Link className="signup" href={"/register"}>
              Sign Up
            </Link>
            {/* </CustomText> */}
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export { Login };
