const ProductCollection = require("../../../models/product");

const CreateProductController = async (req, res) => {
  const { url, name, desc, section, category, subCategory, qty, price } =
    req.body;

  try {
    if (
      !url ||
      !name ||
      !desc ||
      !section ||
      !category ||
      !subCategory ||
      !qty ||
      !price
    ) {
      return res
        .status(404)
        .send({ msg: "No empty Values Allowed", type: "error" });
    }

    const response = await ProductCollection.create({
      url,
      name,
      desc,
      section,
      category,
      subCategory,
      qty,
      price,
    });
    if (!response) {
      return res
        .status(401)
        .send({ msg: "Try Again, Couldnot save", type: "error" });
    }
    res.send({
      type: "success",
      msg: "Successfully product added",
      productdata: response,
    });
  } catch (e) {
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};

module.exports = CreateProductController;
