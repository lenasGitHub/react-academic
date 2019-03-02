import React from "react";

import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

class Header extends React.Component {
  render() {
    return (
      <header class="default-header">
        <HeaderTop />
        <Navbar />
      </header>
    );
  }
}
export default Header;
