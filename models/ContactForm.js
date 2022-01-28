const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    phoneNo: {
      type: String,
    },
    query: {
      type: String,
    },
    queryResonse: {
      type: String,
      default: undefined,
    },
  },
  { timestamps: true }
);

const ContactForm = mongoose.model(
  "ContactForm",
  contactSchema,
  "ContactFormCollection"
);
module.exports = ContactForm;
