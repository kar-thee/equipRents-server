const mailerFunc = require("../../utils/mailer");

const ReplyToMsgController = async (req, res) => {
  const { mailContent, recipientEmail } = req.body;
  try {
    await mailerFunc(mailContent, recipientEmail);
    res.send({ msg: "Mail Sent Successfully", type: "success" });
  } catch (e) {
    console.log(e, "   err in sending mail");
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};
module.exports = ReplyToMsgController;
