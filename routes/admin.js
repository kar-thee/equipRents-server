const GetAllMsgController = require("../controllers/admin/GetAllMsgController");
const GetSingleMsgController = require("../controllers/admin/GetSingleMsgController");
const GetUploadUrlController = require("../controllers/admin/GetUploadUrlController");
const CreateProductController = require("../controllers/admin/product crud/CreateProductController");

const router = require("express").Router();

router.get("/allmsg", GetAllMsgController);

router.get("/msg/:id", GetSingleMsgController);

router.post("/uploadUrl", GetUploadUrlController);

router.post("/productCreate", CreateProductController);

module.exports = router;
