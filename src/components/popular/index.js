import React from "react";

export default function Popular() {
  return (
    <div
      style={{
        paddingLeft: "15px",
      }}
    >
      <div style={{ width: "90px" }}>
        <label
          style={{
            fontSize: "1.25rem",
            fontFamily: "Roboto",
            marginTop: "20px",
            fontWeight: "bolder",
          }}
        >
          Popular
        </label>
        <div
          style={{ height: "1px", backgroundColor: "black", marginTop: "15px" }}
        ></div>
      </div>
    </div>
  );
}
