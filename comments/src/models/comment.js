const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = mongoose.Schema({
  content: String,
  autor: String,
  data: String,
});

const comment = mongoose.model("comment", commentSchema);

module.exports = { comment };
