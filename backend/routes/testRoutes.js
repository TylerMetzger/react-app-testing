const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController.js");

router.post(
    "/test",
    testController.create
)

module.exports = router;