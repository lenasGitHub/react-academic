import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const RightCourseDetails = ({ title, icon, className, value }) => {
  const classes = classNames("bg-gradient-theme", className);

  return (
    <div class="course-details">
      <div class="section-container">
        <div class="section-header--left">
          <span class="section-title--wrapper">
            <span class="section-title--text">
              <i class={`fa fa-${icon}`} aria-hidden="true" />
              {title}
            </span>
          </span>
        </div>
        <div class="section-header--right">
          {title === "Price" ? (
            <span
              class="section-header--right-text"
              style={{ color: "#ec595f" }}
            >
              {value}
            </span>
          ) : (
            <span
              class="section-header--right-text"
              style={{ color: "#5a9f68" }}
            >
              {value}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

RightCourseDetails.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string
};
export default RightCourseDetails;
