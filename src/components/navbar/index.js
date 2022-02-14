import React from "react";
import { Link } from "react-router-dom";
export default function NavbarComponent() {
  return (
    <>
      <nav
        style={{ paddingTop: "1em" }}
        class="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <strong
              style={{
                fontFamily: "Roboto",
                fontSize: "1.25rem",
                fontWeight: "bolder",
                boxSizing: "inherit",
              }}
            >
              Mundana
            </strong>
          </Link>
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
