const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.post("/book/signin", (req, res) => controller.signin);

module.exports = router;
