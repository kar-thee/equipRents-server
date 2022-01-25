const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const dbConnectFunc = require("./db/dbIntegration");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to equipment-lender Application");
});

const publicRoute = require("./routes/public");

app.use("/api/public", publicRoute);

dbConnectFunc()
  .then(() => {
    app.listen(process.env.PORT || 4080, () => {
      console.log("Server Started");
    });
  })
  .catch((e) => console.log(e.message, " ERR-index.js"));
