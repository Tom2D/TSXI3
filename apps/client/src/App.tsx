import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SERVER_AUTHORITY } from "@tsxinsider/shared";
import { transactions } from "@tsxinsider/server";

function App() {
  const [trns, setTransactions] = useState<transactions[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2021-01-22")
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date("2021-01-22"));
  const [limit, setLimit] = useState<number>(10);

  const fetchTransactions = async () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    try {
      const response = await fetch(
        `${SERVER_AUTHORITY}/transactions?beginFilingDate=${startDate.toISOString()}&endFilingDate=${endDate.toISOString()}&limit=${limit}`
      );

      if (response.ok) {
        const data: transactions[] = await response.json();
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
          {trns.map((trn) => (
            <tr key={trn.id}>
              <td>{trn.id}</td>
              <td>{trn.sediId}</td>
              <td>{trn.insiderId}</td>
              <td>{trn.issuerId}</td>
              <td>{trn.securityId}</td>
              <td>{trn.trnFlagId}</td>
              <td>
                {new Date(trn.trnDate ?? new Date()).toLocaleDateString()}
              </td>
              <td>
                {new Date(trn.filingDate ?? new Date()).toLocaleDateString()}
              </td>
              <td>{trn.ownershipType}</td>
              <td>{trn.trnNatureCode}</td>
              <td>{trn.nb}</td>
              <td>{trn.price}</td>
              <td>{trn.priceCurrencyId}</td>
              <td>{trn.closingBalance}</td>
              <td>{trn.calculatedBalance}</td>
              <td>{trn.underlyingSecurityId}</td>
              <td>{trn.GeneralRemarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
