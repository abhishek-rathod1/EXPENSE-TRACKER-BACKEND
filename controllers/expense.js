const Expense = require("../models/expense");

async function addExpense(req, res) {
  try {
    const { expName, paid, category, userId } = req.body;
    console.log("user id from f-end", userId);
    // Input Validation
    if (!expName || !paid || !category || !userId) {
      return res.status(400).json({
        success: 0,
        message: "All fields (expName, paid, category, userId) are required",
      });
    }

    // Create Expense
    const newExpense = await Expense.create({
      expName,
      paid,
      category,
      userId,
    });
    return res.status(201).json({
      success: 1,
      message: "Expense added successfully",
      expense: newExpense,
    });
  } catch (error) {
    return res.status(500).json({
      success: 0,
      message: "Error adding expense",
      error: error.message,
    });
  }
}

async function myExpenses(req, res) {
  try {
    const { userId } = req.query;
    console.log("user id from f-end", userId);
    // Validate User ID
    if (!userId) {
      return res.status(400).json({
        success: 0,
        message: "User ID is required",
      });
    }

    // Fetch Expenses
    const expenses = await Expense.find({ userId }).sort({ createdAt: -1 });
    return res.status(200).json({
      success: 1,
      expenses,
    });
  } catch (error) {
    return res.status(500).json({
      success: 0,
      message: "Error fetching expenses",
      error: error.message,
    });
  }
}

async function deleteExpense(req, res) {
  try {
    const { id } = req.query;
    console.log("exp id is: ", id);
    // Validate Expense ID
    if (!id) {
      return res.status(400).json({
        success: 0,
        message: "Expense ID is required",
      });
    }

    // Delete Expense
    const deletedExpense = await Expense.deleteOne({ _id: id });

    if (deletedExpense.deletedCount === 0) {
      return res.status(404).json({
        success: 0,
        message: "Expense not found or already deleted",
      });
    }

    return res.status(200).json({
      success: 1,
      message: "Expense deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: 0,
      message: "Error deleting expense",
      error: error.message,
    });
  }
}

module.exports = { addExpense, myExpenses, deleteExpense };
