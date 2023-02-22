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
            {/*
            
            <div className="selection-wrapper">
            <section className="grid-container">
                <div className= "grid-item">
                    <Link to="/">
                        <img src= {gestante} alt="Gestante" />
                        <h1>GESTANTE</h1>
                    </Link>
                </div>

                <div className= "grid-item">
                    <Link to="/">
                        <img src= {idoso} alt="Idoso" />
                        <h1>IDOSO</h1>
                    </Link>
                </div>

                <div className= "grid-item">
                    <Link to="/">
                        <img src= {adulto} alt="Adulto" />
                        <h1>ADULTO</h1>
                    </Link>
                </div>

                <div className= "grid-item">
                    <Link to="/">
                        <img src= {adolescente} alt="Adolescente" />
                        <h1>ADOLESCENTE</h1>
                    </Link>
                </div>

                <div className= "grid-item">
                    <Link to="/">
                        <img src= {criança} alt="Criança" />
                        <h1>CRIANÇA</h1>
                    </Link>
                </div>
                
                <div className= "grid-item">
                    <Link to="/">
                        <img src= {aprazamento} alt="Aprazamento" />
                        <h1>APRAZAMENTO</h1>
                    </Link>
                </div>

            </section>
            </div>

            */}
        </Fragment>
  
  
      );
    }
  }


export default Selection;