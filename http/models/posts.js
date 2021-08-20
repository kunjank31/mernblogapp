const mongoose = require("mongoose");
const { APP_URL } = require("../config");

const postSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    metaDesc: { type: String, required: true },
    bodyContent: { type: String, required: true },
    fileName: {
      type: String,
      required: true,
      get: (fileName) => {
        return `${APP_URL}/image/${fileName}`;
      },
    },
    userName: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    categories: { type: Array },
  },
  { timestamps: true, toJSON: { getters: true }, id: false }
);
const Post = new mongoose.model("Post", postSchema);

module.exports = Post;
