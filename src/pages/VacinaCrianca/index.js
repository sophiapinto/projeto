import React from "react";
//import { Link } from "react-router-dom";

import vacinalogo from "../../assets/images/logo.png";
import "./vacinacrianca.css";

import criança from "../../assets/images/criança.svg";


function VacinaCrianca () {
  return (
    <div>
        <div className= "logo-crianca-calenderio">
          <img src= {criança} alt="Vacina Criança" />
        </div>
        
        <span className="text-crianca-calenderio">CALENDÁRIO VACINAL DA CRIANÇA</span>

        <div className= "wrapper-vacina-item-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Poliomielite 1,2,3 (VIP - inativada)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">3</span>
            </div>
            
            <div className="wrapper-informacoes-crianca">
            <span className="text-informacao-2-crianca">2 reforços com a vacina VOP.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-02-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Poliomielite 1 e 3 (VOP - atenuada)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">2</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-03-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Rotavírus humano G1P1 (VRH)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">2</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-04-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">DTP+Hib+HB (Penta)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">3</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-05-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Pneumocócica 10-valente (PCV 10)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">2</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-06-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Meningocócica C (Conjugada)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">2</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-07-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Febre Amarela (Atenuada)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">1</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-08-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Sarampo, Caxumba e Rubéola (SCR)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">2</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-09-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Sarampo, Caxumba, Rubéola e Varicela (SCRV)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">1</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-10-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Hepatite A (HA)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">1</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-11-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Difteria, Tétano e Pertussis (DTP)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">2</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-12-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Difteria e Tétano (dT)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">3</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">A partir dos 7 anos, a cada 10 anos. Em caso de ferimentos graves a cada 5 anos.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-13-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Papilomavírus humano (HPV)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">2</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">9 a 14 anos, para meninas; 11 a 14 anos para meninos.</span>
            </div>
        </div>
        <div className= "wrapper-vacina-item-14-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Pneumocócica 23-valente (PPV 23)</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">1</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">A partir de 5 anos de idade para os povos indígenas, sem comprovação da vacina PCV 10.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-15-crianca">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-crianca">Varicela</span>
            <span className="text-quant-doses-crianca">Número de doses:</span>
            <span className="text-infomacao-crianca">Informações:</span>
            
            <div className="wrapper-quant-doses-crianca">
                <span className="text-quant-doses-02-crianca">1</span>
            </div>

            
            <div className="wrapper-informacoes-crianca">
                <span className="text-informacao-2-crianca">-</span>
            </div>
        </div>

    </div>
  );
}

export default VacinaCrianca;