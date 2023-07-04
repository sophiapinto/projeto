import React, { PureComponent } from "react";

import dados from "../../vacinas.json";
import dadosVAC from "../../dados.json";

import logo from "../../assets/images/logo.png";

import './prazovacinas.css';
class PrazoVacinas extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { values: { 
      faixa: '', vacina: '', data: '', dose: '',
    } };

    this.forms_inputs = {}

    this.handleChangeFaixaEtaria = this.handleChangeFaixaEtaria.bind(this);
    this.handleChangeVacina = this.handleChangeVacina.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleDose = this.handleDose.bind(this);
  }

  //Eventos

  handleChangeFaixaEtaria(event) {
    this.setState((x) => x.values = {
      faixa:event.target.value,
      vacina: '', data: '', dose: ''
    })
    // this.setState((x) => x.values.vacina = undefined);
  }

  handleChangeVacina(event) {
    this.setState((x) => x.values.vacina = event.target.value);
  }

  handleDate(event) {
    this.setState((x) => x.values.data = event.target.value);
  }

  handleDose(event) {
    this.setState((x) => x.values.dose = event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();

    const id_faixa = this.state.values.faixa;
    const id_vacina = this.state.values.vacina;

    const catagoria = dados.categorias[id_faixa]
    // const vacina_atual = catagoria.vacinas.find(
    //   (vacina) => vacina.vacina === nome_vacina
    // )
    
    console.log(catagoria)
    if (catagoria.titulo === "Recém-nascido") {
      alert("Dose única ao nascer.");
    }
    
    // if ()
    // else {
    //   const intervaloEmDias = 21;
    //   const dataUltimaDose = new Date(this.state.value.data.slice()); // Substitua pela data real da última dose

    //   const dataProximaDose = new Date(dataUltimaDose);
    //   dataProximaDose.setDate(dataProximaDose.getDate() + intervaloEmDias);

    //   alert('A data da próxima vacina é: ' + dataProximaDose.toLocaleDateString("pt-BR"));
      
    // }
  }

  render() {
    return (
      <div>
        {/* <pre>
          <code>{JSON.stringify(this.state.values)}</code>
        </pre> */}
        <div className="logo">
          <figure className="logo-vac">
            <img src={logo} alt="Senhora Vacina" />
          </figure>
          <span className="text-span">APRAZAMENTO DE VACINAS</span>
        </div>

        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            <select id="faixaet" className="sel-pesquisa pesquisa-faixa-etaria" value={this.state.values.faixa} onChange={this.handleChangeFaixaEtaria}>
              <option value="" disabled>Selecione a faixa etária:</option>
              {
                dados.categorias.map((v, i) =>
                  <option key={`faixaet ${i}`} value={i+1}> {v.titulo} </option>)
                //vacinas.map((titulo) =>
                //<option> {titulo} </option>)
              }
            </select>
          </label>
          
          {/* {console.log("values:",this.state.values)} */}
          {(this.state.values.faixa && this.state.values.faixa !=="-") && (
            <label>
              <select id="inputvacina" className="sel-pesquisa pesquisa-vacina" value={this.state.values.vacina} onChange={this.handleChangeVacina}>
                <option value="" disabled>Selecione a vacina:</option>
                {
                  dados.categorias[this.state.values.faixa-1].vacinas.map((v, i) =>
                    <option key={`vacina ${i}`}  value={i+1}> {v.vacina} </option>
                )
                }
              </select>
              {/* {console.log("vacinas", dados.categorias[this.state.values.faixa-1].vacinas)} */}
            </label>
          )}

          <label>
            <input type="date" className="sel-pesquisa pesquisa-data" value={this.state.values.data} onChange={this.handleDate} />
          </label>
          
          {(
            this.state.values.vacina &&
            this.state.values.vacina !== "-" &&
            (dados.categorias[this.state.values.faixa-1]
              .vacinas[this.state.values.vacina-1].numerodedoses > 1)
            ) && (
            <label>
              {
                console.log("n_doses: ", dados.categorias[this.state.values.faixa-1]
                  .vacinas[this.state.values.vacina-1].numerodedoses)
              }
              <select id="quant-dose" className="sel-pesquisa pequisa-dose" value={this.state.values.dose} onChange={this.handleDose}>
                <option value="" disabled>Selecione a quantidade de dose já tomadas:</option>
                {/* <option value="1">1 (uma) dose</option> */}
                {/* <option value="2">2 (duas) doses</option> */}
                {/* <option value="3">3 (três) doses</option> */}
                {
                  new Array(dados.categorias[this.state.values.faixa-1]
                    .vacinas[this.state.values.vacina-1].numerodedoses)
                    .map(
                      (_, i) => (<option key={`dose ${i}`} value={i+1}> {`${i} doses`} </option>)
                    )
                }
              </select>
            </label>
          )}

          <button className="pesquisa-button" type="submit" value="Enviar">Calcular</button>
        </form>
      </div>
      
    );
  }
}

export default PrazoVacinas;