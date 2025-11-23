import React, { useState } from "react";
import axios from "axios";

function LoanApply() {
  const [amount, setAmount] = useState("");

  const submitLoan = async () => {
    if (!amount) return alert("Enter loan amount");
    try {
      const res = await axios.post("http://localhost:5000/api/loans/apply", {
        amount,
        customer: "customerIdHere", // Replace with actual customer ID
        interestRate: 12,
        termMonths: 12
      });
      alert(res.data.message || "Loan applied successfully");
      setAmount("");
    } catch (err) {
      console.error(err);
      alert("Error applying loan");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto border rounded shadow bg-white">
      <h1 className="text-2xl font-bold mb-4">Apply Loan</h1>
      <input
        className="border p-2 w-full mb-4"
        placeholder="Loan Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={submitLoan}
      >
        Submit Loan
      </button>
    </div>
  );
}

export default LoanApply;
