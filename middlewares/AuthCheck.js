const { validateTokenFunc } = require("../utils/token");

const AuthCheck = (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  try {
    if (!tokenHeader) {
      return res.status(404).send({ msg: "Not Valid Request", type: "error" });
    }
    const token = tokenHeader.split(" ")[1];
    if (!token) {
      return res.status(404).send({ msg: "tokenData missing", type: "error" });
    }
    const payload = validateTokenFunc(token);
    if (!payload || typeof payLoad === String) {
      return res.status(401).send({ msg: "Signin again", type: "error" });
    }
    req.userObj = {
      email: payload.email,
      role: payload.role,
    };
    next();
  } catch (e) {
    console.log(e, " err-authCheckFunc");
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};

module.exports = AuthCheck;
