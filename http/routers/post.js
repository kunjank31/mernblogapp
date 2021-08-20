const postController = require("../controllers/postController");
const router = require("express").Router();
const admin = require("../middlewares/admin");
const authUser = require("../middlewares/authUser");
const upload = require("../middlewares/multer");
const validation = require("../middlewares/validation");

router.post("/post", [authUser, upload, validation], postController.blogPost);
router.post("/update", authUser, postController.updateBlogPost);
router.get("/delete/:id", authUser, postController.deleteBlogPost);
router.get("/post/:id", postController.postDetails);
router.get("/singlepost/:id", authUser, postController.singlePost);
router.get("/posts", postController.showAllPost);
router.get("/posts/:id", authUser, postController.fetchPosts);

router.post("/categories", postController.categories);
router.get("/showcat", postController.categoriesShow);

module.exports = router;
