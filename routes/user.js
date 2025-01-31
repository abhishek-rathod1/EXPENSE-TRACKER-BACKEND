const { Router } = require("express");
const { handleuserLogin, handleUserSignup } = require("../controllers/user");

const router = Router();

router.post("/login", handleuserLogin),
  router.post("/signup", handleUserSignup);

module.exports = router;
