const GetAllMsgController = require("../controllers/admin/GetAllMsgController");
const GetSingleMsgController = require("../controllers/admin/GetSingleMsgController");
const GetUploadUrlController = require("../controllers/admin/GetUploadUrlController");

const router = require("express").Router();

router.get("/allmsg", GetAllMsgController);

router.get("/msg/:id", GetSingleMsgController);

router.get("/uploadUrl", GetUploadUrlController);

module.exports = router;
