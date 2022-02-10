import React from "react";
import BlogComponent from "../blog-cardComponent";
import PopularComponent from "../popularComponent";

export default function BodyComponent() {
  return (
    <div className="d-flex">
      <div className="col-md-8">
        <BlogComponent></BlogComponent>
      </div>
      <div className="col-md-2">
        <PopularComponent></PopularComponent>
      </div>
    </div>
  );
}
