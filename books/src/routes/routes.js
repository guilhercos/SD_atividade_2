const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.post("/book/login", (req, res) => controller.signin(req, res));

module.exports = router;
