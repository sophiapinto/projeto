import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import "./signIn.css";

class SignIn extends PureComponent {
  render() {
    return (
      <Fragment>

        <section className="block">
              
            <div className="insert">
              <input type="text" className="input" placeholder="Insira o seu e-mail" />
            </div>

            <div className="insert">
              <input type="text" className="input" placeholder="Insira sua senha" />
            </div>
              
            <div className="acess">
              <Link to="/">
                <h2 className="text-acess">Acessar</h2>
              </Link>
            </div>
          
          <div className="group">
            <Link to="/Cadastro">
              <h2 className="text-group">Criar uma conta</h2>
            </Link>
          </div>

          <div className="group">
            <Link to="/EsqueceuSenha">
              <h2 className="text-group">Esqueci senha</h2>
            </Link>
          </div>
          
      </section>

      </Fragment>


    );
  }
}

export default SignIn;