import React from "react";

export default function FooterComponent() {
  return (
    <div
      style={{
        paddingLeft: "15px",
        marginTop: "5em",
        marginBottom: "2em",
      }}
    >
      <span
        style={{
          color: "#6c757d",
          fontSize: "85%",
          fontWeight: "400",
        }}
        className="navbar-brand mr-2"
      >
        <strong
          style={{
            fontWeight: "bolder",
            fontSize: "1.25rem",
            fontFamily: "Roboto",
          }}
        >
          Mundana
        </strong>
        Copyright @ 2022 . All rights reserved
      </span>
    </div>
  );
}
