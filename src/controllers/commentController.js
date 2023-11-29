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
  const removeComment = await commentModel.deleteOne({ _id: id });
  res.json(`foi deletado o comentário do id ${id}`);
}

async function renderMain(req, res) {
  try {
    res.render("partials/initial", { layout: "main" });
  } catch (err) {
    console.log("ERRO: " + err);
  }
}

async function renderBooks(req, res) {
  try {
    res.render("partials/books", { layout: "main" });
  } catch (err) {
    console.log("ERRO: " + err);
  }
}

module.exports = { create, commentAll, deleteComment, renderMain, renderBooks };
