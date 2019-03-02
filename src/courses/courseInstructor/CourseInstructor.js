import React, {Component} from "react";
import PropTypes from "prop-types";

import ProfessorsInfo from "../../professors/professorsInfo/ProfessorsInfo"
import ProgressBar from "../../components/shared/progressBar/ProgressBar"
import Modal from 'react-responsive-modal';

  class CourseInstructor extends Component {
    state = {
      open: false,
    };
  
    onOpenModal = () => {
      this.setState({ open: true });
    };
  
    onCloseModal = () => {
      this.setState({ open: false });
    };
    render() {
    
      const { open } = this.state;
  return (
    <div class="row">
      <div class="col-lg-3 col-md-3">
        <div class="exprience-thumb">
          <img src={this.props.avatar} alt="" />
        </div>
      </div>
      <div class="col-lg-9 col-md-9">
        <div class="exprience-content">
          <div class="instructor-top d-flex justify-content-between align-items-center">
            <div>
              <h2 class="heading-tertiary">{this.props.instructorName}</h2>
              <h6 class="sub-exprience-title">{this.props.exprience}</h6>
            </div>
            <div>
              <div class="top-social-area">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="Pinterest"
                >
                  <i class="fa fa-pinterest" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="Facebook"
                >
                  <i class="fa fa-facebook" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="Twitter"
                >
                  <i class="fa fa-twitter" aria-hidden="true" />
                </a>

                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="Linkedin"
                >
                  <i class="fa fa-linkedin" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <p class="">{this.props.description}</p>

          <button class="link-btn" onClick={this.onOpenModal}>Show More</button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <ProfessorsInfo name="Marcia Abbott" jobTitle="Computing & IT Lectuer"/>
            <ProgressBar title="Professional Staff" percentage="40" />
                <ProgressBar title="Crate Support" percentage="90" />
                <ProgressBar title="Easy Online Classes" percentage="66" />
                <ProgressBar
                  title="Useful Online Learning Material"
                  percentage="80"
                />
          </Modal>
        </div>
      </div>
    </div>
  );
}
};

CourseInstructor.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

CourseInstructor.defaultProps = {
  userDetails: {
    instructorName: "Marcia Abbott",
    avatar: require("../../images/thum.png"),
    exprience: "Computing & IT Lectuer",
    description:
      "inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards  especially in the workplace."
  }
};

export default CourseInstructor;
