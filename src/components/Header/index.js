import React, { PureComponent } from "react";
import "./header.css";

import logo from "../../assets/images/logo.png";

class Header extends PureComponent {
  render() {
    return (
      <header>
        <div className= "logo">
          <img src= {logo} alt="Senhora Vacina" />
          <h1>CALENDÁRIO VACINAL</h1>
        </div>
      </header>
    );
  }
}

export default Header;