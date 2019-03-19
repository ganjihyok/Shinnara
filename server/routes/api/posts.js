const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const Posts = mongoose.model("Posts");

//POST new post route
router.post("/", auth.required, (req, res, next) => {
  const {
    body: { post, participants }
  } = req;

  if (!post.ownerId) {
    return res.status(422).json({
      errors: {
        something: "went wrong"
      }
    });
  }

  const newPost = new Posts(post);
  newPost.initializeParticipants(participants);
  newPost.initializeComment();

  return newPost.save().then(() => res.sendStatus(200));
});

module.exports = router;
