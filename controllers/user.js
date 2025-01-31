const User = require("../models/user");

async function handleUserSignup(req, res) {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName: fullName,
    email: email,
    password: password,
  });
  return res.json({ success: 1, message: "User registered successful" });
}

async function handleuserLogin(req, res) {
  const { email, password } = req.body;
  const result = await User.findOne({ email });
  if (!result) return res.json({ success: 0, message: "User not found" });
  if (password !== result.password)
    return res.json({ success: 0, message: "Password incorrect" });

  return res.json({ success: 1, message: "login successful",userId: result._id });
}

module.exports = { handleUserSignup, handleuserLogin };
