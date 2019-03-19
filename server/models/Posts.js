const mongoose = require("mongoose");

require("./Participants");
require("./Comment");

const Comment = mongoose.model("Comment");
const Participants = mongoose.model("Participants");

const { Schema } = mongoose;

const PostsSchema = new Schema({
  ownerId: String,
  videoURL: String,
  content: String,
  participantsId: String,
  commentId: String
});

PostsSchema.methods.initializeParticipants = function(participants) {
  const newParticipantsModel = new Participants(participants);
  newParticipantsModel.save();

  this.participantsId = newParticipantsModel.id;
};

PostsSchema.methods.initializeComment = function() {
  const newCommentModel = new Comment();
  newCommentModel.save();

  this.commentId = newCommentModel.id;
};

mongoose.model("Posts", PostsSchema);
