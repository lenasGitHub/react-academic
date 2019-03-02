import React from "react";
import PropTypes from "prop-types";

import RecentBlog from "./RecentBlog";
import FooterTop from "./FooterTop";

import instafeed1 from "../../../images/instafeed-1.png";
import instafeed2 from "../../../images/instafeed-2.png";
import instafeed3 from "../../../images/instafeed-3.png";
import instafeed4 from "../../../images/instafeed-4.png";
import instafeed5 from "../../../images/instafeed-45png.png";

const Footer = ({ contained, aboutUsMenuItems, copyright }) => {
  return (
    <footer class="ftco-footer ftco-section">
      <div class="container">
        <FooterTop />
        <div class="row ftco-footer-row--contact">
          <div class="col-md-2">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About Us</h2>

              <ul class="list-about">
                {aboutUsMenuItems.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" class=" d-block">
                      <i class="fa fa-angle-right" aria-hidden="true" />
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <RecentBlog />
          </div>
          <div class="col-md-3">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Compus Gallery</h2>
              <ul class="instafeed d-flex flex-wrap">
                <li class="blog-img">
                  <a href="#">
                    <img src={instafeed3} alt="" />
                    <i class="course-link-icon fa fa-link" />
                  </a>
                </li>
                <li class="blog-img">
                  <a href="#">
                    <img src={instafeed2} alt="" />
                    <i class="course-link-icon fa fa-link" />
                  </a>
                </li>
                <li class="blog-img">
                  <a href="#">
                    <img src={instafeed1} alt="" />
                    <i class="course-link-icon fa fa-link" />
                  </a>
                </li>
                <li class="blog-img">
                  <a href="#">
                    <img src={instafeed4} alt="" />
                    <i class="course-link-icon fa fa-link" />
                  </a>
                </li>
                <li class="blog-img">
                  <a href="#">
                    <img src={instafeed5} alt="" />
                    <i class="course-link-icon fa fa-link" />
                  </a>
                </li>
                <li class="blog-img">
                  <a href="#">
                    <img src={instafeed4} alt="" />
                    <i class="course-link-icon fa fa-link" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Contact Details</h2>
              <div class="block-23 mb-3">
                <ul>
                  <li>
                    <i class="fa fa-map-marker" aria-hidden="true" />{" "}
                    <span class="text"> 3147 Libby Street LA, CA, 90060</span>
                  </li>
                  <li>
                    <a href="tel:(800)2345-6789">
                      <i class="fa fa-phone" aria-hidden="true" />
                      <span class="text"> (800)2345-6789</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@academic.com">
                      <i class="fa fa-paper-plane" aria-hidden="true" />
                      <span class="text"> contact@academic.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="footer-social-list">
                <li class="facebook">
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li class="twitter">
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li class="linkedin">
                  <a href="#">
                    <i class="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
                <li class="google-plus">
                  <a href="#">
                    <i class="fa fa-google-plus" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row ftco-footer-row--copy-right">
          <div class="col-md-12 text-center">
            <p class="copyRight">
              {copyright}
              <i class="fa fa-heart" aria-hidden="true" />
              by{" "}
              <a href="#" target="_blank">
                didea039
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */
  menuItems: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string
};

Footer.defaultProps = {
  contained: false,
  copyright: "Copyright ©2019 All rights reserved",
  aboutUsMenuItems: [
    {
      title: "Home",
      to: "#"
    },
    {
      title: "Services",
      to: "#"
    },
    {
      title: "About",
      to: "#"
    },
    {
      title: "Products",
      to: "#"
    },
    {
      title: "Blog",
      to: "#"
    }
  ]
};

export default Footer;
