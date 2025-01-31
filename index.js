const express = require("express");
const bodyParser = require("body-parser");
let cors = require("cors");
const userRoute = require("./routes/user");
const expensesRoute = require("./routes/expense");
const { default: mongoose } = require("mongoose");

const app = express();

const PORT = 8000;
//mongo db coonect
mongoose
  .connect("mongodb://127.0.0.1:27017/ExpenseTracker")
  .then(() => console.log("Mongo db connected"))
  .catch((err) => console.log("Error mongodb: ", err));

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("api hit");
  return res.send({ message: "Hi from server 1" });
});
app.use("/user", userRoute);

app.use("/expense", expensesRoute);

app.listen(PORT, () => console.log("Server started at port : ", PORT));
