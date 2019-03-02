import React from "react";
const HeaderTop = () => {
  return (
    <div class="menutop-wrap">
      <div class="menu-top container">
        <div class="d-flex justify-content-between align-items-center">
          <ul class="list contact-list">
            <li>
              <a href="#">
                <i class="fa fa-map-marker" aria-hidden="true" /> 3147 Libby
                Street LA, CA, 90060
              </a>
            </li>
            <li>
              <a href="tel:(800)2345-6789">
                <i class="fa fa-phone" aria-hidden="true" />
                (800)2345-6789
              </a>
            </li>
            <li>
              <a href="mailto:contact@academic.com">
                <i class="fa fa-paper-plane" aria-hidden="true" />
                contact@academic.com
              </a>
            </li>
          </ul>
          <ul class="list social-list">
            <li class="facebook">
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li class="twitter">
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li class="linkedin">
              <a href="#">
                <i class="fa fa-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li class="google-plus">
              <a href="#">
                <i class="fa fa-google-plus" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
