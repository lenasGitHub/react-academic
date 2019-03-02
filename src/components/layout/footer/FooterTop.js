import React from "react";

import footerLogo from "../../../images/footerLogo.png";
const FooterTop = () => {
  return (
    <div class="row  ftco-footer-row--form">
      <div class="col-md-4">
        <img src={footerLogo} />
      </div>
      <div class="col-md-8">
        <div class="ftco-footer-widget-form mb-4">
          <div class="fotc-src-area">
            <form action="post">
              <input
                class="fotc-src-area--input"
                type="text"
                placeholder="Search"
              />

              <button class="fotc-src-area--btn" type="submit">
                <i class="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
          <div class="fotc-src-area">
            <form action="post">
              <input
                class="fotc-src-area--input"
                type="text"
                placeholder="All Courses"
              />

              <button class="fotc-src-area--btn" type="submit">
                <i class="fa fa-chevron-right" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTop;
