import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useLocation, useParams } from "react-router-dom";
import CommentBox from "./Comment";
import CommentUser from "./CommentUser";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { postDetails } from "../Redux/asyncMethods/postMethod";
import Loader from "./Loader";

const SinglePost = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const {
    singlePost: {
      title,
      metaDesc,
      bodyContent,
      userName,
      fileName,
      categories,
    },
  } = useSelector((state) => state.PostDetails);
  const { comment } = useSelector((state) => state.Comment);
  const { users } = useSelector((state) => state.Auth);
  useEffect(() => {
    dispatch(postDetails(id));
  }, [id, dispatch, comment]);

  function createMarkup() {
    return { __html: bodyContent };
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={pathname} />
      </Helmet>
      <div>
        {{ title, metaDesc, bodyContent, userName, fileName, categories } ? (
          <section className="single-post">
            <div className="cat">
              {categories &&
                categories.map((elem, i) => {
                  return (
                    <NavLink
                      to={`/blog?categories=${elem}`}
                      className="link"
                      key={i}
                    >
                      <p>{elem}</p>
                    </NavLink>
                  );
                })}
            </div>
            <figure>
              <img src={fileName} alt="" />
            </figure>
            <div className="author-name">
              <p>
                <span>Author : </span>
                <NavLink to={`/blog?name=${userName}`}>{userName}</NavLink>
              </p>
              <div className="social-media-icons">
                <NavLink to="https://facebook.com/kunjank31">
                  <FaFacebook />
                </NavLink>
                <NavLink to="https://twitter.com/kujank31">
                  <FaTwitter />
                </NavLink>
                <NavLink to="https://instagram.com/kunjank31">
                  <FaInstagram />
                </NavLink>
              </div>
            </div>
            <article>
              <div className="title">
                <h1>{title}</h1>
              </div>
              <div className="content">
                <div dangerouslySetInnerHTML={createMarkup()} />
                <div className="post-cat">
                  {categories &&
                    categories.map((elem, i) => {
                      return (
                        <NavLink
                          to={`/blog?categories=${elem}`}
                          className="link"
                          key={i}
                        >
                          <p>{elem}</p>
                        </NavLink>
                      );
                    })}
                </div>
              </div>
            </article>
          </section>
        ) : (
          <Loader />
        )}
        {users && <CommentBox />}
        {comment.length > 0 &&
          comment.map((elem, i) => {
            return <CommentUser comment={elem} key={i} />;
          })}
      </div>
    </>
  );
};

export default SinglePost;
