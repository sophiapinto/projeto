import React, { PureComponent } from "react";
//import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import './prazovacinas.css';
class PrazoVacinas extends PureComponent {
    render() {
      return (
        <div>
          <div className= "logo">
            <img src= {logo} alt="Senhora Vacina" />
          </div>
          <span className="text-span">APRAZAMENTO DE VACINAS</span>
          
          <div className="wrapper">
            <div className="wrapper-01">
              <span className="text-s">NOME</span>
            </div>
            <div className="wrapper-02"></div>
          </div>

        </div>
  
  
      );
    }
}

export default PrazoVacinas;