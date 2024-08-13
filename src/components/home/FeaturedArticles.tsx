import React from "react";

const article = (
  <div className="">
    <img src="https://x.com/akbenngold/photo" alt="" />
    <h3>Advanced metadata.</h3>
    <p>
      Customize SEO title, description, OG images, and table of contents to
      optimize content visibility.
    </p>
  </div>
);

function FeaturedArticles() {
  return (
    <div>
      <h2>Featured Articles</h2>
      <div>
        {article}
        {article}
        {article}
        {article}
        {article}
      </div>
    </div>
  );
}

export default FeaturedArticles;
