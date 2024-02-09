import { useEffect, useState } from "react";
import { FiatContainer } from "./Fiat.style";
import Button from "@/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/feature/slice/authSlice";
import { useRouter } from "next/router";
import TradingViewChart from "./TradingViewChart";
import { Input } from "@/components/Input";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

const Fiat = () => {
  const [UserCoins, setUserCoins] = useState(null);

  const dispatch = useDispatch();
  const { isError, isSuccess, isLoading, user } = useSelector(
    (state) => state.auth
  );
  const token = user?.data.token;
  useEffect(() => {
    if (token) {
      axios
        .get("http://162.254.35.120/api/crypto", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserCoins(response.data.data.currencies);
          console.log(response.data.data.currencies);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);
  console.log(UserCoins);
  const router = useRouter();
  const handleLogout = async () => {
    await dispatch(logOut());
  };

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
          <div></div>
        </div>
        <div className="small-coins">
          <Input
            variant={"text"}
            type={"text"}
            placeholder={"Search Coins"}
            icon={<CiSearch fontSize={"30px"} color="black" fontWeight={500} />}
          />
          <div className="coin">
            {UserCoins && (
              <ul className="coin">
                {Object.entries(UserCoins).map(([currency, value]) => (
                  <li key={currency}>
                    <div className="coin">
                      {" "}
                      {currency}: {value}
                    </div>
                  </li>
                ))}
              </ul>
            )}
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

            <div className="coin">
              <h2>User Coins:</h2>
              {UserCoins && (
                <ul className="coin">
                  {Object.entries(UserCoins).map(([currency, value]) => (
                    <li key={currency}>
                      <div className="coin">
                        {" "}
                        {currency}: {value}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
