const ProductCollection = require("../../models/product");

const SectionDataController = async (req, res) => {
  const { sectionName } = req.params;
  try {
    if (!sectionName) {
      res.status(404).send({ msg: "No sectionName is present", type: "error" });
    }
    const sectionArray = await ProductCollection.find({ section: sectionName });

    if (!sectionArray || sectionArray.length === 0) {
      res.status(404).send({
        msg: "No Data available for given sectionName",
        type: "error",
      });
    }

    res.send({ type: "success", sectionArray });
  } catch (e) {
    res.status(500).send({ msg: e.message, type: "error" });
  }
};

module.exports = SectionDataController;
