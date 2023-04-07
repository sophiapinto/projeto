import React from "react";
//import { Link } from "react-router-dom";

import vacinalogo from "../../assets/images/logo.png";
import "./vacinagestante.css";

import gestante from "../../assets/images/gestante.svg";


function VacinaGestante () {
  return (
    <div>
        <div className= "logo-gest-calenderio">
          <img src= {gestante} alt="Vacina Gestante" />
        </div>
        <span className="text-gest-calenderio">CALENDÁRIO VACINAL DA GESTANTE</span>

        <div className= "wrapper-vacina-item">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Difteria e Tétano (dT)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">3</span>
            </div>

            
            <div className="wrapper-informacoes">
            <span className="text-informacao-2">Iniciar ou completar o esquema, de acordo com a situação vacinal.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-02">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Hepatite B recombinante</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">3</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">Iniciar ou completar o esquema, de acordo com a situação vacinal.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-03">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Difteria, Tétano, Pertussis acelular</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">1</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">1 dose para gestante a partir da 20º semana de gravidez, 1 dose a cada gestação.</span>
            </div>
        </div>            
    </div>
  );
}

export default VacinaGestante;
