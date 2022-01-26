const AdminCheck = (req, res, next) => {
  const { email, role } = req.userObj;
  try {
    if (!email || !role) {
      return res.status(403).send({ msg: "Request Denied", type: "error" });
    }
    if (email === process.env.ADMINEMAILID && role === "admin") {
      next();
    } else {
      return res.status(403).send({ msg: "Request Denied", type: "error" });
    }
  } catch (e) {
    console.log(e.message, " err-inAdminCheck");
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};
module.exports = AdminCheck;
