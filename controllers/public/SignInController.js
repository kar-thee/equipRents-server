const UserCollection = require("../../models/userInfo");
const { decryptFunc } = require("../../utils/crypto");
const { createTokenFunc } = require("../../utils/token");

const SignInController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(403)
        .send({ msg: "All Fields are necessary", type: "error" });
    }

    const result = await UserCollection.findOne({ email });
    if (!result) {
      return res
        .status(401)
        .send({ msg: "try again with valid credentials", type: "error" });
    }
    const userValid = decryptFunc(password, result.password);
    if (!userValid) {
      return res
        .status(401)
        .send({ msg: "try again with valid credentials", type: "error" });
    }

    let role = "customer";
    if (result.email === process.env.ADMINEMAILID) {
      role = "admin";
    }

    const payload = {
      email: result.email,
      name: result.name,
      id: result._id,
      role,
    };
    const token = createTokenFunc(payload);

    res.send({
      token,
      type: "success",
      msg: "successfully Signed In",
      role,
    });
  } catch (e) {
    console.log(e.message);
    return res
      .status(500)
      .send({ msg: "Probs in SignUp", errMsg: e.message, type: "error" });
  }
};
module.exports = SignInController;
