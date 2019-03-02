import React from "react";

import CourseItemsCard from "../../../components/shared/courseItemCard/CourseItemsCard";

const RecentBlog = () => {
  return (
    <div class="ftco-footer-widget mb-4">
      <h2 class="ftco-heading-2">Recent Blog</h2>
      <div className="ftco-footer--course-card">
        <CourseItemsCard
          image="https://technext.github.io/welfare/images/image_1.jpg"
          title="Even the all-powerful"
          duration="July 12, 2018"
          price={109.32}
        />
        <CourseItemsCard
          image="https://technext.github.io/welfare/images/image_1.jpg"
          title="Even the all-powerful"
          duration="July 12, 2018"
          price={220.32}
        />
      </div>
    </div>
  );
};

export default RecentBlog;
