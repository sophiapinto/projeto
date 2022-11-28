import React, { PureComponent } from "react";
import "./header.css";

import logo from "../../assets/images/logo.png";

class Header extends PureComponent {
  render() {
    return (
      <header>
        <div className= "logo">
          <img src= {logo} alt="Senhora Vacina" />
        </div>
      </header>
    );
  }
}

export default Header;