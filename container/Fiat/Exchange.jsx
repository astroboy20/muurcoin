import { useState } from "react";
import { PageContainer } from "./Fiat.style";
import axios from "axios";
import { toast } from "react-toastify";
import { useOptionContext } from "@/feature/context/option-context";
import { Spinner } from "@/components/Spinner/Spinner";

const Exchange = ({ UserCoins, token }) => {
  const [from, setFromCurrency] = useState("");
  const [to, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [Loading, setLoading] = useState(false);
  const { option } = useOptionContext();

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
      toast.error(error.response?.data.message);
    }
    setAmount("")
    setFromCurrency("")
    setToCurrency("")
  };
  return (
    <>
      {option === "Exchange" && (
        <PageContainer>
          <div className="from">
            <label>From:</label>
            <select
              id="fromCurrency"
              className="currency-select"
              value={from }
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
        </PageContainer>
      )}
    </>
  );
};

export { Exchange };
