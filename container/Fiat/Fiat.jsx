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
  const [selectedCoin, setSelectedCoin] = useState("USDTBTC");
  const [heading, setHeading] = useState("USDTBTC");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCoins = UserCoins
  ? Object.entries(UserCoins).filter(([currency]) =>
      currency.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : [];

  const handleSelected = (symbol) => {
    setSelectedCoin(symbol);
  };
  const dispatch = useDispatch();
  const { isError, isSuccess, isLoading, user } = useSelector(
    (state) => state.auth
  );
  const token = user?.data.token;
  useEffect(() => {
    const defaultSymbol = "BTCUSDT";

    const pairSymbol = selectedCoin ? `${selectedCoin}` : defaultSymbol;

    setHeading(pairSymbol);
    if (token) {
      axios
        .get("https://162.254.35.120/api/crypto", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserCoins(response.data.data.currencies);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedCoin, token]);
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
    }

   
  }, []);

  return (
    <>
      <FiatContainer>
        {/* <Button size="large" OnClick={handleLogout}>
          Logout
        </Button> */}
        <div className="header">
          <h2>{heading}</h2>
          <div></div>
        </div>
        <div className="small-coins">
          <Input
            variant={"text"}
            type={"text"}
            placeholder={"Search Coins"}
            value={searchQuery}
            onChange={handleSearch}
            icon={<CiSearch fontSize={"30px"} color="black" fontWeight={500} />}
          />
          <div className="coin">
            {filteredCoins.length > 0 && (
              <ul className="coin">
                {filteredCoins.map(([currency, value]) => (
                  <li key={currency} onClick={() => handleSelected(currency)}>
                    <div className="coin">
                      {' '}
                      {currency}: {value}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {filteredCoins.length === 0 && <p>No coins found</p>}
          </div>
        </div>
        <div className="coin-chart">
          <div className="chart">
            <TradingViewChart symbol={selectedCoin} />
            <div className="buy-sell">
              <div className="buy">
                <span>Exchange Coin</span>
                <input type="text" placeholder="From"/>
                <input type="text"  placeholder="To"/>
                <button style={{ background: "green" }}>Exchange</button>
              </div>
             
              
            </div>
            {/* <button style={{ background: "red" }}>Sell</button> */}
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
                    <li key={currency} onClick={() => handleSelected(currency)}>
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
