const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", (req, res) => controller.renderMain(req, res));
router.post("/login", (req, res) => controller.signin(req, res));
router.get("/book", controller.isAuthenticated, (req, res) =>
  controller.renderBooks(req, res)
);
router.post("/book", controller.isAuthenticated, (req, res) => {
  controller.searchBook;
});

module.exports = router;
