const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductCollection = mongoose.model(
  "ProductCollection",
  productSchema,
  "ProductCollection"
);
module.exports = ProductCollection;
