import React, { PureComponent, Fragment } from "react";
import "./selection.css";

import calendario from "../../assets/images/calendario.svg";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

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
        <div className= "logo-18">
          <img src= {logo} alt="Senhora Vacina" />
        </div>
        <span className="text-span-18">CALENDÁRIO VACINAL</span>

            <div className="calendario-wrapper">
               <figure className="figure-calendario">
                    <img src={calendario} alt="Calendario"/>
               </figure>
            </div>

            <div className="selection-wrapper">

                <div className= "grid-item-01">
                    <Link to="/VacinaGestante">
                        <img src= {gestante} alt="Gestante" />
                        <span className="text-selection-01">GESTANTE</span>
                    </Link>
                </div>

                <div className= "grid-item-02">
                    <Link to="/VacinaIdoso">
                        <img src= {idoso} alt="Idoso" />
                        <span className="text-selection-02">IDOSO</span>
                    </Link>
                </div>

                <div className= "grid-item-03">
                    <Link to="/VacinaAdulto">
                        <img src= {adulto} alt="Adulto" />
                        <span className="text-selection-03">ADULTO</span>
                    </Link>
                </div>

                <div className= "grid-item-04">
                    <Link to="/VacinaAdolescente">
                        <img src= {adolescente} alt="Adolescente" />
                        <span className="text-selection-04">ADOLESCENTE</span>
                    </Link>
                </div>

                <div className= "grid-item-05">
                    <Link to="/VacinaCrianca">
                        <img src= {criança} alt="Criança" />
                        <span className="text-selection-05">CRIANÇA</span>
                    </Link>
                </div>
                
                <div className= "grid-item-06">
                    <Link to="/Aprazamento">
                        <img src= {aprazamento} alt="Aprazamento" />
                        <span className="text-selection-06">APRAZAMENTO</span>
                    </Link>
                </div>

            </div>

        
        </Fragment>
  
  
      );
    }
  }


export default Selection;