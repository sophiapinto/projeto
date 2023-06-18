import React, { PureComponent } from "react";

import dados from "../../vacinas.json";
import dadosVAC from "../../dados.json";

import logo from "../../assets/images/logo.png";

import './prazovacinas.css';
class PrazoVacinas extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleDate(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // const result = this.state.value.slice();
    //result[1] = "VacinaData";
    //alert('A data da próxima vacina é: ' + result);
    //this.setState({value: result});

    alert('A data da próxima vacina é: ' + this.state.value);
    event.preventDefault();
  
  }

  render() {
    return (
      <div>
          <div className= "logo">
            <figure class="logo-vac">
              <img src= {logo} alt="Senhora Vacina" />
            </figure>
            <span className="text-span">APRAZAMENTO DE VACINAS</span>
          </div>

        <form class="form" onSubmit={this.handleSubmit}>
          <label>
            <select class="sel-pesquisa pesquisa-faixa-etaria" type="checkbox" value={this.state.value} onChange={this.handleChange}>
                    <option value="" disabled>Selecione a faixa etária:</option>
                    {
                dados.categorias.map((v, i) => <option key={i}  value={i}> {v.titulo} </option>
                    )}
          </select>
          </label>

          <label>
            <select class="sel-pesquisa pesquisa-vacina" type="checkbox" value={this.state.value} onChange={this.handleChange}>
              <option value="" disabled>Selecione a vacina:</option>
              {
                dadosVAC.map((v, i) => <option key={i}  value={i}> {v.vacina} </option>
              )}
            </select>
          </label>

          <label>
            <select class="sel-pesquisa pequisa-dose" type="checkbox">
              <option value="">Selecione a quantidade de dose já tomadas:</option>
              <option value="1">1 dose</option>
              <option value="2">2 dose</option>
              <option value="3">3 dose</option>
            </select>
          </label>

          <label>
            <input type="date" class="sel-pesquisa pesquisa-data" value={this.state.value} onChange={this.handleDate}/>
          </label>

            <button class="pesquisa-button" type="submit" value="Enviar">Calcular</button>
        </form>

      </div>
    );
  }
}

export default PrazoVacinas;