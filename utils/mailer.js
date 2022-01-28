const res = require("express/lib/response");
const nodemailer = require("nodemailer");

const mailerFunc = async (mailContent, toAddress) => {
  try {
    const mailSubject = "Equiprents-QueryHelper";
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_MAIL_ID,
        pass: process.env.SENDER_MAIL_PWD,
      },
    });
    const mailOptions = {
      from: process.env.SENDER_MAIL_ID,
      to: toAddress,
      subject: mailSubject,
      text: mailContent,
    };

    const response = await transporter.sendMail(mailOptions);
    return response;
  } catch (e) {
    console.log(e.message, " xerr-mailFunc");
  }
};
module.exports = mailerFunc;
