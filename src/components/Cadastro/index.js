import React, { PureComponent } from "react";

import "./cadastro.css";

import { Link } from "react-router-dom";
class Cadastro extends PureComponent {
  render() {
    return (
      <div>

          <div className="group-05">
            <input type="text-group-01" className="input-01" placeholder="Insira o seu nome" />
          </div>

          <div className="group-06">
            <input type="text-group-01" className="input-01" placeholder="Insira o seu e-mail" />
          </div>
              
          <div className="group-07">
            <input type="text-group-01" className="input-01" placeholder="Insira sua senha" />
          </div>

          <div className="group-08">
            <Link to="/CadastroRealizado">
              <span className="text-acess-01">Criar conta</span>
            </Link>
          </div>

      </div>


    );
  }
}

export default Cadastro;