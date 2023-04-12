const express = require("express");

const {
  register,
  login,
  forgotPassword,
  resetPassword,
  gettheusername
} = require("../controllers/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword/:resetToken").put(resetPassword);
router.route("/gettheusername/:id").get(gettheusername ) ; 



module.exports = router;
