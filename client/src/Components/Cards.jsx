import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

const Card = ({ home }) => {
  // const {fileName,updatedAt,title,slug} = home
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={home.fileName} alt="Card-Img" />
        </div>
        <div className="time">
          <p>{moment(home.updatedAt).format("ll")}</p>
        </div>
        <div className="card-head">
          {/* <h2>Impact Of Extrinsic Motivation On Intrinsic Motivation</h2> */}
          <h2>{home.title}</h2>
        </div>
        <div className="card-btn">
          <NavLink to={`/blog/${home.slug}`}>
            <button className="btn">Read More</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Card;
