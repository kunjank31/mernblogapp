const Posts = require("../models/posts");
const Categorie = require("../models/categories");

const fs = require("fs");
const Comment = require("../models/commentModel");

const postController = {
  async blogPost(req, res, next) {
    const {
      author,
      title,
      metaDesc,
      bodyContent,
      slug,
      userId,
      userName,
      categories,
    } = req.body;
    try {
      const slugOrURlExists = await Posts.exists({ slug });
      if (slugOrURlExists) {
        return res.status(410).json({ message: "URL or Slug must be unique" });
      }
      const posts = new Posts({
        author,
        title,
        metaDesc,
        slug,
        bodyContent,
        userName,
        userId,
        categories,
        fileName: req.file.filename,
      });
      const result = await posts.save();
      return res.status(201).json({ msg: "Your Post is created", result });
    } catch (error) {
      return next(error);
    }
  },
  // Update Blog Post
  async updateBlogPost(req, res, next) {
    const { title, metaDesc, bodyContent, id } = req.body;
    try {
      const updateData = await Posts.findByIdAndUpdate(
        id,
        {
          title,
          metaDesc,
          bodyContent,
        },
        { new: true }
      );
      return res.status(201).json({msg:'Post Updated',updateData});
    } catch (error) {
      console.log(error);
      return next(error);
    }
  },
  // Delete Post
  async deleteBlogPost(req, res, next) {
    try {
      const posts = await Posts.findByIdAndDelete({ _id: req.params.id });
      if (!posts) {
        return res.json({ message: "Nothing to delete" });
      }
      fs.unlinkSync(posts._doc.image);
      return res.status(410).json(posts);
    } catch (error) {
      return next(error);
    }
  },
  // Post Details
  async postDetails(req, res, next) {
    const id = req.params.id;
    try {
      const posts = await Posts.findOne({ slug: id }).select("-__v");
      const comment = await Comment.find({ postId: posts._id }).sort({
        updatedAt: -1,
      });
      return res.status(200).json({ msg: "your posts", posts, comment });
    } catch (error) {
      return next(error);
    }
  },
  // Single Post
  async singlePost(req, res, next) {
    const id = req.params.id;
    try {
      const posts = await Posts.findOne({ _id: id }).select("-__v");
      return res.status(200).json({ msg: "your posts", posts });
    } catch (error) {
      return next(error);
    }
  },
  // Show All Posts
  async showAllPost(req, res, next) {
    const username = req.query.name;
    const cat = req.query.categories;

    try {
      if (cat) {
        const result = await Posts.find({ categories: { $in: [cat] } });
        return res.status(200).json(result);
      }
      if (username) {
        const userPosts = await Posts.find({ userName: username });
        return res.status(200).json(userPosts);
      }
      const posts = await Posts.find()
        .sort({ createdAt: -1 })
        .select("-__v -_id -createdAt");
      return res.status(200).json(posts);
    } catch (error) {
      return next(error);
    }
  },
  // Fetch Posts
  async fetchPosts(req, res, next) {
    const id = req.params.id;
    try {
      const posts = await Posts.find({ userId: id }).sort({ createdAt: -1 });
      if (!posts) {
        return res.status(400).json({ msg: "this user not any post" });
      }
      return res.status(200).json({ msg: "User Posts", posts });
    } catch (error) {
      return next(error);
    }
  },
  // Catgories
  async categories(req, res, next) {
    try {
      const category = new Categorie({
        ...req.body,
        title: req.body.title,
      });
      const result = await category.save();
      return res.status(201).json({ msg: "Category Created", result });
    } catch (error) {
      return next(error);
    }
  },
  // Show Catgories
  async categoriesShow(req, res, next) {
    try {
      const result = await Categorie.find();
      return res.status(201).json({ msg: "Show All Categories", result });
    } catch (error) {
      return next(error);
    }
  },
};
module.exports = postController;
