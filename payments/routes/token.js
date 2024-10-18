const express = require("express");
const router = express.Router();
const { createToken, stkPush, callbackHandler, checkPaymentStatus } = require("../controller/token");

router.post("/", createToken, stkPush); // STK push endpoint
router.post("/callback", callbackHandler); // Safaricom callback route
router.get("/status/:CheckoutRequestID", checkPaymentStatus); // Payment status check route

module.exports = router;
