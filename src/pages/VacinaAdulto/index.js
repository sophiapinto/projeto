import React from "react";
//import { Link } from "react-router-dom";

import vacinalogo from "../../assets/images/logo.png";
import "./vacinaadulto.css";

import adulto from "../../assets/images/adulto.svg";


function VacinaAdulto () {
  return (
    <div>
        <div className= "logo-gest-calenderio">
          <img src= {adulto} alt="Vacina Adulto" />
        </div>
        <span className="text-adulto-calenderio">CALENDÁRIO VACINAL DO ADULTO</span>

        <div className= "wrapper-vacina-item-adulto">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adulto">Difteria e Tétano</span>
            <span className="text-quant-doses-adulto">Número de doses:</span>
            <span className="text-infomacao-adulto">Informações:</span>
            
            <div className="wrapper-quant-doses-adulto">
                <span className="text-quant-doses-02-adulto">3</span>
            </div>
            
            <div className="wrapper-informacoes-adulto">
            <span className="text-informacao-2-adulto">Iniciar ou completar o esquema, de acordo com a situação vacinal.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-02-adulto">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adulto">Hepatite B recombinante</span>
            <span className="text-quant-doses-adulto">Número de doses:</span>
            <span className="text-infomacao-adulto">Informações:</span>
            
            <div className="wrapper-quant-doses-adulto">
                <span className="text-quant-doses-02-adulto">3</span>
            </div>

            <div className="wrapper-informacoes-adulto">
                <span className="text-informacao-2-adulto">Iniciar ou completar o esquema, de acordo com a situação vacinal.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-03-adulto">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adulto">Febre Amarela (Atenuada)</span>
            <span className="text-quant-doses-adulto">Número de doses:</span>
            <span className="text-infomacao-adulto">Informações:</span>
            
            <div className="wrapper-quant-doses-adulto">
                <span className="text-quant-doses-02-adulto">1</span>
            </div>
            
            <div className="wrapper-informacoes-adulto">
                <span className="text-informacao-2-adulto">Iniciar ou completar o esquema, de acordo com situação vacinal. Reforço, caso a pessoa tenha recebido uma dose da vacina antes de completar 5 anos de idade.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-04-adulto">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adulto">Sarampo, Caxumba e Rubéola (SCR)</span>
            <span className="text-quant-doses-adulto">Número de doses:</span>
            <span className="text-infomacao-adulto">Informações:</span>
            
            <div className="wrapper-quant-doses-adulto">
                <span className="text-quant-doses-02-adulto">2</span>
            </div>
            
            <div className="wrapper-informacoes-adulto">
                <span className="text-informacao-2-adulto">Iniciar ou completar o esquema, de acordo com situação vacinal. Reforço, caso a pessoa tenha recebido uma dose da vacina antes de completar 5 anos de idade.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-05-adulto">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adulto">Papilomavírus humano (HPV)</span>
            <span className="text-quant-doses-adulto">Número de doses:</span>
            <span className="text-infomacao-adulto">Informações:</span>
            
            <div className="wrapper-quant-doses-adulto">
                <span className="text-quant-doses-02-adulto">2</span>
            </div>

            
            <div className="wrapper-informacoes-adulto">
                <span className="text-informacao-2-adulto">9 a 14 anos, para meninas; 11 a 14 anos para meninos.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-06-adulto">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adulto">Pneumocócica 23-valente (PPV 23)</span>
            <span className="text-quant-doses-adulto">Número de doses:</span>
            <span className="text-infomacao-adulto">Informações:</span>
            
            <div className="wrapper-quant-doses-adulto">
                <span className="text-quant-doses-02-adulto">1</span>
            </div>

            
            <div className="wrapper-informacoes-adulto">
                <span className="text-informacao-2-adulto">A partir de 5 anos de idade para os povos indígenas, sem comprovação da vacina PCV 10.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-07-adulto">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-adulto">Meningocócica ACWY (Conjugada)</span>
            <span className="text-quant-doses-adulto">Número de doses:</span>
            <span className="text-infomacao-adulto">Informações:</span>
            
            <div className="wrapper-quant-doses-adulto">
                <span className="text-quant-doses-02-adulto">1</span>
            </div>
            
            <div className="wrapper-informacoes-adulto">
                <span className="text-informacao-2-adulto">11 e 12 anos.</span>
            </div>
        </div>

    </div>
  );
}

export default VacinaAdulto;
