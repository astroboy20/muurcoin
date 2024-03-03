import { useEffect, useState } from "react";
import { DashboardContainer } from "./Dashboard.style";
import Button from "@/components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/feature/slice/authSlice";
import { useRouter } from "next/router";
import axios from "axios";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import Image from "next/image";
import Link from "next/link";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

const Dashboard = () => {
  const [UserCoins, setUserCoins] = useState(null);
  const [transactions, setTransaction] = useState([]);
  const [spotData, setSpotData] = useState([]);
  const [transferData, setTransferData] = useState([]);
  const [depositData, setdepositData] = useState([]);
  const [withdrawData, setWithdrawData] = useState([]);
  const [spot, setSpot] = useState("");
  const [deposit, setDeposit] = useState("");
  const [transfer, setTransfer] = useState("");
  const [withdrawal, setWithdrwal] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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
  }, [token]);

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
          // console.log(response.data.data);
          const spotTransactions = response.data.data.filter(
            (transaction) => transaction.trx_type === "Spot"
          );
          const transferTransactions = response.data.data.filter(
            (transaction) => transaction.trx_type === "Transfer"
          );
          const depositTransactions = response.data.data.filter(
            (transaction) => transaction.trx_type === "Deposit"
          );
          const withdrawTransactions = response.data.data.filter(
            (transaction) => transaction.trx_type === "Withdrawal"
          );

          setSpotData(spotTransactions)
          setTransferData(transferTransactions)
          setdepositData(depositTransactions)
          setWithdrawData(withdrawTransactions)
          

          const totalSpotTransaction = spotTransactions.reduce(
            (total, transaction) => {
              return total + transaction.amount;
            },
            0
          );

          const totalTransferTransaction = transferTransactions.reduce(
            (total, transaction) => {
              return Math.abs(total + transaction.amount);
            },
            0
          );

          const totalDepositTransaction = depositTransactions.reduce(
            (total, transaction) => {
              return total + transaction.amount;
            },
            0
          );

          const totalWithdrawTransaction = withdrawTransactions.reduce(
            (total, transaction) => {
              return  total + transaction.amount;
            },
            0
          );

          setSpot(totalSpotTransaction.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          setTransfer(totalTransferTransaction.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          setDeposit(totalDepositTransaction.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          setWithdrwal(totalWithdrawTransaction.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          setTransaction(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  const filteredCoins = UserCoins
    ? Object.entries(UserCoins).filter(([currency]) =>
        currency.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const currencyIcons = {
    BTC: <Image src={"/images/btc.png"} width={20} height={20} alt="BTC" />,
    ETH: <Image src={"/images/eth.png"} width={20} height={20} alt="ETH" />,
    USDT: <Image src={"/images/usdt.png"} width={20} height={20} alt="USDT" />,
    BNB: <Image src={"/images/bnb.png"} width={20} height={20} alt="BNB" />,
    SOL: <Image src={"/images/sol.png"} width={20} height={20} alt="SOL" />,
    XRP: <Image src={"/images/xrp.png"} width={20} height={20} alt="XRP" />,
    USDC: <Image src={"/images/usdc.png"} width={20} height={20} alt="USDC" />,
    ADA: <Image src={"/images/ada.png"} width={20} height={20} alt="ADA" />,
    AVAX: <Image src={"/images/avax.png"} width={20} height={20} alt="AVAX" />,
    DOGE: <Image src={"/images/doge.png"} width={20} height={20} alt="DOGE" />,
    TRX: <Image src={"/images/trx.png"} width={20} height={20} alt="TRX" />,
    DOT: <Image src={"/images/dot.png"} width={20} height={20} alt="DOT" />,
    MATIC: (
      <Image src={"/images/matic.png"} width={20} height={20} alt="MATIC" />
    ),
    LINK: <Image src={"/images/link.png"} width={20} height={20} alt="LINK" />,
    WBTC: <Image src={"/images/wbtc.png"} width={20} height={20} alt="WBTC" />,
    ICP: <Image src={"/images/icp.jpeg"} width={20} height={20} alt="ICP" />,
    SHIB: <Image src={"/images/shib.png"} width={20} height={20} alt="SHIB" />,
    DAI: <Image src={"/images/dai.png"} width={20} height={20} alt="DAI" />,
    LTC: <Image src={"/images/ltc.png"} width={20} height={20} alt="LTC" />,
    BCH: <Image src={"/images/bch.png"} width={20} height={20} alt="BCH" />,
    ETC: <Image src={"/images/etc.png"} width={20} height={20} alt="ETC" />,
    UNI: <Image src={"/images/uni.png"} width={20} height={20} alt="UNI" />,
    ATOM: <Image src={"/images/atom.png"} width={20} height={20} alt="ATOM" />,
    OP: <Image src={"/images/op.png"} width={20} height={20} alt="OP" />,
    NEAR: <Image src={"/images/near.png"} width={20} height={20} alt="NEAR" />,
    XLM: <Image src={"/images/xlm.png"} width={20} height={20} alt="XLM" />,
    INJ: <Image src={"/images/inj.png"} width={20} height={20} alt="INJ" />,
    APT: <Image src={"/images/apt.png"} width={20} height={20} alt="APT" />,
    LDO: <Image src={"/images/ldo.jpeg"} width={20} height={20} alt="LDO" />,
    FIL: <Image src={"/images/fil.png"} width={20} height={20} alt="FIL" />,
    TIA: <Image src={"/images/tia.jpeg"} width={20} height={20} alt="TIA" />,
    XMR: <Image src={"/images/xmr.png"} width={20} height={20} alt="XMR" />,
    IMX: <Image src={"/images/imx.png"} width={20} height={20} alt="IMX" />,
    ARB: <Image src={"/images/arb.png"} width={20} height={20} alt="ARB" />,
    HBAR: <Image src={"/images/hbar.png"} width={20} height={20} alt="HBAR" />,
    STX: <Image src={"/images/stx.png"} width={20} height={20} alt="STX" />,
    VET: <Image src={"/images/vet.jpeg"} width={20} height={20} alt="VET" />,
    WBET: <Image src={"/images/wbet.jpeg"} width={20} height={20} alt="WEBT" />,
    TUSD: <Image src={"/images/tusd.png"} width={20} height={20} alt="TUSD" />,
    FDUSD: (
      <Image src={"/images/fdusd.jpeg"} width={20} height={20} alt="FSUSD" />
    ),
    MKR: <Image src={"/images/mkr.jpeg"} width={20} height={20} alt="MKR" />,
    SEI: <Image src={"/images/sei.png"} width={20} height={20} alt="SEI" />,
    ORDI: <Image src={"/images/ordi.png"} width={20} height={20} alt="ORDI" />,
    GRT: <Image src={"/images/grt.png"} width={20} height={20} alt="GRT" />,
    AAVE: <Image src={"/images/aave.jpeg"} width={20} height={20} alt="AAVE" />,
    ALGO: <Image src={"/images/algo.png"} width={20} height={20} alt="ALGO" />,
    RUNE: <Image src={"/images/rune.png"} width={20} height={20} alt="RUNE" />,
    QNT: <Image src={"/images/qnt.png"} width={20} height={20} alt="QNT" />,
    SUI: <Image src={"/images/sui.png"} width={20} height={20} alt="SUI" />,
    EGLD: <Image src={"/images/edld.jpeg"} width={20} height={20} alt="EGLD" />,
    MUURCOIN: (
      <Image
        src={"/images/muurcoin.jpg"}
        width={20}
        height={20}
        alt="MUURCOIN"
      />
    ),
  };

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

  const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: true },
  };

  const spotID = spotData.map((spot)=>(
    spot.id
  ))
  const transferID = transferData.map((transfer)=>(
    transfer.id
  ))
  const depositID = depositData.map((deposit)=>(
    deposit.id
  ))
  const withdrawID = withdrawData.map((withdraw)=>(
    withdraw.id
  ))
  console.log(spotID)

  return (
    <>
      <DashboardContainer>
        {/* <Button size="large" OnClick={handleLogout}>
          Logout
        </Button> */}

        <div className="small-coins">
          <div className="coin">
            <ul className="coin">
              {UserCoins && (
                <ul className="coin">
                  {Object.entries(UserCoins).map(([currency, value]) => (
                    <li key={currency} onClick={() => handleSelected(currency)}>
                      <div className="coin-icon">
                        {" "}
                        {currencyIcons[currency] && (
                          <span className="coin-icon">
                            {currencyIcons[currency]}
                          </span>
                        )}
                        <span className="coin-name">
                          {currency}: {value}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {filteredCoins.length === 0 && (
                <p>
                  No coins found, please{" "}
                  <Link href={"/login"} className="link">
                    Login
                  </Link>
                </p>
              )}
            </ul>
          </div>
        </div>
        <div className="transaction-chart">
          <div className="spot">
            <p>Exchange</p>
            <p>{`$ ${spot}`}</p>
          </div>
          <div className="spot">
            <p>Transfer</p>
            <p>{`$ ${transfer}`}</p>
          </div>
          <div className="spot">
            <p>Deposit</p>
            <p>{`$ ${deposit}`}</p>
          </div>
          <div className="spot">
            <p>Withdrwal</p>
            <p>{`$ ${withdrawal}`}</p>
          </div>
        </div>
        <div className="coin-chart">
          <div className="chart">
            <div id="chart">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: UserCoins?.BTC, label: "BTC" },
                      { id: 1, value: UserCoins?.ETH, label: "ETH" },
                      { id: 2, value: UserCoins?.USDT, label: "USDT" },
                      { id: 3, value: UserCoins?.MUURCOIN, label: "MRCN" },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </div>
            <div className="line">
            <div className="line-chart">
            <p>Exchange</p>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data:spotID.slice(0, 6),
                  },
                ]}
                width={400}
                height={300}
              />
            </div>
            <div className="line-chart">
            <p>Transfer</p>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data:transferID.slice(0, 6),
                  },
                ]}
                width={400}
                height={300}
              />
            </div>
            <div className="line-chart">
              <p>Withdrawal</p>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: withdrawID.slice(0,6),
                  },
                ]}
                width={400}
                height={300}
              />
            </div>
            <div className="line-chart">
            <p>Deposit</p>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: depositID.slice(0,6),
                  },
                ]}
                width={400}
                height={300}
              />
            </div>
            </div>
           
          </div>
          <div className="coins">
            <div className="coin">
              {/* <h2>User Coins:</h2> */}
              {UserCoins && (
                <ul className="coin">
                  {Object.entries(UserCoins).map(([currency, value]) => (
                    <li key={currency} onClick={() => handleSelected(currency)}>
                      <div className="coin-icon">
                        {" "}
                        {currencyIcons[currency] && (
                          <span className="coin-icon">
                            {currencyIcons[currency]}
                          </span>
                        )}
                        <span className="coin-name">
                          {currency}: {value}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {filteredCoins.length === 0 && (
                <p>
                  No coins found, please{" "}
                  <Link href={"/login"} className="link">
                    Login
                  </Link>
                </p>
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
      </DashboardContainer>
    </>
  );
};

export { Dashboard };
