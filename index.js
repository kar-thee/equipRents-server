const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: "localhost:3000",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to equipment-lender");
});

const publicRoute = require("./routes/public");
const dbConnectFunc = require("./db/dbIntegration");

app.use("/api/public", publicRoute);

dbConnectFunc().then(() => {
  app.listen(process.env.PORT || 4080, () => {
    console.log("Server Started");
  });
});