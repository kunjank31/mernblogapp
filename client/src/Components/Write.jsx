import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./ReactQuillToolBar";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "../Redux/asyncMethods/postMethod";
import { axiosInstance } from "../config";

const Write = () => {
  const [categories, showCat] = useState("");
  const history = useHistory();
  const { redirect } = useSelector((state) => state.Post);
  const {
    users: { _id, name },
  } = useSelector((state) => state.Auth);
  const [postData, setPostData] = useState({
    title: "",
    metaDesc: "",
    author: "",
    categories: "",
  });
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState(null);

  const [slug, setSlug] = useState("");
  const [slugButton, setSlugBtn] = useState(false);
  const setUpadateSlug = (e) => {
    setSlugBtn(true);
    setSlug(e.target.value);
  };
  const updateSlug = (e) => {
    e.preventDefault();
    setSlug(slug.trim().split(" ").join("-").toLowerCase());
  };

  const [bodyContent, setBodyPost] = useState("");

  const postBlogData = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axiosInstance
      .get("/api/blog/showcat")
      .then(({ data }) => {
        showCat(data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const publishArticle = (e) => {
    e.preventDefault();
    const { title, metaDesc, author, categories } = postData;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("metaDesc", metaDesc);
    formData.append("author", author);
    formData.append("slug", slug);
    formData.append("bodyContent", bodyContent);
    formData.append("fileName", fileName);
    formData.append("userId", _id);
    formData.append("userName", name);
    formData.append("categories", categories);
    dispatch(newPost(formData));
    if (!redirect) {
      history.push("/dashboard", { replace: true });
    }
  };
  return (
    <>
      <section id="publishBlog">
        <div className="container">
          <form method="POST" onSubmit={publishArticle}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={postData.title}
                id="title"
                onChange={postBlogData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                name="author"
                value={postData.author}
                id="author"
                onChange={postBlogData}
              />
            </div>
            <div className="form-group">
              <label htmlFor="slug">Slug</label>
              <input
                type="text"
                name="slug"
                value={slug}
                id="slug"
                onChange={setUpadateSlug}
              />
              {slugButton && (
                <button className="btn slug" onClick={updateSlug}>
                  Update URL
                </button>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="fileName"
                // value={fileName}
                id="image"
                // style={{display:'none'}}
                onChange={(e) => setFileName(e.target.files[0])}
              />
            </div>
            {fileName && (
              <div className="form-group">
                <img src={URL.createObjectURL(fileName)} alt="" />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="cat">Category</label>
              <select
                name="categories"
                id="cat"
                className="selectBox"
                value={postData.categories}
                onChange={postBlogData}
                multiple
              >
                <option value="">Select Category</option>
                {categories &&
                  categories.map((elem, i) => {
                    return (
                      <option value={elem.title} key={i}>
                        {elem.title.toUpperCase()}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bodyContent">Body</label>
              <div className="text-editor">
                <EditorToolbar />
                <ReactQuill
                  theme="snow"
                  id="bodyContent"
                  name="bodyContent"
                  value={bodyContent}
                  placeholder={"Write something awesome..."}
                  modules={modules}
                  formats={formats}
                  onChange={(e) => {
                    setBodyPost(e);
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="metaDescription">Meta Description</label>
              <textarea
                name="metaDesc"
                id="metaDescription"
                value={postData.metaDesc}
                onChange={postBlogData}
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn" type="submit">
                Publish
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Write;
