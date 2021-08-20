import React, { useEffect } from "react";
import SliderCard from "./SliderCard";
import { homePage } from "../Redux/asyncMethods/postMethod";
import { useSelector, useDispatch } from "react-redux";

const SeoSection = () => {
  const { homePagePost } = useSelector((state) => state.HomePage);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homePage());
  },[dispatch]);
  return (
    <>
      <section className="seo-post section">
        <div className="container">
          <h2 className="sec-head">SEO</h2>
          <div className="main-card-slider">
            <div className="content-card-slider">
            {homePagePost.slice(0, 3).map((elem, i) => {
              return <SliderCard sliderCard={elem} key={i} />;
            })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoSection;
