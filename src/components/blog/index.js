import React from "react";
import BlogBodyComponent from "../blogBody";
import BlogHeaderComponent from "../blogHeader";
import FooterComponent from "../footer";
import NavbarComponent from "../navbar";

export default function BlogComponent() {
  return (
    <div style={{ paddingRight: "7em", paddingLeft: "7em" }}>
      <NavbarComponent />
      <BlogHeaderComponent />
      <BlogBodyComponent />
      <FooterComponent />
    </div>
  );
}
