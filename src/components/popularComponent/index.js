import React from "react";
import Popular from "../popular";
import PopularCard from "../popular-card";

export default function PopularComponent() {
  return (
    <div
      style={{
        paddingLeft: "15px",
      }}
    >
      <Popular></Popular>
      <PopularCard />
      <PopularCard />
      <PopularCard />
      <PopularCard />
    </div>
  );
}
