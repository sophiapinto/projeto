import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class CallToAction extends PureComponent {
  render() {
    return (
      <section className="block">
        <div className="wrapper">
          <Link to="/Cadastro">
            <h2 className="text-wrapper">Criar uma conta.</h2>
          </Link>

        </div>
        <div className="wrapper">
          <Link to="/EsqueceuSenha">
              <h2 className="text-wrapper">Esqueci senha</h2>
          </Link>
        </div>
      </section>
    );
  }
}

export default CallToAction;