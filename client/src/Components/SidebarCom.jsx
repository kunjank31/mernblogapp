import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";
const SidebarCom = ({ posts }) => {
  return (
    <>
      <div className="post-style">
        <div className="post-image">
          <img src={posts.fileName} alt="PostPhoto" />
        </div>
        <div className="sidebar-title">
          <h3>
            <NavLink to={`/blog/${posts.slug}`}>{posts.title}</NavLink>
          </h3>
          <p>{moment(posts.updatedAt).format("ll")}</p>
        </div>
      </div>
    </>
  );
};

export default SidebarCom;
