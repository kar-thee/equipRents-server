const ContactForm = require("../../models/ContactForm");

const ContactUsController = async (req, res) => {
  const { name, email, phoneNo, query } = req.body;
  try {
    if (!email || !query) {
      return res
        .status(403)
        .send({ msg: " email and query are necessaary fields", type: "error" });
    }

    const response = await ContactForm.create({
      name,
      email,
      phoneNo,
      query,
    });
    if (!response) {
      return res
        .status(403)
        .send({ msg: "Provide valid email and query", type: "error" });
    }

    res.send({ msg: "Message Sent Successfully", type: "success" });
  } catch (e) {
    console.log(e.message, " err in ContactUs handler");
    return res.status(500).send({
      msg: "Err in Contact us Form",
      errMsg: e.message,
      type: "error",
    });
  }
};

module.exports = ContactUsController;
