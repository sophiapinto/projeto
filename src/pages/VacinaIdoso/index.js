import React from "react";
//import { Link } from "react-router-dom";

import vacinalogo from "../../assets/images/logo.png";
import "./vacinaidoso.css";

import idoso from "../../assets/images/idoso.svg";


function VacinaIdoso () {
  return (
    <div>
        <div className= "logo-idoso-calenderio">
          <img src= {idoso} alt="Vacina Idoso" />
        </div>
        <span className="text-idoso-calenderio">CALENDÁRIO VACINAL DO IDOSO</span>

        <div className= "wrapper-vacina-item-idoso">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-idoso">Difteria e Tétano (dT)</span>
            <span className="text-quant-doses-idoso">Número de doses:</span>
            <span className="text-infomacao-idoso">Informações:</span>
            
            <div className="wrapper-quant-doses-idoso">
                <span className="text-quant-doses-02-idoso">3</span>
            </div>

            
            <div className="wrapper-informacoes-idoso">
            <span className="text-informacao-2-idoso">Iniciar ou completar o esquema, de acordo com a situação vacinal.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-02-idoso">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-idoso">Hepatite B recombinante</span>
            <span className="text-quant-doses-idoso">Número de doses:</span>
            <span className="text-infomacao-idoso">Informações:</span>
            
            <div className="wrapper-quant-doses-idoso">
                <span className="text-quant-doses-02-idoso">3</span>
            </div>

            
            <div className="wrapper-informacoes-idoso">
                <span className="text-informacao-2-idoso">Iniciar ou completar o esquema, de acordo com a situação vacinal.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-03-idoso">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-idoso">Febre Amarela (Atenuada)</span>
            <span className="text-quant-doses-idoso">Número de doses:</span>
            <span className="text-infomacao-idoso">Informações:</span>
            
            <div className="wrapper-quant-doses-idoso">
                <span className="text-quant-doses-02-idoso">1</span>
            </div>

            
            <div className="wrapper-informacoes-idoso">
                <span className="text-informacao-2-idoso">Iniciar ou completar o esquema, de acordo com situação vacinal. Reforço, caso a pessoa tenha recebido uma dose da vacina antes de completar 5 anos de idade.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-04-idoso">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-idoso">Sarampo, Caxumba e Rubéola (SCR)</span>
            <span className="text-quant-doses-idoso">Número de doses:</span>
            <span className="text-infomacao-idoso">Informações:</span>
            
            <div className="wrapper-quant-doses-idoso">
                <span className="text-quant-doses-02-idoso">2</span>
            </div>

            
            <div className="wrapper-informacoes-idoso">
                <span className="text-informacao-2-idoso">Iniciar ou completar o esquema, de acordo com situação vacinal. Reforço, caso a pessoa tenha recebido uma dose da vacina antes de completar 5 anos de idade.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-05-idoso">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-idoso">Papilomavírus humano (HPV)</span>
            <span className="text-quant-doses-idoso">Número de doses:</span>
            <span className="text-infomacao-idoso">Informações:</span>
            
            <div className="wrapper-quant-doses-idoso">
                <span className="text-quant-doses-02-idoso">2</span>
            </div>

            
            <div className="wrapper-informacoes-idoso">
                <span className="text-informacao-2-idoso">9 a 14 anos, para meninas; 11 a 14 anos para meninos.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-06-idoso">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-idoso">Pneumocócica 23-valente (PPV 23)</span>
            <span className="text-quant-doses-idoso">Número de doses:</span>
            <span className="text-infomacao-idoso">Informações:</span>
            
            <div className="wrapper-quant-doses-idoso">
                <span className="text-quant-doses-02-idoso">1</span>
            </div>

            
            <div className="wrapper-informacoes-idoso">
                <span className="text-informacao-2-idoso">A partir de 5 anos de idade para os povos indígenas, sem comprovação da vacina PCV 10.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-07-idoso">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-idoso">Meningocócica ACWY (Conjugada)</span>
            <span className="text-quant-doses-idoso">Número de doses:</span>
            <span className="text-infomacao-idoso">Informações:</span>
            
            <div className="wrapper-quant-doses-idoso">
                <span className="text-quant-doses-02-idoso">1</span>
            </div>

            
            <div className="wrapper-informacoes-idoso">
                <span className="text-informacao-2-idoso">11 e 12 anos.</span>
            </div>
        </div>

    </div>
  );
}

export default VacinaIdoso;
