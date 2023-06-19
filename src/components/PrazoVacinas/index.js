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

  handleDose(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   
/*
    var numerodoses = this.handleDose();
    const faixaetaria = dadosVAC.faixaetaria.map();

    if(faixaetaria === "recem-nascido"){
      alert("Dose única ao nascer");
      event.preventDefault();


    fetch('vacinas.json')
    .then(response => response.json())
    .then(vacinas => {
      // Aqui você pode acessar os dados do arquivo JSON
      var vacinas = ({
        vacinasrn,
        vacinascrianca,
        vacinasadulto,
        vacinasidos,
        vacinasidoso
      })
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });

    vacinas.numerodedoses.forEach(numerodedoses => {
      if (numerodedoses === '1') {
        alert("Dose única ao nascer.");
      }
    });

      const faixaetaria = this.handleChange.slice();
    
    if (faixaetaria==="recem-nascido"){
      alert("Dose única ao nascer.");
      event.preventDefault();
    }
*/
    const intervaloEmDias = 21;
    const dataUltimaDose = new Date(this.state.value.slice()); // Substitua pela data real da última dose

    const dataProximaDose = new Date(dataUltimaDose);
    dataProximaDose.setDate(dataProximaDose.getDate() + intervaloEmDias);

    alert('A data da próxima vacina é: ' + dataProximaDose.toLocaleDateString("pt-BR"));
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
            <select class="sel-pesquisa pequisa-dose" type="checkbox"value={this.state.value} onChange={this.handleDose}>
              <option value="">Selecione a quantidade de dose já tomadas:</option>
              <option value="1">1 (uma) dose</option>
              <option value="2">2 (duas) doses</option>
              <option value="3">3 (três) doses</option>
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