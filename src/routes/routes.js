const express = require("express");
const router = express.Router();

const bookController = require("../controllers/commentController");

router.get("/", (req, res) => bookController.renderMain(req, res));

router.post("/criar", (req, res) => bookController.create(req, res));

router.get("/comentarios", (req, res) => bookController.commentAll(req, res));

router.delete("/deletar/:id", (req, res) =>
  bookController.deleteComment(req, res)
);

module.exports = router;
