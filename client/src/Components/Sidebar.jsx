// import { useSelector, useDispatch } from "react-redux";
import Loader from "./Loader";
import React from "react";
import SidebarCom from "./SidebarCom";
import { NavLink } from "react-router-dom";
// import { homePage } from "../Redux/asyncMethods/postMethod";
const SideBar = ({ posts }) => {
  // const { homePagePost } = useSelector((state) => state.HomePage);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(homePage());
  // }, []);
  return (
    <>
      <section className="sidebar-section">
        <aside className="sidebar">
          <h3 className="sidebar-head">Recent Posts</h3>
          {(posts &&
            posts.slice(0, 3).map((elem, i) => {
              return <SidebarCom key={i} posts={elem} />;
            })) || <Loader />}
        </aside>
        <aside className="sidebar">
          <h3 className="sidebar-head">Category Posts</h3>
          <div className="cat-wrapper">
          {posts &&
            posts.map((elem,i) => {
              return <div className="post-cat" key={i}>
                {elem.categories.map((cat, i) => {
                  return (
                    <NavLink
                      to={`/blog?categories=${cat}`}
                      className="link"
                      key={i}
                    >
                      <p>{cat}</p>
                    </NavLink>
                  );
                })}
              </div>;
            })}
          </div>
        </aside>
        <aside className="sidebar">
          <h3 className="sidebar-head">Most Posts</h3>
          {(posts &&
            posts.slice(0, 3).map((elem, i) => {
              return <SidebarCom key={i} posts={elem} />;
            })) || <Loader />}
        </aside>
      </section>
    </>
  );
};

export default SideBar;
