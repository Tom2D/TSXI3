import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CLIENT_AUTHORITY } from "@tsxinsider/shared";

interface Transaction {
  id: number;
  sediId: number;
  insiderId: number;
  issuerId: number;
  securityId: number;
  trnFlagId: number;
  trnDate: string;
  filingDate: string;
  ownershipType: string;
  ownershipExtraInfo: string;
  trnNatureCode: number;
  nb: number;
  nbType: string;
  price: number;
  priceCurrencyId: number;
  closingBalance: number;
  closingBalanceType: string;
  calculatedBalance: number;
  calculatedBalanceType: string;
  underlyingSecurityId: number;
  GeneralRemarks: string;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [limit, setLimit] = useState<number>(10);

  const fetchTransactions = async () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    try {
      const response = await fetch(
        `${CLIENT_AUTHORITY}/transactions?beginFilingDate=${startDate.toISOString()}&endFilingDate=${endDate.toISOString()}&limit=${limit}`
      );

      if (response.ok) {
        const data: Transaction[] = await response.json();
        setTransactions(data);
      } else {
        console.error("Failed to fetch transactions");
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Transactions</h1>
      <div className="filters">
        <div>
          <label>Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          <label>End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <div>
          <label>Results Limit:</label>
          <select
            value={limit}
            onChange={(e) => setLimit(parseInt(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <button onClick={fetchTransactions}>Fetch Transactions</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>SEDI ID</th>
            <th>Insider ID</th>
            <th>Issuer ID</th>
            <th>Security ID</th>
            <th>Transaction Flag ID</th>
            <th>Transaction Date</th>
            <th>Filing Date</th>
            <th>Ownership Type</th>
            <th>Transaction Nature Code</th>
            <th>Number</th>
            <th>Price</th>
            <th>Price Currency ID</th>
            <th>Closing Balance</th>
            <th>Calculated Balance</th>
            <th>Underlying Security ID</th>
            <th>General Remarks</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.sediId}</td>
              <td>{transaction.insiderId}</td>
              <td>{transaction.issuerId}</td>
              <td>{transaction.securityId}</td>
              <td>{transaction.trnFlagId}</td>
              <td>{new Date(transaction.trnDate).toLocaleDateString()}</td>
              <td>{new Date(transaction.filingDate).toLocaleDateString()}</td>
              <td>{transaction.ownershipType}</td>
              <td>{transaction.trnNatureCode}</td>
              <td>{transaction.nb}</td>
              <td>{transaction.price}</td>
              <td>{transaction.priceCurrencyId}</td>
              <td>{transaction.closingBalance}</td>
              <td>{transaction.calculatedBalance}</td>
              <td>{transaction.underlyingSecurityId}</td>
              <td>{transaction.GeneralRemarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
