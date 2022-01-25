const jwt = require("jsonwebtoken");

const createTokenFunc = (payload) => {
  return jwt.sign(payload, process.env.SECRETSTRING);
};

const validateTokenFunc = (token) => {
  return jwt.verify(token, process.env.SECRETSTRING);
};

module.exports = { createTokenFunc, validateTokenFunc };
