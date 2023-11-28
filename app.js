const express = require("express");
const app = express();
const db = require("./src/database/db");
const { handlebars, engine } = require("express-handlebars");
const path = require("path");
const routes = require("./src/routes/routes");

db.ConnectMongoDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine("handlebars", engine({ layout: false }));
app.set("views", __dirname + "/src/views");
app.set("view engine", "handlebars");
app.use(routes);

app.listen(3000, () => {
  console.log("servidor rodando porta 3000");
});