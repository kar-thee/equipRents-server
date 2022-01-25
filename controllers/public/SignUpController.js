const UserCollection = require("../../models/userInfo");
const { encryptFunc } = require("../../utils/crypto");

const SignUpController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(403)
        .send({ msg: "All Fields are necessary", type: "error" });
    }
    const newPwd = await encryptFunc(password);
    const response = await UserCollection.create({
      name,
      email,
      password: newPwd,
    });

    if (!response) {
      return res
        .status(403)
        .send({ msg: "Provide valid email", type: "error" });
    }
    res.send({ type: "success", msg: "User Created Successfully" });
  } catch (e) {
    console.log(e.message);
    return res
      .status(500)
      .send({ msg: "Probs in SignUp", errMsg: e.message, type: "error" });
  }
};

module.exports = SignUpController;
