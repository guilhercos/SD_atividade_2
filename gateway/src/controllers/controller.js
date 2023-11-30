const axios = require("axios");

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
 
async function findBook(value){
  console.log(value);
}

async function signin(req, res) {
  const { credential } = req.body;

  const getAxios = axios.post("http://localhost:6000/book/signin", {
    credential,
  });
  const token = getAxios.data.token;
  const user = getAxios.data.user;

  const tokenBearer = `Bearrer ${token}`;
  req.session.user = user;

  res.cookie("acess_token", tokenBearer, { maxAge: 3600000 });
  res.set("Authorization", tokenBearer);
}

module.exports = { renderMain, renderBooks, signin };
