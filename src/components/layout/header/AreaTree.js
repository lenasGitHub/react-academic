import React from "react";
import PropTypes from "prop-types";

const AreaTree = ({ title1, title2, titleLink }) => {
  return (
    <div class="container">
      <div class="row float-right">
        <div class="area-tree-container">
          <ul class="area-tree">
            <li>{title1}</li>
            <li>{title2}</li>
            <li>
              <a href="index.html">{titleLink}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

AreaTree.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  titleLink: PropTypes.string
};
export default AreaTree;
