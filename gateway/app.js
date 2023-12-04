const express = require("express");
const app = express();
const { handlebars, engine } = require("express-handlebars");
const routes = require("./src/routes/routes");
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(express.static("./src"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "dsaddssd",
    name: "sessionId",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
  })
);

// Handlebars
app.engine("handlebars", engine({ layout: false }));
app.set("views", __dirname + "/src/views");
app.set("view engine", "handlebars");
app.use(routes);

app.listen(3000, () => {
  console.log("servidor rodando porta 3000");
});
