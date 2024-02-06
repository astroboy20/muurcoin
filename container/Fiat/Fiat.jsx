import { useEffect } from "react";
import { FiatContainer } from "./Fiat.style";
import Button from "@/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/feature/slice/authSlice";
import { useRouter } from "next/router";
import TradingViewChart from "./TradingViewChart";
import { Input } from "@/components/Input";
import { CiSearch } from "react-icons/ci";
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
        <div className="header">
          <h2>BTCUSDT</h2>
          <div>
            <Button size={"small"}>Deposit</Button>
          </div>
        </div>
        <div className="coin-chart">
          <div className="chart">
            <TradingViewChart />
            <div className="buy-sell">
              <div className="buy">
                <span>Avbl</span>
                <input type="text" />
                <input type="text" />
                <span>Max Buy</span>
                <button style={{ background: "green" }}>Buy</button>
              </div>
              <div className="sell">
                <span>Avbl</span>
                <input type="text" />
                <input type="text" />
                <span>Max Sell</span>
                <button style={{ background: "red" }}>Sell</button>
              </div>
            </div>
          </div>
          <div className="coins">
            <Input
              variant={"text"}
              type={"text"}
              placeholder={"Search Coins"}
              icon={
                <CiSearch fontSize={"30px"} color="black" fontWeight={500} />
              }
            />
          </div>
        </div>
        <div className="logs">
          <div className="text">
            <p>Open Order</p>
            <p>Open History</p>
            <p>Trade History</p>
            <p>Funds</p>
          </div>
        </div>
      </FiatContainer>
    </>
  );
};

export { Fiat };
