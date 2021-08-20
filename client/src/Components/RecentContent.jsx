import React, { useEffect } from "react";
import Card from "./Cards";
import { homePage } from "../Redux/asyncMethods/postMethod";
import { useSelector, useDispatch } from "react-redux";
const RecentContent = () => {
  const { homePagePost } = useSelector((state) => state.HomePage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homePage());
  }, [dispatch]);
  return (
    <>
      <section className="recent-post section">
        <div className="container">
          <h2 className="sec-head">Recent Content</h2>
          <div className="card-wrapper">
            {homePagePost.slice(0, 3).map((elem, i) => {
              return <Card home={elem} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentContent;
