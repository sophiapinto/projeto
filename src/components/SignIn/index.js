import React, { PureComponent, Fragment } from "react";
import CallToAction from "./CallToAction";

import "./signIn.css";

class SignIn extends PureComponent {
  render() {
    return (
      <Fragment>

        <section className="block">
            <form className="section-sign-in">
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Insira o seu e-mail" />
              </div>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Insira sua senha" />
              </div>
              <button type="button" className="wrapper-01">
                Acessar
              </button>
            </form>
        </section>

        <CallToAction />
      </Fragment>


    );
  }
}

export default SignIn;