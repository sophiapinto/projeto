import React, { PureComponent } from "react";
import "./header.css";

class Header extends PureComponent {
  render() {
    return (
      <header>
        <div className="logo">
          <img src="logoImg.png" alt="Logo" />
        </div>
      </header>
    );
  }
}

export default Header;