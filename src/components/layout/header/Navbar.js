import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../../images/logo.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: false
    };
  }
  toggleHidden() {
    console.log("hi thtere");
  }
  toggleNavbar() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-nav  navbar-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src={logo} alt="" />
          </a>
          <div className="mobile-event">
            <i
              class="fa fa-ellipsis-v"
              aria-hidden="true"
              onClick={this.toggleHidden.bind(this)}
            />
            <button
              class="navbar-toggler"
              type="button"
              onClick={this.toggleNavbar.bind(this)}
            >
              <span class="navbar-toggler-icon" />
            </button>
          </div>

          <div
            class={`collapse navbar-collapse justify-content-end align-items-center ${
              this.state.isHidden ? "show" : null
            }`}
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <Link to="courses">Courses</Link>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="#" id="navbardrop">
                  Pages
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="generic.html">
                    Generic
                  </a>
                  <a class="dropdown-item" href="elements.html">
                    Elements
                  </a>
                </div>
              </li>
              <li>
                <a href="#plan">Plan</a>
              </li>
              <li>
                <Link to="professors">Professors</Link>
              </li>
              <li>
                <a href="#blog">blog</a>
              </li>
            </ul>
            <a href="#" class="primary-btn2 mr-r text-uppercase">
              Apply Online
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
