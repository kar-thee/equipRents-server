const ContactForm = require("../../models/ContactForm");

const GetSingleMsgController = async (req, res) => {
  const { id } = req.params;
  try {
    const msgFound = await ContactForm.findOne({ id });
    if (!msgFound) {
      return res.status(404).send({ msg: e.message, type: "error" });
    }
    res.send({
      msgFound,
      msg: "Successfully Fetched Message",
      type: "success",
    });
  } catch (e) {
    res.status(500).send({ msg: e.message, type: "error" });
  }
};
module.exports = GetSingleMsgController;
