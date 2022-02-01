const ProductCollection = require("../../models/product");

const CategoryDataController = async (req, res) => {
  const { categoryName } = req.params;
  try {
    if (!categoryName) {
      res
        .status(404)
        .send({ msg: "No categoryName is present", type: "error" });
    }
    const categoryArray = await ProductCollection.find({
      category: categoryName,
    });

    if (!categoryArray || categoryArray.length === 0) {
      res.status(404).send({
        msg: "No Data available for given categoryName",
        type: "error",
      });
    }

    res.send({ type: "success", categoryArray });
  } catch (e) {
    res.status(500).send({ msg: e.message, type: "error" });
  }
};

module.exports = CategoryDataController;
