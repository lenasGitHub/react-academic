import React from "react";
import PropTypes from "prop-types";

const HeaderImagebg = ({ title, backgroundImage }) => {
  return (
    <div class="hero-area section">
      <div
        class="bg-image hero-area--parallax overlay"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-1 hero-area--heading">
            <h1 class="heading-primary">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderImagebg.propTypes = {
  title: PropTypes.string,
  backgroundImage: PropTypes.string
};
export default HeaderImagebg;
