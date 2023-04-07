import React from "react";
//import { Link } from "react-router-dom";

import vacinalogo from "../../assets/images/logo.png";
import "./vacinaadolescente.css";

import adolescente from "../../assets/images/adolescente.svg";


function VacinaAdolescente () {
  return (
    <div>
        <div className= "logo-gest-calenderio">
          <img src= {adolescente} alt="Vacina Adulto" />
        </div>
        <span className="text-gest-calenderio">CALENDÁRIO VACINAL DO ADOLESCENTE</span>

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
            <span className="text-nome-vacina">Febre Amarela (Atenuada)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">1</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">Iniciar ou completar o esquema, de acordo com situação vacinal. Reforço, caso a pessoa tenha recebido uma dose da vacina antes de completar 5 anos de idade.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-04">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Sarampo, Caxumba e Rubéola (SCR)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">2</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">Iniciar ou completar o esquema, de acordo com situação vacinal. Reforço, caso a pessoa tenha recebido uma dose da vacina antes de completar 5 anos de idade.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-05">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Papilomavírus humano (HPV)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">2</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">9 a 14 anos, para meninas; 11 a 14 anos para meninos.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-06">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Pneumocócica 23-valente (PPV 23)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">1</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">A partir de 5 anos de idade para os povos indígenas, sem comprovação da vacina PCV 10.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-07">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Meningocócica ACWY (Conjugada)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">1</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">11 e 12 anos.</span>
            </div>
        </div>

    </div>
  );
}

export default VacinaAdolescente;
