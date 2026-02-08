const router = require("express").Router();
const userRoutes = require("./user.routers");
const OTPRoute = require("./verifyemail.routes");
const AppointmentRoute = require("./appointment.routes");
const InsuranceRoute = require("./insurance.routes");
const OnboardingRoute = require("./onboarding.routes");

// Health check endpoint
router.get("/health", (req, res) => {
  console.log("Health check endpoint was called");
  res.json({ status: "OK" });
});


//OTP Point
router.use("/email",OTPRoute);
//Appointment Point
router.use("/appointment",AppointmentRoute);
//Insurance Point
router.use("/insurance",InsuranceRoute);
//User Point
router.use("/users",userRoutes);
//Onboarding Point
router.use("/onboarding",OnboardingRoute)
module.exports = router;
