const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
const auth = require("../auth");
const Feed = mongoose.model("Feed");

//POST new post route(authrized users only)
router.post("/", auth.required, (req, res, next) => {
  const {
    body: { feed }
  } = req;

  if (!feed.ownerId) {
    return res.status(422).json({
      errors: {
        something: "went wrong"
      }
    });
  }

  const newFeed = new Feed(feed);

  newFeed.initializeComment();

  return newFeed.save(function(err, result) {
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
    body: { feed }
  } = req;

  if (!feed.ownerId || !feed._id) {
    return res.status(422).json({
      errors: {
        something: "went wrong"
      }
    });
  }

  Feed.findOneAndUpdate(
    { _id: feed._id },
    { content: feed.content },
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
    body: { feed, user }
  } = req;

  if (!feed.ownerId || !feed._id) {
    return res.status(422).json({
      errors: {
        something: "went wrong"
      }
    });
  }

  Feed.findOneAndRemove({ _id: feed._id, ownerId: user._id }, function(
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

//GET get Feed route(authrized users & guest users)
router.get("/", auth.required, (req, res, next) => {
  Feed.find({})
    .populate({ path: "commentId", select: "comments" })
    .populate("ownerId", ["username", "profilePic"])
    .exec((err, docs) =>
      err ? console.log(err) : res.status(200).json({ result: docs })
    );
});
module.exports = router;
