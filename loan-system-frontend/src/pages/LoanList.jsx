import React, { useEffect, useState } from "react";
import axios from "axios";

function LoanList() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/loans")
      .then(res => setLoans(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Loan List</h1>
      {loans.length === 0 ? (
        <p>No loans found</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Customer</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan._id}>
                <td className="border p-2">{loan.customer?.name || loan.customer}</td>
                <td className="border p-2">{loan.amount}</td>
                <td className="border p-2">{loan.status || "Pending"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LoanList;
