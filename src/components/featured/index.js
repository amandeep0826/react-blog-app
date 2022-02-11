import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedBlog() {
  return (
    <div
      className="d-flex"
      style={{
        paddingLeft: "15px",
        backgroundColor: "#e8f3ec",
        justifyContent: "space-between",
        display: "flex",
        marginRight: "15px",
        marginLeft: "15px",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          maxWidth: "50%",
          widows: "100%",
          paddingBottom: "5rem",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "5rem",
          display: "block",
        }}
      >
        <h1
          style={{
            fontFamily: "Roboto",
            marginBottom: "1rem",
            fontSize: "2.5rem",
            fontWeight: "700",
            boxSizing: "inherit",
            color: "inherit",
          }}
          class="secondfont mb-3 font-weight-bold"
        >
          Mundana is an HTML Bootstrap Template for Professional Blogging
        </h1>
        <p
          style={{
            fontFamily: "Roboto",
            marginBottom: "1rem",
            marginTop: "0",
            boxSizing: "inherit",
            color: "inherit",
          }}
          class="mb-3"
        >
          Beautifully crafted with the latest technologies, SASS &amp; Bootstrap
          4.1.3, Mundana is the perfect design for your professional blog.
          Homepage, post article and category layouts available.
        </p>
        <Link to="./blog" class="btn btn-dark">
          Read More
        </Link>
      </div>
      <div
        className="col-md-6 d-none d-md-block pr-0"
        style={{ backgroundSize: "cover" }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src={require("../../assets/home.jpg")}
        />
      </div>
    </div>
  );
}
