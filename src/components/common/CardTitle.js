import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const CardTitle = ({ title, className, ...attrs }) => {
  const classes = classNames(className, "text-left", "text-md-left");

  return (
    <h5 className={classes} {...attrs}>
      {" "}
      {title}{" "}
    </h5>
  );
};

CardTitle.propTypes = {
  /**
   * The page title.
   */
  title: PropTypes.string
};

export default CardTitle;
