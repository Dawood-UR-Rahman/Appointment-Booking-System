const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointment.controller");

router.post("/freeappointment", appointmentController.createFreeAppointment);

module.exports = router;
