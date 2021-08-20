import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useLocation, NavLink } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import SideBar from "./Sidebar";
import Loader from "./Loader";
import { homePage } from "../Redux/asyncMethods/postMethod";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    marginBottom: "1rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
}));

const Blog = () => {
  const { homePagePost } = useSelector((state) => state.HomePage);
  const dispatch = useDispatch();
  const { search, pathname } = useLocation();
  const [state, setState] = useState();
  useEffect(() => {
    axios
      .get(`/api/blog/posts${search}`)
      .then((data) => {
        setState(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [search]);
  // useEffect(() => {
  //   axios
  //     .get(`/api/blog/posts${search}`)
  //     .then((data) => {
  //       setState(data.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, [search]);
  useEffect(() => {
    dispatch(homePage());
  }, [dispatch]);
  const { root, content, details } = useStyles();
  const BlogPost = ({ post }) => {
    return (
      <>
        {(post &&
          post.map((elem, i) => {
            return (
              <Card className={root} key={i}>
                <div className="cat blog-cat">
                  {elem.categories &&
                    elem.categories.map((cat) => {
                      return (
                        <NavLink
                          to={`/blog?categories=${cat}`}
                          className="link"
                        >
                          <p>{cat}</p>
                        </NavLink>
                      );
                    })}
                </div>
                <div className={details}>
                  <CardContent className={content}>
                    <NavLink to={`/blog/${elem.slug}`} className="userName">
                      <Typography component="h2" variant="h2">
                        {elem.title}
                      </Typography>
                    </NavLink>
                    <NavLink to={`/blog?name=${elem.userName}`}>
                      <PersonIcon />
                      <Typography component="h6" variant="h6">
                        {elem.userName}
                      </Typography>
                    </NavLink>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {elem.metaDesc.slice(0, 120)}...
                    </Typography>
                  </CardContent>
                </div>

                <CardMedia image={elem.fileName} title={elem.title} />
                {/* <div className="img-container">
                          <img src={elem.fileName} />
                        </div> */}
              </Card>
            );
          })) || <Loader />}
      </>
    );
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href={pathname} />
      </Helmet>
      <main className="margin-blog">
        <div className="container">
          <div className="blog-area singlePageWrapper">
            <div className="blog-card">
              {search ? (
                <BlogPost post={state} />
              ) : (
                <BlogPost post={homePagePost} />
              )}
            </div>
        <aside className="sidebar">
          <SideBar posts={homePagePost} />
        </aside>
          </div>
        </div>

      </main>
    </>
  );
};

export default Blog;
