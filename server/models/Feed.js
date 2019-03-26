const mongoose = require("mongoose");

require("./Comment");

const Comment = mongoose.model("Comment");

const { Schema } = mongoose;

const FeedSchema = new Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  content: String,
  commentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" }
});

FeedSchema.methods.initializeComment = function() {
  const newCommentModel = new Comment();
  newCommentModel.save();

  this.commentId = newCommentModel.id;
};

mongoose.model("Feed", FeedSchema);
