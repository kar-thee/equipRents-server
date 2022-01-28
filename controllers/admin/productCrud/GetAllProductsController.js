const ProductCollection = require("../../../models/product");

const GetAllProductsController = async (req, res) => {
  try {
    const productFound = await ProductCollection.find();
    if (!productFound) {
      return res.status(404).send({ msg: "NoT Found", type: "error" });
    }
    res.send({ msg: "Listed All Products", type: "success", productFound });
  } catch (e) {
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};
module.exports = GetAllProductsController;
