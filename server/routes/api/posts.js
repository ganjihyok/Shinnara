const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const Posts = mongoose.model("Posts");

//POST new post route(authrized users only)
router.post("/", auth.required, (req, res, next) => {
  const {
    body: { post, participants }
  } = req;

  if (!post.ownerId || participants.length === 0) {
    return res.status(422).json({
      errors: {
        something: "went wrong"
      }
    });
  }

  const newPost = new Posts(post);

  newPost.initializeParticipants(participants);
  newPost.initializeComment();

  return newPost.save(function(err, result) {
    if (err) {
      return res.sendStatus(400);
    } else {
      return res.status(200).json({ result });
    }
  });
});

//POST update post route(authrized users only)
router.post("/update", auth.required, (req, res, next) => {
  const {
    body: { post }
  } = req;

  if (!post.ownerId || !post._id) {
    return res.status(422).json({
      errors: {
        something: "went wrong"
      }
    });
  }

  Posts.findOneAndUpdate(
    { _id: post._id },
    { videoURL: post.videoURL, content: post.content },
    { new: true },
    function(err, result) {
      if (err) {
        return res.sendStatus(400);
      } else {
        return res.status(200).json({ result });
      }
    }
  );
});

//DELETE delete post route(authrized users only)
router.delete("/delete", auth.required, (req, res, next) => {
  const {
    body: { post, user }
  } = req;

  if (!post.ownerId || !post._id) {
    return res.status(422).json({
      errors: {
        something: "went wrong"
      }
    });
  }

  Posts.findOneAndRemove({ _id: post._id, ownerId: user._id }, function(
    err,
    result
  ) {
    if (err) {
      return res.sendStatus(400);
    } else {
      return res.status(200).json({ result });
    }
  });
});

//GET get posts route(authrized users & guest users)
router.get("/", auth.required, (req, res, next) => {
  Posts.find({}, function(err, result) {
    if (err) {
      return res.sendStatus(400);
    } else {
      return res.status(200).json({ result });
    }
  });
});
module.exports = router;
