import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./ReactQuillToolBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, postUpdate } from "../Redux/asyncMethods/postMethod";

const EditPage = () => {
  const { id } = useParams();
  const history = useHistory();
  // const {
  //   users: { _id, name },
  // } = useSelector((state) => state.Auth);

  const [postData, setPostData] = useState({
    title: "",
    metaDesc: "",
  });

  const dispatch = useDispatch();

  const [bodyContent, setBodyPost] = useState("");

  const postBlogData = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const { postStatus, singlePost, redirect } = useSelector(
    (state) => state.FetchPost
  );
  useEffect(() => {
    if (postStatus) {
      setPostData({
        title: singlePost.title,
        metaDesc: singlePost.metaDesc,
      });
      setBodyPost(singlePost.bodyContent);
    } else {
      dispatch(fetchPost(id));
    }
  }, [dispatch, postStatus, singlePost,id]);

  const editPost = (e) => {
    e.preventDefault();
    dispatch(
      postUpdate({
        title: postData.title,
        metaDesc: postData.metaDesc,
        bodyContent: bodyContent,
        id: singlePost._id,
      })
    );
    if (!redirect) {
      history.push("/dashboard", { replace: true });
    }
  };
  return (
    <>
      <section id="publishBlog">
        <div className="container">
          <form method="POST" onSubmit={editPost}>
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
                Edit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditPage;
