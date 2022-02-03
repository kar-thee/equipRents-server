const RazorPay = require("razorpay");
const OrderCollection = require("../../models/orders");

const CreateOrderController = async (req, res) => {
  const { orderAmount, cartArray, email } = req.body;
  try {
    //save order details
    const orderSaved = await OrderCollection.create({
      orderAmount,
      cart: cartArray,
      email,
    });

    const orderReceipt = orderSaved._id;

    var instance = new RazorPay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    var options = {
      amount: orderAmount * 100, // amount in the smallest currency unit( 1 Rupee = 100 paisa )
      currency: "INR",
      receipt: orderReceipt, //maybe add orderdocument id value from db(future)
    };
    const orders = await instance.orders.create(options);
    //here store the orders.id to db with rest details
    await OrderCollection.findByIdAndUpdate(orderSaved._id, {
      orderIdGenerated: orders.id,
    });
    res.send({
      orderId: orders.id,
      razorpayKey: process.env.RAZORPAY_KEY_ID,
      orderAmount: orders.amount,
      orderReceipt,
      type: "success",
      msg: "Payment process started...",
    });
  } catch (e) {
    res.status(500).send({ msg: e.message, type: "error" });
  }
};
module.exports = CreateOrderController;
