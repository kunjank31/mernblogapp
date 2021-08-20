import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Redux/asyncMethods/postMethod";
import Loader from "./Loader";
import moment from "moment";
import { SET_LOADER } from "../Redux/type/postType";
import { axiosInstance } from "../config";
import UserSidebar from "./UserSidebar";

const Dashboard = () => {
  const {
    users: { _id },
    token,
  } = useSelector((state) => state.Auth);
  const { posts, loading } = useSelector((state) => state.FetchPosts);
  const dispatch = useDispatch();

  const postDelete = async (id) => {
    const confirm = window.confirm("Are you really want to delet this post ?");
    if (confirm) {
      dispatch({ type: SET_LOADER });
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axiosInstance.get(`/api/blog/delete/${id}`, config);
        dispatch(fetchPosts(_id));
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    dispatch(fetchPosts(_id));
  }, [_id, dispatch]);
  return (
    <>
      <div className="dashboard-section">
        <div className="container">
          <div className="admin-panel">
            <UserSidebar />
            <div className="right-bar">
              <div className="admin-blog">
                {!loading ? (
                  posts.length > 0 ? (
                    posts.map((elem, i) => {
                      return (
                        <div className="flex" key={i}>
                          <NavLink to={`/blog/${elem.slug}`}>
                            <div className="post-title">{elem.title}</div>
                            <span className="timeShow">
                              {moment(elem.createdAt).fromNow()}
                            </span>
                          </NavLink>
                          <div className="btn-group">
                            <NavLink to={`/edit/${elem._id}`}>
                              <IconButton
                                aria-label="edit"
                                className="editIcon"
                              >
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </NavLink>
                            <IconButton
                              aria-label="delete"
                              className="deleteIcon"
                              onClick={() => postDelete(elem._id)}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    "Dont have a post"
                  )
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
