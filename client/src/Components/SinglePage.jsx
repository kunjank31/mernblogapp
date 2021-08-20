import { useSelector, useDispatch } from "react-redux";
// import Loader from "./Loader";
import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
import SideBar from "./Sidebar";
import { homePage } from "../Redux/asyncMethods/postMethod";

const SinglePage = () => {
  const { homePagePost } = useSelector((state) => state.HomePage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homePage());
  }, [dispatch]);
  return (
    <>
      <main className="margin-blog">
        <div className="container">
          <div className="singlePageWrapper">
            <SinglePost />
            <SideBar posts={homePagePost} />
          </div>
        </div>
      </main>
    </>
  );
};

export default SinglePage;
