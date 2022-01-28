const ProductCollection = require("../../../models/product");

const DeleteProductController = async (req, res) => {
  const { pid } = req.params;

  try {
    if (!pid) {
      return res.status(404).send * { msg: "No Product FOund", type: "error" };
    }
    const productFound = await ProductCollection.findById(pid);

    if (!productFound) {
      return res.status(404).send({ msg: "No Product Found", type: "error" });
    }
    await ProductCollection.deleteOne({ _id: pid });

    res.send({ msg: "Product Deleted...", type: "success" });
  } catch (e) {
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};
module.exports = DeleteProductController;
