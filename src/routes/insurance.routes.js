const express = require('express');
const router = express.Router();
const insuranceController = require('../controllers/insurance.controller');

router.post('/saveinsurance',  insuranceController.createInsuranceInfo);
module.exports = router;