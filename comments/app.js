const express = require("express");
const router = require("./src/routes/routes");
const db = require("./src/database/db");
const app = express();

db.ConnectMongoDB();

app.use(express.json());
app.use(router);

app.listen(5000, () => {
  console.log("localhost:5000");
});
