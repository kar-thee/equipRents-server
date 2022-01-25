const mongoose = require("mongoose");

const dbConnectFunc = async () => {
  try {
    await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("dbConnected...");
  } catch (e) {
    console.log(e.message, "err in dbConnectFunc");
  }
};

module.exports = dbConnectFunc;
