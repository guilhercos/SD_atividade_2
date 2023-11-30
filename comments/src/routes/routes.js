const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/criar", (req, res) => commentController.create(req, res));

router.get("/comentarios", (req, res) =>
  commentController.commentAll(req, res)
);

router.delete("/deletar/:id", (req, res) =>
  commentController.deleteComment(req, res)
);

module.exports = router;
