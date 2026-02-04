const express = require("express");
const router = express.Router();
const {checkemail,verifyotp} = require("../controllers/otp.controllers");

router.post("/sendOTP", checkemail);
router.post("/verifyOTP", verifyotp);
module.exports = router;