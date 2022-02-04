const ProductCollection = require("../../../models/product");

const UpdateProductController = async (req, res) => {
  const { pid } = req.params;
  const { name, price, qty } = req.body;

  try {
    if (!pid) {
      return res.status(404).send({ msg: "No Product FOund", type: "error" });
    }
    const productFound = await ProductCollection.findById(pid);
    if (!productFound) {
      return res.status(404).send({ msg: "No Product FOund", type: "error" });
    }
    const updateResponse = await ProductCollection.findByIdAndUpdate(pid, {
      name,
      price,
      qty,
    });
    if (!updateResponse) {
      return res
        .status(404)
        .send({ msg: "Couldnot update Product, try again...", type: "error" });
    }
    res.send({ msg: "Successfully updated product Info", type: "success" });
  } catch (e) {
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};
module.exports = UpdateProductController;
