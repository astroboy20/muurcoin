import { useEffect } from "react";
import { FiatContainer } from "./Fiat.style";
import Button from "@/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/feature/slice/authSlice";
import { useRouter } from "next/router";
import TradingViewChart from "./TradingViewChart";
const Fiat = () => {
  const dispatch = useDispatch();
  const { isError, isSuccess, isLoading, user } = useSelector(
    (state) => state.auth
  );
  const router = useRouter();
  const handleLogout = async () => {
    await dispatch(logOut());
  };
  const query = router.query;
  console.log(query);
  useEffect(() => {
    if (isError) {
      console.log("Error");
    }
    if (isSuccess) {
      console.log("sucess");
      // router.push("/login");
    }
  }, []);

  return (
    <>
      <FiatContainer>
        {/* <Button size="large" OnClick={handleLogout}>
          Logout
        </Button> */}
        <div className="chart">
          <TradingViewChart />
        </div>
      </FiatContainer>
    </>
  );
};

export { Fiat };
