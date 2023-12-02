const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = mongoose.Schema({
  bookId: String,
  content: String,
  user: String,
  date: String,
});

const comment = mongoose.model("comment", commentSchema);

module.exports = { comment };
