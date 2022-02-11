import React from "react";
import BodyComponent from "../bodyComponent";
import FeaturedBlog from "../featured";
import FooterComponent from "../footer";
import NavbarComponent from "../navbar";

export default function Router() {
  return (
    <div style={{ paddingRight: "7em", paddingLeft: "7em" }}>
      <NavbarComponent />
      <FeaturedBlog />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
}
