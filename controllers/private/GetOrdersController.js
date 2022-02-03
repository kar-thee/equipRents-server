const OrderCollection = require("../../models/orders");

const GetOrdersController = async (req, res) => {
  const { email, role } = req.userObj;
  try {
    if (role === "admin") {
      return res.status(400).send({ msg: "Resource denied", type: "error" });
    }

    const ordersFound = await OrderCollection.find({ email });
    if (ordersFound.length === 0) {
      return res.status(404).send({ msg: "No orders Found", type: "error" });
    }

    res.send({ msg: "Orders Listed", type: "success", ordersFound });
  } catch (e) {
    res.status(500).send({ msg: e.message, type: "error" });
  }
};

module.exports = GetOrdersController;
