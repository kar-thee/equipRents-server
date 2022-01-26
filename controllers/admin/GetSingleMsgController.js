const ContactForm = require("../../models/ContactForm");

const GetSingleMsgController = async (req, res) => {
  const { id } = req.params;
  try {
    const msg = await ContactForm.findOne({ id });
    res.send({ msg, type: "success" });
  } catch (e) {
    res.send({ msg: e.message, type: "error" });
  }
};
module.exports = GetSingleMsgController;
