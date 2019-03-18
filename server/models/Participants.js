const mongoose = require("mongoose");

const { Schema } = mongoose;

const ParticipantsSchema = new Schema({
  ownerId: String
});

mongoose.model("Participants", ParticipantsSchema);
