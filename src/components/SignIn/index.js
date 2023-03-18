import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import "./signIn.css";
import logo from "../../assets/images/logo.png";

class SignIn extends PureComponent {
  render() {
    return (
      <Fragment>

        <section className="block">
            <div className= "logo">
              <img src= {logo} alt="Senhora Vacina" />
            </div>

            <div className="insert">
              <input type="text" className="input" placeholder="Insira o seu e-mail" />
            </div>

            <div className="insert-02">
              <input type="text" className="input" placeholder="Insira sua senha" />
            </div>
              
            <div className="group-03">
              <Link to="/Selecao">
                <h2 className="text-acess">Acessar</h2>
              </Link>
            </div>
          
          <div className="group-01">
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