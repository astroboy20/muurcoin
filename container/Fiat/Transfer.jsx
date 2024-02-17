import { useState } from "react";
import { FiatContainer, PageContainer } from "./Fiat.style";
import axios from "axios";
import { toast } from "react-toastify";
import { useOptionContext } from "@/feature/context/option-context";
import { Spinner } from "@/components/Spinner/Spinner";

const Transfer = ({ UserCoins, token }) => {
  const [username, setUsername] = useState("");
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("");
  const [Loading, setLoading] = useState(false);
  const { option } = useOptionContext();

  const handleTransfer = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://162.254.35.120/api/transfer/achieve",
        {
          wallet,
          username,
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/vnd.api+json",
            Accept: "application/vnd.api+json",
          },
        }
      );
      setLoading(false);
      toast.success(response.data.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data.message);
    }
    setUsername("");
    setWallet("");
    setAmount("");
  };
  return (
    <>
      {option === "Transfer" && (
        <PageContainer>
          <div className="to">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="amount-input"
            />
          </div>
          <div className="to">
            <label>Wallet:</label>
            <select
              id="toCurrency"
              className="currency-select"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
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

          <button onClick={handleTransfer} className="exchange-button">
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
              "Transfer"
            )}
          </button>
        </PageContainer>
      )}
    </>
  );
};

export { Transfer };
