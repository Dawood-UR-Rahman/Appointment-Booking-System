const express = require('express');
const router = express.Router();
const {createUserWithAppointmentAndInsurance} = require('../controllers/onboarding.controller');

// Single POST for onboarding with optional file uploads
// Fields: ssnFront and ssnBack for files (optional)
// Fields: userInfo, appointmentInfo, insuranceInfo as JSON strings or objects
router.post('/newform',createUserWithAppointmentAndInsurance);

module.exports = router;