import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import "./esqueceusenha.css";

class EsqueceuSenha extends PureComponent {
  render() {
    return (
      <Fragment>

        <section className="block">
          <div className="group-15">
                <input type="text-group" className="input" placeholder="Insira o seu e-mail" />
          </div>
        
          <div className="group-16">
            <Link to="/SenhaSolicitada">
              <h2 className="text-acess">Atualizar senha</h2>
            </Link>
          </div>  
        </section>

      </Fragment>


    );
  }
}

export default EsqueceuSenha;