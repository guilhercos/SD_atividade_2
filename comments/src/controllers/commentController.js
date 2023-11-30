const { comment: commentModel } = require("../models/comment");

async function create(req, res) {
  const { content, autor, data } = req.body;
  try {
    new commentModel({
      content,
      autor,
      data,
    })
      .save()
      .then(res.json("criou comentário"));
  } catch (error) {
    console.log(error);
  }
}

async function commentAll(req, res) {
  const comments = await commentModel.find();
  res.json(comments);
}

async function deleteComment(req, res) {
  const id = req.params.id;
  await commentModel.deleteOne({ _id: id });
  res.json(`foi deletado o comentário do id ${id}`);
}

module.exports = { create, commentAll, deleteComment };
