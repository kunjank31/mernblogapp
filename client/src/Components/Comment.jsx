import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { comment } from "../Redux/asyncMethods/postMethod";
const CommentBox = () => {
  const [userComment, setComment] = useState("");
  const { users } = useSelector((state) => state.Auth);
  const { singlePost } = useSelector((state) => state.PostDetails);
  const dispatch = useDispatch();
  const commentForm = (e) => {
    return setComment(e.target.value);
  };
  const submitCommentForm = async (e) => {
    e.preventDefault();
    dispatch(
      comment({ comment: userComment, name: users.name, id: singlePost._id })
    );
    setComment("");
  };
  return (
    <>
      <section className="comment">
        <h2>Comment</h2>
        <form method="POST" onSubmit={submitCommentForm}>
          <textarea
            name="comment"
            value={userComment}
            placeholder="Enter your queries..."
            onChange={commentForm}
          ></textarea>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default CommentBox;
