const mongoose = require("mongoose");

const { Schema } = mongoose;

const ParticipantsSchema = new Schema(
  {
    ownerId: String
  },
  { strict: false }
);

mongoose.model("Participants", ParticipantsSchema);
