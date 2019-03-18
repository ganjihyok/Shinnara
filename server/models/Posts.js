const mongoose = require("mongoose");

const { Schema } = mongoose;

const PostsSchema = new Schema({
  ownerId: String,
  videoURL: String,
  content: String,
  participantsId: String,
  commentId: String
});

mongoose.model("Posts", PostsSchema);
