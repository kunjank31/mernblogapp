import React from "react";
import User from "../img/1.jpg";
import moment from "moment";
// import { useSelector } from "react-redux";
const CommentUser = ({ comment }) => {
  // const { users } = useSelector((state) => state.Auth);
  return (
    <>
      <section className="user-comment">
        <div className="user-msg">
          <div className="user-img">
            <img src={User} alt="UserProfile" />
          </div>
          <div className="user-details">
            <div className="user-wrapper">
              <h4>{comment.name}</h4>
              <p>{moment(comment.createdAt).fromNow()}</p>
            </div>
            <p className="text-msg">{comment.comment}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommentUser;
