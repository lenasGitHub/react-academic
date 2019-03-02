import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import CardTitle from "../common/CardTitle";
const Card = ({ color, header, className, children }) => {
  const bgColor = `bg-${color}`;
  const classes = classNames(bgColor, className);
  return (
    <div class="card course-card">
      <div class="card-body cord-course-body">
        {header && typeof header === "string" ? (
          <CardTitle title={header} className="heading-secondary" />
        ) : (
          header
        )}

        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.string,
  header: PropTypes.node,
  className: PropTypes.string
};
export default Card;
