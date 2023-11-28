const express = require("express");
const app = express();
const bookController = require("./src/controllers/commentController");
const db = require("./src/database/db");
const { handlebars, engine } = require("express-handlebars");
const path = require('path');

db.ConnectMongoDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname + "src/views")));


// Handlebars
app.engine("handlebars", engine({ layout: false }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => bookController.renderMain(req, res));
app.post("/criar", (req, res) => bookController.create(req, res));
app.get("/comentarios", (req, res) => bookController.commentAll(req, res));
app.delete("/deletar/:id", (req, res) =>
  bookController.deleteComment(req, res)
);

app.listen(3000, () => {
  console.log("servidor rodando porta 3000");
});
