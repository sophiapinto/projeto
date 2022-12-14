import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import "./esqueceusenha.css";

class EsqueceuSenha extends PureComponent {
  render() {
    return (
      <Fragment>

        <section className="block">
            <form className="section-sign-in">
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Insira o seu e-mail" />
              </div>
              <Link to="/Solicitado">
                <button type="button" className="wrapper-01">
                  Atualizar senha
                </button>
              </Link>

            </form>
        </section>

      </Fragment>


    );
  }
}

export default EsqueceuSenha;