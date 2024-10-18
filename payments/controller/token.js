const axios = require("axios");

let token = null; // To store the access token
const paymentStatus = {}; // In-memory store for payment status

// Create token for MPESA transactions
const createToken = async (req, res, next) => {
  const secret = "QqpA3DDtBjwMhxurzRF2nmPZinc5FcojssWMZvNAUFMqSIf60TOqEf8zh2UXsG4I";
  const consumer = "Rb7FAMHH59y5bRGQKm6y62itoVMUHHxmDWCYdNOULvGeNPfy";
  const auth = Buffer.from(`${consumer}:${secret}`).toString("base64");

  try {
    const response = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    );
    token = response.data.access_token;
    next(); // Proceed to STK push request after token is created
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Handle STK push and initiate payment
const stkPush = async (req, res) => {
  if (!token) {
    return res.status(400).json({ error: "Token not available. Please obtain a token first." });
  }

  const shortCode = 174379;
  const phone = req.body.phone.substring(1); // Remove the leading '0' from the phone number
  const amount = req.body.amount;
  const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
  const password = Buffer.from(shortCode + passkey + timestamp).toString("base64");

  const data = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: `254${phone}`,
    PartyB: shortCode,
    PhoneNumber: `254${phone}`,
    CallBackURL: "https://your-ngrok-url.ngrok.io/token/callback", // Use Ngrok callback URL
    AccountReference: "Mpesa Test",
    TransactionDesc: "Testing stk push",
  };

  try {
    const response = await axios.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const { MerchantRequestID, CheckoutRequestID } = response.data;
    paymentStatus[CheckoutRequestID] = { status: "pending" }; // Set initial status to pending

    res.status(200).json({
      message: "STK push initiated. Please check your phone.",
      MerchantRequestID,
      CheckoutRequestID,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Callback handler for Safaricom's response
// Controller: token.js
const callbackHandler = (req, res) => {
  const { Body } = req.body;
  const { CheckoutRequestID, ResultCode, ResultDesc } = Body.stkCallback;

  if (ResultCode === 0) {
    paymentStatus[CheckoutRequestID] = { status: "success" }; // Payment success
  } else if (ResultCode === 1) {
    paymentStatus[CheckoutRequestID] = { status: "cancelled" }; // Payment cancelled
  } else {
    paymentStatus[CheckoutRequestID] = { status: "failed", message: ResultDesc }; // Payment failed
  }

  res.status(200).send("Callback received"); // Respond to Safaricom
};


// Check payment status
const checkPaymentStatus = (req, res) => {
  const { CheckoutRequestID } = req.params;

  if (paymentStatus[CheckoutRequestID]) {
    res.status(200).json(paymentStatus[CheckoutRequestID]);
  } else {
    res.status(404).json({ error: "Payment status not found" });
  }
};

module.exports = { createToken, stkPush, callbackHandler, checkPaymentStatus };
