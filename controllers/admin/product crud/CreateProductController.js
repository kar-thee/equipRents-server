const CreateProductController = (req, res) => {
  const data = req.body;
  try {
    res.send({
      type: "success",
      msg: "Successfully product added",
      productdata: data,
    });
  } catch (e) {
    return res.status(500).send({ msg: e.message, type: "error" });
  }
};

module.exports = CreateProductController;
