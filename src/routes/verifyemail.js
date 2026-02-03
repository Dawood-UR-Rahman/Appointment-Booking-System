const express = require("express");
const router = express.Router();
const {verifyEmail} = require("../controllers/otp.controllers");

router.post("/verify", verifyEmail);
module.exports = router;