import React from "react";
import PropTypes from "prop-types";

const AboutUs = ({ aboutUsMenuItems }) => {
  return (
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
  );
};

AboutUs.propTypes = {
  /**
   * The menu items array.
   */
  aboutUsMenuItems: PropTypes.array
};
AboutUs.propTypes = {
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
export default AboutUs;
