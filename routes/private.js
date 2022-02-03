const GetOrdersController = require("../controllers/private/GetOrdersController");
const GetProfileController = require("../controllers/private/GetProfileController");

const router = require("express").Router();

router.get("/Getprofile", GetProfileController);

router.get("/GetOrders", GetOrdersController);
module.exports = router;
