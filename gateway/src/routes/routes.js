const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", (req, res) => controller.renderMain(req, res));
router.post("/", (req, res) => controller.renderBooks(req, res));

router.post("/signin", (req, res) => controller.signin(req, res));

module.exports = router;
