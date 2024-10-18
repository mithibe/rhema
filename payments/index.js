const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const TokenRoute = require("./routes/token");

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.use("/token", TokenRoute); // Use token routes

app.get("/", (req, res) => {
  res.send("Mpesa programming in progress, time to get paid!");
});
