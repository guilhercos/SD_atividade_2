const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectMongoDB = () => {
  mongoose
    .connect(
      `mongodb://127.0.0.1:27017/mobile`
    )
    .then(() => {
      console.log("Conectou ao banco!");
    })
    .catch((err) => console.log(err));
}

module.exports = {ConnectMongoDB: connectMongoDB}