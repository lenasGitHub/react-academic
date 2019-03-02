import React from "react";
import PropTypes from "prop-types";

import thumb1 from "../../../images/thum1.png";

const Teams = ({ thumb, name, titleJob, description }) => {
  return (
    <div class="col-md-3 col-sm-6 col-md-cus-4">
      <div class="team-thumb">
        <div class="team-image">
          <img src={thumb} class="img-responsive team-image--avatar" alt="" />
        </div>
        <div class="team-info">
          <h3 className="team-info--name content-title-hidden">{name}</h3>
          <h5 className="team-info--job-title content-title-hidden">
            {titleJob}
          </h5>
          <p className="team-info--description">{description}</p>
        </div>
        <ul class="social-icon">
          <li>
            <a href="#" class="fa fa-facebook-square" attr="facebook icon" />
          </li>
          <li>
            <a href="#" class="fa fa-twitter" />
          </li>
          <li>
            <a href="#" class="fa fa-instagram" />
          </li>
          <li>
            <a href="#" class="fa fa-linkedin-square" />
          </li>
        </ul>
      </div>
    </div>
  );
};

Teams.propTypes = {
  title: PropTypes.string,
  percentage: PropTypes.string
};
export default Teams;
