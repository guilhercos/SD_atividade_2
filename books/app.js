const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./src/routes/routes");

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
app.use(
  cors({
    credentials: true,
  })
);
app.use(routes);

app.listen(6000, () => {
  console.log("localhost:6000");
});
