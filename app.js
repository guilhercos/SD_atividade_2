const express = require("express");
const app = express();
const db = require("./src/database/db");
const routes = require("./src/routes/routes");

app.use(express.json());

db.ConnectMongoDB();

app.use(routes);

app.listen(3000, () => {
  console.log("servidor rodando porta 3000");
});
