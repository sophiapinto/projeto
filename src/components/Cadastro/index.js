import React, { PureComponent } from "react";

import "./cadastro.css";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
class Cadastro extends PureComponent {
  render() {
    return (
      <div>

        <section className="block">
          <div className= "logo">
            <img src= {logo} alt="Senhora Vacina" />
          </div>
        
          <span className="text-span">CALENDÁRIO VACINAL</span>
      
          <div className="group-05">
            <input type="text-group" className="input" placeholder="Insira o seu nome" />
          </div>

          <div className="group-06">
            <input type="text-group" className="input" placeholder="Insira o seu e-mail" />
          </div>
              
          <div className="group-07">
            <input type="text-group" className="input" placeholder="Insira sua senha" />
          </div>

          <div className="group-08">
            <Link to="/CadastroRealizado">
              <span className="text-acess">Criar conta</span>
            </Link>
          </div>
          
        </section>
      </div>


    );
  }
}

export default Cadastro;