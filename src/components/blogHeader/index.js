import React from "react";

export default function BlogHeaderComponent() {
  return (
    <div
      className="jumbotrob jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white"
      style={{ position: "relative" }}
    >
      <div className="h-100 tofront">
        <div
          className="row justify-content-between"
          style={{ justifyContent: "space-between" }}
        >
          <div
            style={{ alignSelf: "center" }}
            className="col-md-6 pt-6 pb-6 pr-6 "
          >
            <p
              className="text-uppercase font-weight-bold"
              style={{ fontWeight: "700" }}
            >
              <a className="text-danger">Stories</a>
            </p>
            <h1
              className="display-4 secondfont mb-3 font-weigth-bold"
              style={{ fontWeight: "700", fontFamily: "Roboto" }}
            >
              Sterling could jump 8% if Brexit deal gets approved by UK
              Parliament
            </h1>
            <p class="mb-3">
              Analysts told CNBC that the currency could hit anywhere between
              $1.35-$1.40 if the deal gets passed through the U.K. parliament.
            </p>
            <div class="d-flex align-items-center">
              <img
                class="rounded-circle"
                src={require("../../assets/avatar2.jpg")}
                width="70"
              />
              <small class="ml-2" style={{ marginLeft: "0.5rem" }}>
                Jane Seymour{" "}
                <span class="text-muted d-block">
                  A few hours ago · 5 min. read
                </span>
              </small>
            </div>
          </div>
          <div
            style={{ maxWidth: "50%", position: "relative", flex: "0 0 50%" }}
            class="col-md-6 pr-0"
          >
            <img
              style={{ maxWidth: "100%" }}
              src={require("../../assets/intro.jpg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
