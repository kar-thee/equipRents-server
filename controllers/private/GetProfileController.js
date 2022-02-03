const UserCollection = require("../../models/userInfo");

const GetProfileController = async (req, res) => {
  const { email, role } = req.userObj;
  try {
    if (role === "admin") {
      return res.status(400).send({ msg: "Resource denied", type: "error" });
    }
    const userFound = await UserCollection.findOne({ email }).select(
      "name email"
    );
    if (!userFound) {
      return res.status(400).send({ msg: "No user Found", type: "error" });
    }
    res.send({ msg: "User Found", type: "success", userFound });
  } catch (e) {
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};
module.exports = GetProfileController;
