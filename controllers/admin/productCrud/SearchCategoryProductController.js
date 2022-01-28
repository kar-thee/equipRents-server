const ProductCollection = require("../../../models/product");

const SearchCategoryProductController = async (req, res) => {
  const { category } = req.query;
  try {
    if (!category) {
      return res
        .status(404)
        .send({ msg: "No Category parameter available", type: "error" });
    }
    const productFound = await ProductCollection.find({ category });
    if (productFound.length === 0) {
      return res
        .status(404)
        .send({ msg: "No Product Available", type: "error" });
    }
    res.send({
      msg: "Fetched Product",
      productFound,
      type: "success",
    });
  } catch (e) {
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};

module.exports = SearchCategoryProductController;
