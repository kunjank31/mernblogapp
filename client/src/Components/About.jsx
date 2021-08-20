import React from "react";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <meta name="description" content="This is About us page" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <h1>This is About</h1>
    </>
  );
};

export default About;
