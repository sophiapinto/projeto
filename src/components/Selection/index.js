import React, { PureComponent, Fragment } from "react";
import "./selection.css";

import calendario from "../../assets/images/calendario.svg";

import { Link } from "react-router-dom";

import gestante from "../../assets/images/gestante.svg";

import idoso from "../../assets/images/idoso.svg";
import adulto from "../../assets/images/adulto.svg";
import adolescente from "../../assets/images/adolescente.svg";
import criança from "../../assets/images/criança.svg";
import aprazamento from "../../assets/images/aprazamento.svg";

class Selection extends PureComponent {
    render() {
      return (
        <Fragment>

                <div className="calendario-wrapper">
                    <figure class="figure-calendario">
                        <img src={calendario} alt="Calendario"/>
                    </figure>
                </div>

            <div className="selection-wrapper">

            <section className="grid-container">
                <div className= "grid-item">
                    <Link to="/Aprazamento">
                        <img src= {gestante} alt="Gestante" />
                        <span className="text-selection">GESTANTE</span>
                    </Link>
                </div>

                <div className= "grid-item">
                    <Link to="/Aprazamento">
                        <img src= {idoso} alt="Idoso" />
                        <span className="text-selection">IDOSO</span>
                    </Link>
                </div>

                <div className= "grid-item">
                    <Link to="/Aprazamento">
                        <img src= {adulto} alt="Adulto" />
                        <span className="text-selection">ADULTO</span>
                    </Link>
                </div>

                <div className= "grid-item">
                    <Link to="/Aprazamento">
                        <img src= {adolescente} alt="Adolescente" />
                        <span className="text-selection">ADOLESCENTE</span>
                    </Link>
                </div>

                <div className= "grid-item">
                    <Link to="/Aprazamento">
                        <img src= {criança} alt="Criança" />
                        <span className="text-selection">CRIANÇA</span>
                    </Link>
                </div>
                
                <div className= "grid-item">
                    <Link to="/Aprazamento">
                        <img src= {aprazamento} alt="Aprazamento" />
                        <span className="text-selection">APRAZAMENTO</span>
                    </Link>
                </div>

            </section>
            </div>

        
        </Fragment>
  
  
      );
    }
  }


export default Selection;