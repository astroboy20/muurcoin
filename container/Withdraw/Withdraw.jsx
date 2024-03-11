import { useEffect, useState } from "react";
import { WithDrawStyle } from "./Withdraw.style";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/Input";
import { Spinner } from "@/components/Spinner/Spinner";
import {toast} from "react-toastify"

const Withdraw = () => {
  const [transactions, setTransaction] = useState([]);
  const [withdrawData, setWithdrawData] = useState([]);
  const [UserCoins, setUserCoins] = useState(null);
  const [from, setFromCurrency] = useState("");
  const [loading, setLoading] = useState(false);
  const [withdrawDetails, setWithdrawDetails] = useState({
    wallet: "",
    amount: "",
    acc_number: "",
    acc_name: "",
    bank_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWithdrawDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { user } = useSelector(
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
        
          const withdrawTransactions = response.data.data.filter(
            (transaction) => transaction.trx_type === "Withdrawal"
          );

          setWithdrawData(withdrawTransactions);

          setTransaction(response.data.data);
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  const handleWithdraw = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://162.254.35.120/api/withdrawal/place",
        withdrawDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      toast.error(error.response?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WithDrawStyle>
      <div className="header">Withdrawal</div>
      <form onSubmit={handleWithdraw}>
        <div className="from">
          <label>From:</label>
          <select
            id="fromCurrency"
            className="currency-select"
            value={withdrawDetails.wallet}
            onChange={handleChange}
            name="wallet"
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
            value={withdrawDetails.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="amount-input"
            name="amount"
          />
        </div>
        <div className="to">
          <label>Amount Number:</label>
          <input
            type="text"
            value={withdrawDetails.acc_number}
            onChange={handleChange}
            placeholder="Account Number"
            className="amount-input"
            name="acc_number"
          />
        </div>
        <div className="to">
          <label>Amount Name:</label>
          <input
            type="text"
            value={withdrawDetails.acc_name}
            onChange={handleChange}
            placeholder="Account Name"
            className="amount-input"
            name="acc_name"
          />
        </div>
        <div className="to">
          <label>Bank Name:</label>
          <input
            type="text"
            value={withdrawDetails.bank_name}
            onChange={handleChange}
            placeholder="Bank Name"
            className="amount-input"
            name="bank_name"
          />
        </div>
        <button className="exchange-button">
          {loading ? (
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
            "Withdraw"
          )}
        </button>
      </form>
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
              {withdrawData.map((transaction) => (
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
    </WithDrawStyle>
  );
};

export { Withdraw };
