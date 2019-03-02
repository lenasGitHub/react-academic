import React, { Component, Fragment } from "react";
import CourseItemsCard from "../components/shared/courseItemCard/CourseItemsCard";

import Card from "../components/card/card";

import RightCourseDetails from "../courses/courseDetails/RightCourseDetails";
import CourseInstructor from "../courses/courseInstructor/CourseInstructor";
import Curriculum from "../courses/curriculum/Curriculum";
import LeftCourseDetails from "../courses/courseDetails/LeftCourseDetails";

import HeaderImagebg from "../components/layout/header/HeaderImagebg";
import AreaTree from "../components/layout/header/AreaTree";

import main2 from "../images/main2.png";

import thumb from "../images/thum.png";
import main1 from "../images/page-background.jpg";


class Courses extends Component {
  render() {
    return (
      <Fragment>
      <HeaderImagebg title="Course Details" backgroundImage={main1} />
      <AreaTree title1="Home" title2="Course" titleLink="Details" />
      <section class="intro-news-area section-padding-100-0 mb-70">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-12 col-lg-9">
              <img class="img-fluid details-img" src={main2} alt="" />

              <Card header="Course Details ">
                <LeftCourseDetails />
              </Card>
              <Card header="Course Instructor ">
                <CourseInstructor
                  avatar={thumb}
                  instructorName="Marcia Abbot"
                  exprience="Computing & IT Lectuer"
                  description="inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards  especially in the workplace."
                />
              </Card>
              <Card header="Course Curriculum - Module 1 ">
                <Curriculum
                  lesson="Lesson 1"
                  title="Getting Started"
                  length="30mn"
                />
                <Curriculum
                  lesson="Lesson 2"
                  title="Getting Ready For Learning"
                  length="45mn"
                />
                <Curriculum
                  lesson="Lesson 3"
                  title="Diving into the Basics"
                  length="1hr"
                />
                <Curriculum
                  lesson="Lesson 4"
                  title="Using Redux with React Native"
                  length="1hr"
                />
              </Card>
              <Card header="Course Curriculum - Module 2 ">
                <Curriculum
                  lesson="Lesson 5"
                  title="Linking and Using Third Party Libraries"
                  length="1hr"
                />
                <Curriculum
                  lesson="Lesson 6"
                  title="Styling & Animating React Native Apps (Correctly)"
                  length="45mn"
                />
                <Curriculum
                  lesson="Lesson 7"
                  title="Diving into the Basics"
                  length="30mn"
                />
                <Curriculum
                  lesson="Lesson 8"
                  title="Using Native Device Features - Maps, Camera & Image Gallery"
                  length="1hr"
                />
              </Card>
            </div>

            <div class="col-12 col-sm-9 col-md-12 col-lg-3">
              <div class="right-area">
                <div class="src-area">
                  <form action="post">
                    <input
                      class="src-area--input"
                      type="text"
                      placeholder="Search"
                    />

                    <button class="src-area--btn" type="submit">
                      <i class="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </div>
             
            <div class="right-area--block1">
              <h5 class="heading-secondary">Details</h5>
              <div className="course-details-wrapper">
                <RightCourseDetails icon="money" title="Price" value="299.99" />
                <RightCourseDetails icon="users" title="Students" value="43" />
                <RightCourseDetails icon="file-o" title="Category" value="IT" />
                <RightCourseDetails
                  icon="tags"
                  title="Tags"
                  value="Computer, it, design"
                />
                <RightCourseDetails
                  icon="clock-o"
                  title="Duration"
                  value="3 Weeks"
                />
              </div>
              <a href="#" class="primary-btn2 header-btn text-uppercase">
                <i class="fa fa-shopping-cart" aria-hidden="true" />
                Buy Course
              </a>
              </div>
              <div className="defult-space" />
              <div class="right-area--block2">
              <h5 class="heading-secondary">Similar Courses</h5>
              <CourseItemsCard
                image="https://technext.github.io/welfare/images/image_1.jpg"
                title="Even the all-powerful all the couses"
                duration="July 12, 2018"
              />
              <CourseItemsCard
                image="https://technext.github.io/welfare/images/image_1.jpg"
                title="Even the all-powerful all the couses"
                duration="July 12, 2018"
              />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Fragment>
    );
  }
}

export default Courses;
