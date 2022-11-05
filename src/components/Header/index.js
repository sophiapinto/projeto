import React, { PureComponent } from "react";
import "./header.css";

class Header extends PureComponent {
  render() {
    return (
      <header>
        <div className="logo">
          <img src="logoImg.png" alt="Logo" />
        </div>

        <div className="text">
          <p>CALENDÁRIO VACINAL</p>
        </div>
      </header>
    );
  }
}

export default Header;