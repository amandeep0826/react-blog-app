import React from "react";

export default function FeaturedBlog() {
  return (
    <div
      className="container"
      style={{
        paddingRight: "15px",
        paddingLeft: "15px",
        backgroundColor: "#e8f3ec",
      }}
    >
      <div>
        <h1 class="secondfont mb-3 font-weight-bold">
          Mundana is an HTML Bootstrap Template for Professional Blogging
        </h1>
        <p class="mb-3">
          Beautifully crafted with the latest technologies, SASS &amp; Bootstrap
          4.1.3, Mundana is the perfect design for your professional blog.
          Homepage, post article and category layouts available.
        </p>
        <a href="./article.html" class="btn btn-dark">
          Read More
        </a>
      </div>
      <div>
        <img src={require("../../assets/home.jpg")} />
      </div>
      <label>Hello</label>
    </div>
  );
}
