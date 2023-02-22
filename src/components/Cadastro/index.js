import React, { PureComponent, Fragment } from "react";
import "./cadastro.css";
import { Link } from "react-router-dom";

class Cadastro extends PureComponent {
  render() {
    return (
      <Fragment>

        <section className="block">
          <div className="group">
            <input type="text-group" className="input" placeholder="Insira o seu e-mail" />
          </div>
              
          <div className="group">
            <input type="text-group" className="input" placeholder="Insira sua senha" />
          </div>

          <div className="acess">
            <Link to="/">
              <h2 className="text-acess">Criar conta</h2>
            </Link>
          </div>
          
        </section>
      </Fragment>


    );
  }
}

export default Cadastro;