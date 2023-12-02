const axios = require("axios");
const jwt = require("jsonwebtoken");

async function renderMain(req, res) {
  try {
    res.render("partials/initial", { layout: "main" });
  } catch (err) {
    console.log("ERRO: " + err);
  }
}

async function renderBooks(req, res) {
  try {
    res.render("partials/books", { layout: "main", Books: books });
  } catch (err) {
    console.log("ERRO: " + err);
  }
}

async function signin(req, res) {
  try {
    const { credential } = req.body;

    const getAxios = await axios.post("http://localhost:6000/apiBook/login", {
      credential,
    });

    const token = getAxios.data.token;
    const user = getAxios.data.user;

    const tokenBearer = `Bearrer ${token}`;
    req.session.user = user;

    res.cookie("acess_token", tokenBearer, { maxAge: 3600000 });
    res.set("Authorization", tokenBearer);
    res.redirect("/book");
  } catch (err) {
    console.log("ERRO: " + err);
  }
}

async function findBook(value) {
  console.log(value);
}

async function isAuthenticated(req, res, next) {
  const { acess_token } = req.cookies;

  if (acess_token && req.session.user) {
    try {
      const [, token] = acess_token.split(" ");
      await jwt.verify(token, "secret");

      return next();
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  } else {
    req.session.user = null;
    res.redirect("/");
  }
}

async function searchBook(req, res) {
  const { search } = req.body;

  const book = await axios.post("http://localhost:6000/apiBook/search", {
    search,
  });

  res.json(book.data);
}

async function createComment(req, res) {
  const { content, bookId } = req.body;

  const user = req.session.user;

  const newComment = {
    bookId,
    user,
    content,
  };

  const axiosComment = await axios.post(
    "http://localhost:5000/apiComment/create",
    {
      newComment,
    }
  );
  res.json(axiosComment.data);
}

async function getComment(req, res) {
  const id = req.params.id;

  const comment = await axios.get(
    `http://localhost:5000/apiComment/comment/${id}`
  );
  res.json(comment.data);
}

module.exports = {
  renderMain,
  renderBooks,
  signin,
  isAuthenticated,
  searchBook,
  createComment,
  getComment,
};
