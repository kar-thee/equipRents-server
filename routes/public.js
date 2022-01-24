const router = require("express").Router();

const ContactUsController = require("../controllers/public/ContactUsController");

router.post("/contactus", ContactUsController);

module.exports = router;
