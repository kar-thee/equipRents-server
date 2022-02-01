const router = require("express").Router();

const GetAllProductsController = require("../controllers/admin/productCrud/GetAllProductsController");
const GetSingleProductController = require("../controllers/admin/productCrud/GetSingleProductController");
const CategoryDataController = require("../controllers/public/CategoryDataController");
const ContactUsController = require("../controllers/public/ContactUsController");
const SectionDataController = require("../controllers/public/SectionDataController");
const SignInController = require("../controllers/public/SignInController");
const SignUpController = require("../controllers/public/SignUpController");

router.post("/contactus", ContactUsController);

router.post("/signin", SignInController);

router.post("/signup", SignUpController);

router.get("/storeGetall", GetAllProductsController);

router.get("/productGet/:pid", GetSingleProductController);

router.get("/sectionData/:sectionName", SectionDataController);

router.get("/categoryData/:categoryName", CategoryDataController);

module.exports = router;
