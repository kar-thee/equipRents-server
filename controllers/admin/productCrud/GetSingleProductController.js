const ProductCollection = require("../../../models/product");

const GetSingleProductController = async (req, res) => {
  const { pid } = req.params;

  try {
    if (!pid) {
      return res.status(404).send({ msg: "No Product FOund", type: "error" });
    }
    const productFound = await ProductCollection.findById(pid);
    if (!productFound) {
      return res.status(404).send({ msg: "NoT Found", type: "error" });
    }
    res.send({ msg: "Fetched Product", type: "success", productFound });
  } catch (e) {
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};

module.exports = GetSingleProductController;
