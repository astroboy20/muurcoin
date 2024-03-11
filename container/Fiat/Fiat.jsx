import { useEffect, useState } from "react";
import { FiatContainer } from "./Fiat.style";
import Button from "@/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/feature/slice/authSlice";
import TradingViewChart from "./TradingViewChart";
import axios from "axios";
import Image from "next/image";
import { useOptionContext } from "@/feature/context/option-context";
import { OptionItems, optionItems } from "./data";
import Option from "./Option";
import { Exchange } from "./Exchange";
import { Transfer } from "./Transfer";
import Link from "next/link";
import api from "./api";

const Fiat = () => {
  const [UserCoins, setUserCoins] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState("USDTBTC");
  const [heading, setHeading] = useState("USDTBTC");
  const [searchQuery, setSearchQuery] = useState("");
  const [transactions, setTransaction] = useState([]);
  const { option, switchOption } = useOptionContext();
  const [data, setData] = useState([]);

  const handleOption = (option) => {
    switchOption(option);
  };

  const filteredCoins = UserCoins
    ? Object.entries(UserCoins).filter(([currency]) =>
        currency.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelected = (symbol, name) => {
    setSelectedCoin(symbol);
    setHeading(name);
  };
  const dispatch = useDispatch();
  const { isError, isSuccess, isLoading, user } = useSelector(
    (state) => state.auth
  );
  const token = user?.data.token;

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

  useEffect(() => {
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
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://162.254.35.120/api/crypto/coinmarketcap",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = response.data.data.data;
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <FiatContainer>
        <div className="header">
          <h2>{heading}</h2>
          <div></div>
        </div>
        <div className="small-coins">
          <div className="coin">
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price (USD)</th>
                  <th>24h Change (%)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr
                      key={item.id}
                      onClick={() => handleSelected(item.symbol, item.name)}
                    >
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>${Math.floor(item.quote?.USD?.price * 100) / 100}</td>
                      <td
                        style={{
                          color:
                            parseFloat(item.quote?.USD?.percent_change_24h) >= 0
                              ? "green"
                              : "red",
                        }}
                      >
                        {Math.floor(item.quote?.USD?.percent_change_24h * 100) /
                          100}
                        %
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="coin-chart">
          <div className="chart">
            <TradingViewChart symbol={selectedCoin} />

            <div className="exchange-transfer">
              <div className="actions">
                {optionItems.map((OptionItem) => {
                  return (
                    <Option
                      key={OptionItem.value}
                      value={OptionItem.value}
                      label={OptionItem.label}
                      setValue={handleOption}
                      selected={option === OptionItem.value}
                    />
                  );
                })}
              </div>
              <div className="pages">
                {option === "Exchange" && (
                  <>
                    <Exchange UserCoins={UserCoins} token={token} />
                  </>
                )}

                {option === "Transfer" && (
                  <>
                    <Transfer UserCoins={UserCoins} token={token} />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="coins">
            <div className="coin">
              <table className="table table-dark table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price (USD)</th>
                    <th>24h Change (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr
                        key={item.id}
                        onClick={() => handleSelected(item.symbol, item.name)}
                      >
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          ${Math.floor(item.quote?.USD?.price * 100) / 100}
                        </td>
                        <td
                          style={{
                            color:
                              parseFloat(item.quote?.USD?.percent_change_24h) >=
                              0
                                ? "green"
                                : "red",
                          }}
                        >
                          {Math.floor(
                            item.quote?.USD?.percent_change_24h * 100
                          ) / 100}
                          %
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="logs">
          <div className="text">
            <p>Transactions</p>
            <table class="table table-dark table-striped">
              <thead>
                <tr>
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
