const express = require("express");
const router = express.Router();
const Loan = require("../models/Loan");

router.post("/apply", async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.json(loan);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get("/", async (req, res) => {
  const loans = await Loan.find().populate("customer");
  res.json(loans);
});

module.exports = router;
