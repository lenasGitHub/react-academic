import React from "react";
import PropTypes from "prop-types";

import person from "../../images/person1.png"

const ProfessorsInfo = ({ name, jobTitle }) => {
  return (
    <div class="professors-info-wraper">
      <div class="professors-info--image">
        <ul class="list social-list">
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
        <div class="image-bg">
          <img
            src={person}
            alt="Free Bootstrap Template by ProBootstrap.com"
          />
        </div>
      </div>
      <div class="professors-info--text">
        <h3 className="heading-tertiary">{name}</h3>
        <h5>{jobTitle}</h5>
        <p className="text-description">
          Laboriosam pariatur modi praesentium deleniti molestiae officiis atque
          numquam quos quis nisi voluptatum architecto rerum error. quos quis
          nisi voluptatum architecto rerum error.
          
        </p>
        <p className="text-description">
          Laboriosam pariatur modi praesentium deleniti molestiae officiis atque
          numquam quos quis nisi voluptatum architecto rerum error.
        </p>
      </div>
    </div>
  );
};

ProfessorsInfo.propTypes = {
  name: PropTypes.string,
  jobTitle: PropTypes.string
};
export default ProfessorsInfo;
