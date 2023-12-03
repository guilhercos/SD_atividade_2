const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.post("/apiBook/login", (req, res) => controller.signin(req, res));
router.get("/api/search", (req, res) => controller.findBook(req, res));
router.post("/apiBook/search", (req, res) => controller.searchBook(req, res));

module.exports = router;
