import React from "react";
import TopSection from "./TopSection";
import RecentContent from "./RecentContent";
import SeoSection from "./SeoSection";
import Team from "./Team";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coding Tadka : Its my first Blog</title>
        <meta name="description" content="HTML,JS ,CSS" />
        <link rel="canonical" href="/" />
      </Helmet>
      <TopSection />
      <RecentContent />
      <SeoSection />
      <Team />
    </>
  );
};

export default Home;
