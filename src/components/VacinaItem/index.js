import React, { Fragment, PureComponent} from "react";
import "./vacinaitem.css";

import logo from "../../assets/images/logo.png";

class VacinaItem extends PureComponent {
    render() {
      return (
        <Fragment>
            <div className= "wrapper-vacina-item">
                <img src= {logo} alt="logo" />
                <span className="text-nome-vacina">Nome da Vacina</span>
                <span className="text-quant-doses">Número de doses</span>
                <span className="text-infomacao">Informações</span>
                <div className="wrapper-quant-doses">
                </div>
                <div className="wrapper-informacoes">
                </div>
            </div>
        </Fragment> 
    
    );
}
}
export default VacinaItem;