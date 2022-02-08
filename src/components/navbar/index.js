import React from "react";
export default function NavbarComponent() {
  return (
    <>
      <nav
        style={{ paddingTop: "1em", paddingLeft: "7em", paddingRight: "5em" }}
        class="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <strong
              style={{
                fontFamily: "Playfair Display",
                fontSize: "1.25rem",
                fontWeight: "bolder",
                boxSizing: "inherit",
              }}
            >
              Mundana
            </strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  style={{ marginLeft: "20px" }}
                  class="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Intro
                </a>
              </li>
              <li class="nav-item">
                <a style={{ marginLeft: "15px" }} class="nav-link " href="#">
                  Culture
                </a>
              </li>
              <li class="nav-item">
                <a style={{ marginLeft: "15px" }} class="nav-link" href="#">
                  Tech
                </a>
              </li>
              <li class="nav-item">
                <a style={{ marginLeft: "15px" }} class="nav-link" href="#">
                  Politics
                </a>
              </li>
              <li class="nav-item">
                <a style={{ marginLeft: "15px" }} class="nav-link" href="#">
                  Health
                </a>
              </li>
              <li class="nav-item">
                <a style={{ marginLeft: "15px" }} class="nav-link" href="#">
                  Collections
                </a>
              </li>
              <li class="nav-item">
                <a style={{ marginLeft: "15px" }} class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
