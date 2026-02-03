const router = require("express").Router();
const userRoutes = require("./user.routers");
router.post("/email", require("./verifyemail"));
router.get("/health", (req, res) => {
  console.log("Health check endpoint was called");
  res.json({ status: "OK" });
});
router.use("/users",userRoutes);;

module.exports = router;
