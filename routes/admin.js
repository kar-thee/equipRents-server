const GetAllMsgController = require("../controllers/admin/GetAllMsgController");
const GetSingleMsgController = require("../controllers/admin/GetSingleMsgController");

const router = require("express").Router();

router.get("/allmsg", GetAllMsgController);

router.get("/msg/:id", GetSingleMsgController);
module.exports = router;
