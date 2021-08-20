const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    comment: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);
const Comment = new mongoose.model("Comment", commentSchema);

module.exports = Comment;
