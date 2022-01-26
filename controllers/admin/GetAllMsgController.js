const ContactForm = require("../../models/ContactForm");

const GetAllMsgController = async (req, res) => {
  try {
    const allMsgs = await ContactForm.find();
    res.send({ allMsgs, type: "success" });
  } catch (e) {
    res.send({ msg: e.message, type: "error" });
  }
};
module.exports = GetAllMsgController;
