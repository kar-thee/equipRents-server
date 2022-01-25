const bcrypt = require("bcrypt");

const encryptFunc = async (myPlaintextPassword) => {
  const salt = await bcrypt.genSalt(12);
  const hashedPwd = await bcrypt.hash(myPlaintextPassword, salt);
  return hashedPwd;
};

const decryptFunc = async (myPlaintextPassword, hashedPwd) => {
  const result = await bcrypt.compare(myPlaintextPassword, hashedPwd);
  return result ? true : false;
};

module.exports = { encryptFunc, decryptFunc };
