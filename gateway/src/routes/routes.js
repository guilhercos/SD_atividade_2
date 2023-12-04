const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", (req, res) => controller.renderMain(req, res));
router.post("/login", (req, res) => controller.signin(req, res));
router.get("/book", controller.isAuthenticated, (req, res) =>
  controller.renderBooks(req, res)
);
router.post("/book", (req, res) => controller.searchBook(req, res));
router.post("/bookFound", (req, res) => controller.renderBooks(req, res));

router.post("/getBook", (req, res) => controller.getBook(req, res));
router.get("/getBook", (req, res) => controller.getBook(req, res));

router.post("/createComment", (req, res) => controller.createComment(req, res));
router.get("/comment/:id", (req, res) => controller.getComment(req, res));

module.exports = router;
