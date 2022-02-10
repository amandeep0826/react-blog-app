import React from "react";
import BlogComponent from "../blog-cardComponent";
import PopularComponent from "../popularComponent";

export default function BodyComponent() {
  return (
    <div className="d-flex">
      <div className="col-md-8">
        <BlogComponent></BlogComponent>
      </div>
      <div className="col-md-4 pl-4" style={{ paddingLeft: "1.5rem" }}>
        <PopularComponent></PopularComponent>
      </div>
    </div>
  );
}
