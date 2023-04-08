import React from "react";
//import { Link } from "react-router-dom";

import vacinalogo from "../../assets/images/logo.png";
import "./vacinaadolescente.css";

import adolescente from "../../assets/images/adolescente.svg";


function VacinaAdolescente () {
  return (
    <div>
        <div className= "logo-adolescente-calenderio">
          <img src= {adolescente} alt="Vacina Adulto" />
        </div>
        <span className="text-adolescente-calenderio">CALENDÁRIO VACINAL DO ADOLESCENTE</span>

        <div className= "wrapper-vacina-item-adolescente">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adolescente">Difteria e Tétano (dT)</span>
            <span className="text-quant-doses-adolescente">Número de doses:</span>
            <span className="text-infomacao-adolescente">Informações:</span>
            
            <div className="wrapper-quant-doses-adolescente">
                <span className="text-quant-doses-02-adolescente">3</span>
            </div>

            
            <div className="wrapper-informacoes-adolescente">
            <span className="text-informacao-2-adolescente">Iniciar ou completar o esquema, de acordo com a situação vacinal.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-02-adolescente">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adolescente">Hepatite B recombinante</span>
            <span className="text-quant-doses-adolescente">Número de doses:</span>
            <span className="text-infomacao-adolescente">Informações:</span>
            
            <div className="wrapper-quant-doses-adolescente">
                <span className="text-quant-doses-02-adolescente">3</span>
            </div>

            
            <div className="wrapper-informacoes-adolescente">
                <span className="text-informacao-2-adolescente">Iniciar ou completar o esquema, de acordo com a situação vacinal.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-03-adolescente">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adolescente">Febre Amarela (Atenuada)</span>
            <span className="text-quant-doses-adolescente">Número de doses:</span>
            <span className="text-infomacao-adolescente">Informações:</span>
            
            <div className="wrapper-quant-doses-adolescente">
                <span className="text-quant-doses-02-adolescente">1</span>
            </div>

            
            <div className="wrapper-informacoes-adolescente">
                <span className="text-informacao-2-adolescente">Iniciar ou completar o esquema, de acordo com situação vacinal. Reforço, caso a pessoa tenha recebido uma dose da vacina antes de completar 5 anos de idade.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-04-adolescente">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adolescente">Sarampo, Caxumba e Rubéola (SCR)</span>
            <span className="text-quant-doses-adolescente">Número de doses:</span>
            <span className="text-infomacao-adolescente">Informações:</span>
            
            <div className="wrapper-quant-doses-adolescente">
                <span className="text-quant-doses-02-adolescente">2</span>
            </div>

            
            <div className="wrapper-informacoes-adolescente">
                <span className="text-informacao-2-adolescente">Iniciar ou completar o esquema, de acordo com situação vacinal. Reforço, caso a pessoa tenha recebido uma dose da vacina antes de completar 5 anos de idade.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-05-adolescente">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adolescente">Papilomavírus humano (HPV)</span>
            <span className="text-quant-doses-adolescente">Número de doses:</span>
            <span className="text-infomacao-adolescente">Informações:</span>
            
            <div className="wrapper-quant-doses-adolescente">
                <span className="text-quant-doses-02-adolescente">2</span>
            </div>

            
            <div className="wrapper-informacoes-adolescente">
                <span className="text-informacao-2-adolescente">9 a 14 anos, para meninas; 11 a 14 anos para meninos.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-06-adolescente">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adolescente">Pneumocócica 23-valente (PPV 23)</span>
            <span className="text-quant-doses-adolescente">Número de doses:</span>
            <span className="text-infomacao-adolescente">Informações:</span>
            
            <div className="wrapper-quant-doses-adolescente">
                <span className="text-quant-doses-02-adolescente">1</span>
            </div>

            
            <div className="wrapper-informacoes-adolescente">
                <span className="text-informacao-2-adolescente">A partir de 5 anos de idade para os povos indígenas, sem comprovação da vacina PCV 10.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-07-adolescente">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adolescente">Meningocócica ACWY (Conjugada)</span>
            <span className="text-quant-doses-adolescente">Número de doses:</span>
            <span className="text-infomacao-adolescente">Informações:</span>
            
            <div className="wrapper-quant-doses-adolescente">
                <span className="text-quant-doses-02-adolescente">1</span>
            </div>

            
            <div className="wrapper-informacoes-adolescente">
                <span className="text-informacao-2-adolescente">11 e 12 anos.</span>
            </div>
        </div>

    </div>
  );
}

export default VacinaAdolescente;
