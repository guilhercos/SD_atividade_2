const { comment: commentModel } = require("../models/comment");

async function create(req, res) {
  const { newComment } = req.body;

  const data = new Date();
  const day = data.getDate();
  const month = data.getMonth() + 1;
  const year = data.getFullYear();
  const fullData = `${day}/${month}/${year}`;
  console.log(fullData);
  try {
    new commentModel({
      bookId: newComment.bookId,
      content: newComment.content,
      user: newComment.user,
      date: fullData,
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
