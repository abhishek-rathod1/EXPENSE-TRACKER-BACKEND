const { Router } = require("express");
const {
  myExpenses,
  addExpense,
  deleteExpense,
} = require("../controllers/expense");

const router = Router();

router.get("/myexpenses", myExpenses);

router.post("/addexpense", addExpense);

router.delete("/delexpense", deleteExpense);

module.exports = router;
