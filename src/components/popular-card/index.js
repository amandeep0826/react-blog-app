import React from "react";

export default function PopularCard() {
  return (
    <li className="d-flex">
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          lineHeight: "1",
          fontFamily: "Roboto",
          marginRight: "0.5rem",
        }}
      >
        01
      </h1>
      <span>
        <h6
          className="font-weight-bold"
          style={{
            fontWeight: "700",
            fontSize: "1rem",
            marginBottom: "0.5rem",
            fontFamily: "Roboto",
          }}
        >
          Did Supernovae Kill Off Large Ocean Animals
        </h6>
        <p
          className="text-muted"
          style={{ color: "#6c757d", fontSize: "0.8rem", marginBottom: "1rem" }}
        >
          Jake Bittle in SCIENCE
        </p>
      </span>
    </li>
  );
}
