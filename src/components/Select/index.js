import React, { PureComponent } from "react";
import "./select.css";

class Select extends PureComponent {
  render() {
    return (
        <Select>
            <div className="wrap-01">
                <h1>E-mail</h1>
            </div>

            <div className="wrap-01">
                <h1>Senha</h1>
            </div>

            <div className="wrap-02">
                <h2>Acesse</h2>
            </div>

            <div className="wrap-01">
                <p>Não tenho uma conta. Toque aqui para criar uma conta.</p>
            </div>
        </Select>
    );
  }
}

export default Select;

