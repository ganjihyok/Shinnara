const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema({
  comments: Array
});

mongoose.model("Comment", CommentSchema);
