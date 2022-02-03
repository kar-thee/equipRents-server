const GetProfileController = require("../controllers/private/GetProfileController");

const router = require("express").Router();

router.get("/Getprofile", GetProfileController);

module.exports = router;
