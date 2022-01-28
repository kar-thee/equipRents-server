const GetAllMsgController = require("../controllers/admin/GetAllMsgController");
const GetSingleMsgController = require("../controllers/admin/GetSingleMsgController");

const GetUploadUrlController = require("../controllers/admin/GetUploadUrlController");

const CreateProductController = require("../controllers/admin/productCrud/CreateProductController");
const GetAllProductsController = require("../controllers/admin/productCrud/GetAllProductsController");
const GetSingleProductController = require("../controllers/admin/productCrud/GetSingleProductController");
const UpdateProductController = require("../controllers/admin/productCrud/UpdateProductController");
const DeleteProductController = require("../controllers/admin/productCrud/DeleteProductController");
const SearchCategoryProductController = require("../controllers/admin/productCrud/SearchCategoryProductController");
const ReplyToMsgController = require("../controllers/admin/ReplyToMsgController");

const router = require("express").Router();

router.get("/allmsg", GetAllMsgController);

router.get("/msg/:id", GetSingleMsgController);

router.post("/msg/replyEmail", ReplyToMsgController);

router.post("/uploadUrl", GetUploadUrlController);

router.post("/productCreate", CreateProductController);

router.get("/productGetAll", GetAllProductsController);

router.get("/productGet/:pid", GetSingleProductController);

router.put("/productPut/:pid", UpdateProductController);

router.delete("/productDelete/:pid", DeleteProductController);

router.post("/categorysearch/", SearchCategoryProductController);

module.exports = router;
