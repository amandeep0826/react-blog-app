import React from "react";
import BlogCard from "../blog-card";
import AllStories from "../allStories";

export default function BlogComponent() {
  return (
    <div
      style={{
        paddingLeft: "15px",
      }}
    >
      <AllStories></AllStories>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}
