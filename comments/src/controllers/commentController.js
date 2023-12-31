const { comment: commentModel } = require("../models/comment");

async function create(req, res) {
  const comment = req.body.newComment;
  const data = new Date();
  const day = data.getDate();
  const month = data.getMonth() + 1;
  const year = data.getFullYear();
  const fullData = `${day}/${month}/${year}`;

  try {
    new commentModel({
      bookId: comment.bookId,
      content: comment.content,
      user: comment.user.name,
      date: fullData,
    })
      .save()
      .then(res.json("criou comentário"));
  } catch (error) {
    console.log(error);
  }
}

async function getComment(req, res) {
  const id = req.params.id;
  const comments = await commentModel.find({ bookId: id });
  res.json(comments);
}

async function deleteComment(req, res) {
  const id = req.params.id;
  await commentModel.deleteOne({ _id: id });
  res.json(`foi deletado o comentário do id ${id}`);
}

module.exports = { create, getComment, deleteComment };
