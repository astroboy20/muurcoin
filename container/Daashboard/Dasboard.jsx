import { useEffect, useState } from "react";
import { DashboardContainer } from "./Dashboard.style";
import Button from "@/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/feature/slice/authSlice";
import { useRouter } from "next/router";
import axios from "axios";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

const Dashboard = () => {
  const [UserCoins, setUserCoins] = useState(null);
  const [transactions, setTransaction] = useState([]);

  const dispatch = useDispatch();
  const { isError, isSuccess, isLoading, user } = useSelector(
    (state) => state.auth
  );
  const token = user?.data.token;

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
  }, [ token]);

  useEffect(() => {
    if (token) {
      axios
        .get("https://162.254.35.120/api/coins", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // setUserCoins(response.data.data.currencies);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      axios
        .get("https://162.254.35.120/api/transactions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          setTransaction(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

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
      <DashboardContainer>
        {/* <Button size="large" OnClick={handleLogout}>
          Logout
        </Button> */}

        <div className="small-coins">
          <div className="coin">
            <ul className="coin">
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
            </ul>
          </div>
        </div>
        <div className="coin-chart">
          <div className="chart">
            <CryptoCurrencyMarket
              colorTheme="dark"
              width="100%"
              // height={490}
              autosize
              displayCurrency="USD"
            ></CryptoCurrencyMarket>
          </div>
          <div className="coins">
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
            <p>Transactions</p>
            <table class="table table-dark table-striped">
              <thead>
                <tr>
                  <th>#</th>
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
                    <td>{transaction.id}</td>
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
      </DashboardContainer>
    </>
  );
};

export { Dashboard };
