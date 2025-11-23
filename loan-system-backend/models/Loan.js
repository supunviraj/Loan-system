const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  amount: Number,
  interestRate: Number,
  termMonths: Number,
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Loan", loanSchema);
