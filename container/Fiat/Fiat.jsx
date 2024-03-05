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
  const [error, setError] = useState(null);

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
    setHeading(name)
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
   
    const fetchData = async () => {
      try {
        const response = await api.get(
          "cryptocurrency/listings/latest?start=1&limit=21&convert=USD"
        );
        const result = response.data;
        // Assuming result contains an array under the key "data"
        const data = result.data;
        const simplifiedData = result.data.map((item) => ({
          name: item.name,
          symbol: item.symbol,
          price: Math.round( item.quote.USD.price *100)/100,
          percentChange:Math.round( item.quote.USD.percent_change_24h *100)/100,
        }));
        setData(simplifiedData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching data</div>;
  }

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
                {data.map((item,index) => (
                  <tr key={item.id} onClick={() => handleSelected(item.symbol,item.name)}>
                    <td>{index +1 }</td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td
                      style={{
                        color:
                          parseFloat(item.percentChange) >= 0 ? "green" : "red",
                      }}
                    >
                      {item.percentChange}%
                    </td>
                  </tr>
                ))}
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
                {data.map((item,index) => (
                  <tr key={item.id} onClick={() => handleSelected(item.symbol, item.name)}>
                    <td>{index +1 }</td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td
                      style={{
                        color:
                          item.percentChange>= 0 ? "green" : "red",
                      }}
                    >
                      {item.percentChange}%
                    </td>
                  </tr>
                ))}
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
