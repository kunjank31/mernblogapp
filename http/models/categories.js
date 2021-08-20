const mongoose = require("mongoose");

const categoiresSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    catId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  },
  { timestamps: true }
);
const Categorie = new mongoose.model("Categorie", categoiresSchema);

module.exports = Categorie;
