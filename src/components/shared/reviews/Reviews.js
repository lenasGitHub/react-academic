import React from "react";
import Slider from "react-slick";
class Reviews extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,

      appendDots: dots => (
        <div>
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "10px",
            height: "10px",
            color: "#ec595f",
            border: "1px #ec595f solid",
            borderRadius: "50%"
          }}
        />
      ),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        <div>
          <div class="single-testimonial item d-flex flex-row">
            <div class="double-quotation" />
            <div class="review-comment">
              <p className="review-comment--content">
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware. monitor, printer, scanner, speaker, projector,
                hardware.
              </p>
              <div className="review-comment--author">
                <div className="review-comment--detail-container">
                  <div class="review-comment--author-avatar ca-pic " />
                  <p>
                    William Parker 1, <span>Developer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="single-testimonial item d-flex flex-row">
            <div class="double-quotation" />
            <div class="review-comment">
              <p className="review-comment--content">
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware. monitor, printer, scanner, speaker, projector,
                hardware.
              </p>
              <div className="review-comment--author">
                <div className="review-comment--detail-container">
                  <div class="review-comment--author-avatar ca-pic " />
                  <p>
                    William Parker 2, <span>Developer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="single-testimonial item d-flex flex-row">
            <div class="double-quotation" />
            <div class="review-comment">
              <p className="review-comment--content">
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware. monitor, printer, scanner, speaker, projector,
                hardware.
              </p>
              <div className="review-comment--author">
                <div className="review-comment--detail-container">
                  <div class="review-comment--author-avatar ca-pic " />
                  <p>
                    William Parker 3, <span>Developer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="single-testimonial item d-flex flex-row">
            <div class="double-quotation" />
            <div class="review-comment">
              <p className="review-comment--content">
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware. monitor, printer, scanner, speaker, projector,
                hardware.
              </p>
              <div className="review-comment--author">
                <div className="review-comment--detail-container">
                  <div class="review-comment--author-avatar ca-pic " />
                  <p>
                    William Parker 4, <span>Developer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="single-testimonial item d-flex flex-row">
            <div class="double-quotation" />
            <div class="review-comment">
              <p className="review-comment--content">
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware. monitor, printer, scanner, speaker, projector,
                hardware.
              </p>
              <div className="review-comment--author">
                <div className="review-comment--detail-container">
                  <div class="review-comment--author-avatar ca-pic " />
                  <p>
                    William Parker 5, <span>Developer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="single-testimonial item d-flex flex-row">
            <div class="double-quotation" />
            <div class="review-comment">
              <p className="review-comment--content">
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware. monitor, printer, scanner, speaker, projector,
                hardware.
              </p>
              <div className="review-comment--author">
                <div className="review-comment--detail-container">
                  <div class="review-comment--author-avatar ca-pic " />
                  <p>
                    William Parker 6, <span>Developer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Reviews;
