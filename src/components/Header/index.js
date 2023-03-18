import React, { PureComponent } from "react";
import "./header.css";

import logo from "../../assets/images/logo.png";

class Header extends PureComponent {
  render() {
    return (
      <div>
        <div className= "logo-19">
          <img src= {logo} alt="Senhora Vacina" />
        </div>
        <span className="text-span-19">CALENDÁRIO VACINAL</span>
      </div>
    );
  }
}

export default Header;