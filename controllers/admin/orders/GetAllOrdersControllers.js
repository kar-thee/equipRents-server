const OrderCollection = require("../../../models/orders");

const GetAllOrdersController = async (req, res) => {
  try {
    const allOrders = await OrderCollection.find();
    if (allOrders.length === 0) {
      return res.status(400).send({ msg: "No order created", type: "error" });
    }
    res.send({
      msg: "All orders Listed",
      type: "success",
      ordersFound: allOrders,
    });
  } catch (e) {
    res.status(500).send({ msg: e.message, type: "error" });
  }
};
module.exports = GetAllOrdersController;
