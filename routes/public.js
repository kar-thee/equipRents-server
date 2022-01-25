const router = require("express").Router();

const ContactUsController = require("../controllers/public/ContactUsController");
const SignInController = require("../controllers/public/SignInController");
const SignUpController = require("../controllers/public/SignUpController");

router.post("/contactus", ContactUsController);

router.post("/signin", SignInController);

router.post("/signup", SignUpController);

module.exports = router;
