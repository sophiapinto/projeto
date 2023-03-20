import React, { PureComponent} from "react";
import "./vacinaitem.css";
//import "../../../vacinas.json";

import vacinalogo from "../../assets/images/logo.png";
class VacinaItem extends PureComponent {
    render() {
      return (
                <div className= "wrapper-vacina-item">
                    <div className="logo-vacina">
                        <img src= {vacinalogo} alt="logo" />
                    </div>
                    <span className="text-nome-vacina">Nome da Vacina</span>
                    <span className="text-quant-doses">Número de doses:</span>
                    <span className="text-infomacao">Informações:</span>
                    <div className="wrapper-quant-doses">
                    </div>
                    <div className="wrapper-informacoes">
                    </div>
                </div>
    
        );
    }
}
export default VacinaItem;