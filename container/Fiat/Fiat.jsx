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
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner/Spinner";

const Fiat = () => {
  const [UserCoins, setUserCoins] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState("USDTBTC");
  const [heading, setHeading] = useState("USDTBTC");
  const [searchQuery, setSearchQuery] = useState("");
  const [from, setFromCurrency] = useState("");
  const [to, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [Loading, setLoading] = useState(false);
  const [transactions, setTransaction] = useState([]);

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
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ token]);

  useEffect(() => {
    if (token) {
      axios
        .get("https://162.254.35.120/api/transactions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const spotTransactions = response.data.data.filter(
            (transaction) => transaction.trx_type === "Spot"
          );
          setTransaction(spotTransactions);
          // setTransaction(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);
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

  const handleExchange = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://162.254.35.120/api/exchange",
        {
          from,
          to,
          amount,
          type: "Spot",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      toast.success(response.data.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

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
         
          <div className="coin">
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
            {filteredCoins.length === 0 && <p>No coins found</p>}
          </div>
        </div>
        <div className="coin-chart">
          <div className="chart">
            <TradingViewChart symbol={selectedCoin} />
            <div className="buy-sell">
              <div className="buy">
                <span>Exchange Coin</span>
                <div className="from">
                  <label>From:</label>
                  <select
                    id="fromCurrency"
                    className="currency-select"
                    value={from}
                    onChange={(e) => setFromCurrency(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Select Currency
                    </option>
                    {UserCoins &&
                      Object.entries(UserCoins).map(([currency, value]) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="to">
                  <label>To:</label>
                  <select
                    id="toCurrency"
                    className="currency-select"
                    value={to}
                    onChange={(e) => setToCurrency(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Select Currency
                    </option>
                    {UserCoins &&
                      Object.entries(UserCoins).map(([currency, value]) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="to">
                  <label>Amount:</label>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    className="amount-input"
                  />
                </div>

                <button onClick={handleExchange} className="exchange-button">
                  {Loading ? (
                    <div
                      style={{
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Spinner />
                    </div>
                  ) : (
                    "Exchange"
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="coins">
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
               {filteredCoins.length === 0 && <p>No coins found</p>}
            </div>
          </div>
        </div>
        <div className="logs">
          <div className="text">
            <p>Transactions</p>
            <table class="table table-dark table-striped">
              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>Reference ID</th>
                  <th>Amount</th>
                  <th>Wallet</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    {/* <td>{transaction.id}</td> */}
                    <td>{transaction.reference_id}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.wallet}</td>
                    <td>{transaction.trx_type}</td>
                    <td>{transaction.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FiatContainer>
    </>
  );
};

export { Fiat };
