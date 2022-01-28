const ProductCollection = require("../../../models/product");

const SearchCategoryProductController = async (req, res) => {
  const { categoryValue } = req.body;
  try {
    if (!categoryValue) {
      return res
        .status(404)
        .send({ msg: "No Category parameter available", type: "error" });
    }
    const productFound = await ProductCollection.find({
      category: categoryValue,
    });
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
    console.log(e);
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};

module.exports = SearchCategoryProductController;
