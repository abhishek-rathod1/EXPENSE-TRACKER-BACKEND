const { Schema, model } = require("mongoose");
// const { schema } = require("./user");

const expenseSchema = new Schema(
  {
    expName: {
      type: String,
      required: true,
    },
    paid: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Expense = model("expense", expenseSchema);
module.exports = Expense;
