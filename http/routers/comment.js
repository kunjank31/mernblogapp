const router = require("express").Router();
const Comment = require("../models/commentModel");
const authUser = require("../middlewares/authUser");
// Register
router.post("/comment", authUser, async (req, res, next) => {
  try {
    const comment = new Comment({
      comment: req.body.comment,
      postId: req.body.id,
      name: req.body.name,
    });
    const result = await comment.save();
    return res.json(result);
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
