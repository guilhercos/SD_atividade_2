const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/apiComment/create", (req, res) =>
  commentController.create(req, res)
);

router.get("/apiComment/comment/:id", (req, res) =>
  commentController.getComment(req, res)
);

router.delete("/deletar/:id", (req, res) =>
  commentController.deleteComment(req, res)
);

module.exports = router;
