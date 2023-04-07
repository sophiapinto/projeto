import React from "react";
//import { Link } from "react-router-dom";

import vacinalogo from "../../assets/images/logo.png";
import "./vacinacrianca.css";

import criança from "../../assets/images/criança.svg";


function VacinaCrianca () {
  return (
    <div>
        <div className= "logo-gest-calenderio">
          <img src= {criança} alt="Vacina Criança" />
        </div>
        
        <span className="text-gest-calenderio">CALENDÁRIO VACINAL DA CRIANÇA</span>

        <div className= "wrapper-vacina-item">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Poliomielite 1,2,3 (VIP - inativada)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">3</span>
            </div>

            
            <div className="wrapper-informacoes">
            <span className="text-informacao-2">2 reforços com a vacina VOP.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-02">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Poliomielite 1 e 3 (VOP - atenuada)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">2</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-03">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Rotavírus humano G1P1 (VRH)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">2</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-04">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">DTP+Hib+HB (Penta)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">3</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-05">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Pneumocócica 10-valente (PCV 10)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">2</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-06">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Meningocócica C (Conjugada)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">2</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-07">
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
                <span className="text-informacao-2">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-08">
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
                <span className="text-informacao-2">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-09">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Sarampo, Caxumba, Rubéola e Varicela (SCRV)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">1</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-10">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Hepatite A (HA)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">1</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-11">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Difteria, Tétano e Pertussis (DTP)</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">2</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">-</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-12">
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
                <span className="text-informacao-2">A partir dos 7 anos, a cada 10 anos. Em caso de ferimentos graves a cada 5 anos.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-13">
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
        <div className= "wrapper-vacina-item-14">
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

        <div className= "wrapper-vacina-item-15">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina">Varicela</span>
            <span className="text-quant-doses">Número de doses:</span>
            <span className="text-infomacao">Informações:</span>
            
            <div className="wrapper-quant-doses">
                <span className="text-quant-doses-02">1</span>
            </div>

            
            <div className="wrapper-informacoes">
                <span className="text-informacao-2">-</span>
            </div>
        </div>

    </div>
  );
}

export default VacinaCrianca;