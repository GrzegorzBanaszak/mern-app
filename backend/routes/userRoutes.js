const express = require("express");
const router = express.Router();
const {
  registerUser,
  getUser,
  loginUser,
} = require("../controllers/userController");

router.route("/").post(registerUser).get(getUser);
router.route("/login").post(loginUser);
module.exports = router;
