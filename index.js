const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const dbConnectFunc = require("./db/dbIntegration");

const publicRoute = require("./routes/public");
const adminRoute = require("./routes/admin");
const AuthCheck = require("./middlewares/AuthCheck");
const AdminCheck = require("./middlewares/AdminCheck");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to equipment-lender Application");
});

app.use("/api/public", publicRoute);
app.use("/api/admin", AuthCheck, AdminCheck, adminRoute);

dbConnectFunc()
  .then(() => {
    app.listen(process.env.PORT || 4080, () => {
      console.log("Server Started");
    });
  })
  .catch((e) => console.log(e.message, " ERR-index.js"));
