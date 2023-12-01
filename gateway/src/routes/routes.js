const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const controllerBook = require("../../../books/src/controllers/controller");
const commentController = require("../../../comments/src/controllers/commentController");

router.get("/", (req, res) => controller.renderMain(req, res));
//router.post("/", (req, res) => controller.renderBooks(req, res));

router.post("/login", (req, res) => controller.signin(req, res));

router.post("/book/login", (req, res) => controllerBook.signin(req, res));

router.post("/criar", (req, res) => commentController.create(req, res));

router.get("/comentarios", (req, res) =>
  commentController.commentAll(req, res)
);

router.delete("/deletar/:id", (req, res) =>
  commentController.deleteComment(req, res)
);

module.exports = router;
