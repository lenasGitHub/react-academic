import React, { Component, Fragment } from "react";

import ProgressBar from "../components/shared/progressBar/ProgressBar";
import ProfessorsInfo from "../professors/professorsInfo/ProfessorsInfo";
import Teams from "../components/shared/team/Teams";
import Reviews from "../components/shared/reviews/Reviews";

import HeaderImagebg from "../components/layout/header/HeaderImagebg";
import AreaTree from "../components/layout/header/AreaTree";

import thumb1 from "../images/thum1.png";
import thumb2 from "../images/thum2.png";
import thumb3 from "../images/thum3.png";
import thumb4 from "../images/thum4.png";
import main3 from "../images/main3.jpg";


class Professors extends Component {
  render() {
    return (
      <Fragment>
      <HeaderImagebg title="Professors" backgroundImage={main3} />
          <AreaTree title1="Home"  titleLink="Our Professors" />
        <section className="professors-info">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <ProfessorsInfo   name="Marcia Abbott" jobTitle="Computing & IT Lectuer"/>
              </div>
            </div>
            <div class="row ">
            <div class="col-md-12">
                <h2 class="heading-secondary2">Experiental Learning</h2>
            </div>
              <div class="col-md-12">
                <ProgressBar title="Professional Staff" percentage="40" />
                <ProgressBar title="Crate Support" percentage="90" />
                <ProgressBar title="Easy Online Classes" percentage="66" />
                <ProgressBar
                  title="Useful Online Learning Material"
                  percentage="80"
                />
                <ProgressBar title="Laboriosam pariaturmodi" percentage="20" />
                <ProgressBar title="Laboriosam pariaturmodi" percentage="13" />
              </div>
            </div>
          </div>
        </section>
        <section className="team-area">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="section-title">
                  <h4 className="heading-quaternary">Our Professors </h4>
                </div>
              </div>
              <Teams thumb={thumb1} name="Mircia Abbott" titleJob="assistant professor" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"/>
              <Teams thumb={thumb2} name="Mircia Abbott" titleJob="assistant professor" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"/>
              <Teams thumb={thumb3} name="Mircia Abbott" titleJob="assistant professor" description="Lorem psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"/>
              <Teams thumb={thumb4} name="Mircia Abbott" titleJob="assistant professor" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"/>
            </div>
          </div>
        </section>

        <section className="course-reviews">
          <div class="container">
          <div class="row ">
            <div class="col-md-12">
                <h2 class="heading-secondary2">Why Student Love Us!</h2>
            </div>
            </div>
           
            <Reviews />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Professors;
