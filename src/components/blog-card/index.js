import React from "react";

export default function BlogCard() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <label
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              lineHeight: "1.2",
            }}
          >
            Nearly 200 Great Barrier Reef coral species also live in the deep
            sea
          </label>
          <p style={{ marginBottom: "1rem", marginTop: "5px" }}>
            There are more coral species lurking in the deep ocean than
            previously throught
          </p>
          <label
            style={{ fontSize: "85%", fontWeight: "400", color: "#6c757d" }}
          >
            Jake Bittle in SCIENCE
          </label>
          <p style={{ fontSize: "85%", fontWeight: "400", color: "#6c757d" }}>
            Dec 12 5 min read
          </p>
        </div>
        <div>
          <img
            style={{ height: "120px" }}
            src={require("../../assets/blog8.jpg")}
          />
        </div>
      </div>
    </div>
  );
}
