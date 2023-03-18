import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./esqueceusenha.css";

class EsqueceuSenha extends PureComponent {
  render() {
    return (
      <div>

          <div className="group-15">
            <input type="text-group-02" className="input-02" placeholder="Insira o seu e-mail" />
          </div>
        
          <div className="group-16">
            <Link to="/SenhaSolicitada">
              <h2 className="text-acess-02">Atualizar senha</h2>
            </Link>
          </div>  
      </div>


    );
  }
}

export default EsqueceuSenha;