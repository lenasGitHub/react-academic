import React from "react";
import PropTypes from "prop-types";

const CourseItemsCard = ({ image, title, duration, price }) => {
  return (
    <div class="course-item-card mb-4 d-flex">
      <a class="blog-img mr-4">
        <img src={image} />
      </a>
      <div class="heading">
        <h3 class="heading--top">
          <a href="#">{title}</a>
        </h3>
        <h6 class="heading--sub">
          <a href="#" className="heading--sub--duration">
            <i class="fa fa-clock-o" aria-hidden="true" /> {duration}
          </a>
        </h6>
        <div class="meta">
          <div>
            <span class="heading--price">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseItemsCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  duration: PropTypes.string,
  price: PropTypes.number
};
export default CourseItemsCard;
