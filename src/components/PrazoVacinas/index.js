import React, { PureComponent } from "react";

import dados from "../../vacinas.json";
import dadosVAC from "../../dados.json";

//import logo from "../../assets/images/logo.png";

import './prazovacinas.css';
class PrazoVacinas extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A data da próxima vacina é: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select type="checkbox" value={this.state.value} onChange={this.handleChange}>
                  <option value="" disabled selected>Selecione a faixa etária:</option>
                  {
                    dados.categorias.map((v,i)=> <option value={i}> {v.titulo} </option>
                  )}
        </select>
        </label>

        <label>
          <select type="checkbox" value={this.state.value} onChange={this.handleChange}>
            <option value="" disabled selected>Selecione a vacina:</option>
            {
              dadosVAC.map((v,i)=> <option value={i}> {v.vacina} </option>
            )}
          </select>
        </label>

        <label>
        <input type="date"/>
        </label>


        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default PrazoVacinas;