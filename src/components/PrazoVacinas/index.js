import React, { PureComponent } from "react";

import DADOS_VACINAS from "../../vacinas.json";

import logo from "../../assets/images/logo.png";

import './prazovacinas.css';
class PrazoVacinas extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      faixa: "",
      vacina: "",
      data: "",
      dose: "",
    };

    this.forms_inputs = {}

    this.handleChangeFaixaEtaria = this.handleChangeFaixaEtaria.bind(this);
    this.handleChangeVacina = this.handleChangeVacina.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleDose = this.handleDose.bind(this);
  }

  //Eventos

  handleChangeFaixaEtaria(event) {

    console.log("Mudando Faixa para:", event.target.value)
    this.setState({
      faixa: event.target.value,
      vacina: "",
      data: "",
      dose: "",
    })

    console.log("this.state", this.state)
    // this.setState((x) => x.values.vacina = undefined);
  }

  handleChangeVacina(event) {
    console.log("Mudando Vacina para:", event.target.value)
    this.setState({ vacina: event.target.value });
    console.log("this.state", this.state)
  }

  handleDate(event) {
    console.log("Mudando Date para:", event.target.value)
    this.setState({ data: event.target.value });
    console.log("this.state", this.state)
  }

  handleDose(event) {
    console.log("Mudando Dose para:", event.target.value)
    this.setState({ dose: event.target.value });
    console.log("this.state", this.state)
  }

  // Cálculo da dose da próxima vacina

  // calcularProximaDose() {

  //   const id_faixa = this.state.faixa
  //   const id_vacina = this.state.vacina

  //   const FAIXA = DADOS_VACINAS.categorias.filter(x=>x.id===id_faixa);
  //   const VACINA = FAIXA.vacinas.filter(x=>x.id===id_vacina);

  //   const intervaloEmDias = VACINA.doses;

  //   // const intervaloEmDias = vacina.numerodedoses===1? : VACINA.doses.map();

  //   const dataUltimaDose = this.state.data.slice(); // Substitua pela data real da última dose

  //   const dataProximaDose = new Date(dataUltimaDose);

  //   dataProximaDose.setDate(dataProximaDose.getDate() + intervaloEmDias);

  //   return dataProximaDose;

  // }

  handleSubmit(event) {

    event.preventDefault();

    // // Obter o valor selecionado

    const {
      faixa,
      vacina,
      data,
      dose
    } = this.state;


    const FAIXA = DADOS_VACINAS.categorias[faixa]
    const VACINA = FAIXA.vacinas[vacina]


    if (FAIXA.titulo === "Recém-nascido") {

      alert(`Dose única ao nascer. \n\n${VACINA.informacao}`);

    } else if (vacina.numerodedoses === 1) {

      alert(`Dose única. \n\n${VACINA.informacao}`);

    } else if (dose >= VACINA.numerodedoses) {

      alert(`Todas as doses obrigatórias já foram tomadas, mas dependendo do caso pode ser necessário doses de reforço\n\n${VACINA.informacao}`);

    } else if (VACINA.doses.length < dose) {

      console.error("ERRO!!! O banco de dados ainda não possui os prazos cadastrados para essa vacina")
      alert(`erro no banco de dados\n\n${VACINA.informacao}`);

    } else if (dose === "0") {
      // COLOCAR INFORMAÇÂO DA PRIMEIRA DOSE
      alert(`${VACINA.informacao}`);

    } else {

      if (VACINA.doses.length >= dose) {

        const dataUltimaDose = new Date(data)

        const dataProximaDose = new Date();

        const intervaloEmDias = VACINA.doses[dose-1] || VACINA.doses[0]

        dataProximaDose.setDate(dataUltimaDose.getDate() + Number(intervaloEmDias));

        alert(`A proxima dose deve ser tomada em ${intervaloEmDias} dias, ou seja, dia ${dataProximaDose.toLocaleDateString()}`)
      } else {
        console.error("ERRO, A quantidade de doses cadastradas é inferior a quantidade de doses esperada")
      }
    }

  }

  render() {
    return (
      <div>
        <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre>
        {/* <pre> */}
        {/* {(this.state.faixa && this.state.faixa !== "") && <code>{JSON.stringify(DADOS_VACINAS.categorias[this.state.faixa], null, 4)}</code>} */}
        {/* </pre> */}
        <pre>
          {(this.state.vacina && this.state.vacina !== "") && <code>{JSON.stringify(DADOS_VACINAS.categorias[this.state.faixa].vacinas[this.state.vacina], null, 4)}</code>}
        </pre>


        <div className="logo">
          <figure className="logo-vac">
            <img src={logo} alt="Senhora Vacina" />
          </figure>
          <span className="text-span">APRAZAMENTO DE VACINAS</span>
        </div>

        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            <select id="faixaet" className="sel-pesquisa pesquisa-faixa-etaria" value={this.state.faixa} onChange={this.handleChangeFaixaEtaria}>
              <option value="" disabled> Selecione a faixa etária: </option>
              {
                DADOS_VACINAS.categorias.map(
                  (VACINA, i) => <option key={`faixaet_${i}`} value={i}> {VACINA.titulo} </option>
                )
              }
            </select>
          </label>
          {(this.state.faixa && this.state.faixa !== "") && (
            <label>
              <select id="inputvacina" className="sel-pesquisa pesquisa-vacina" value={this.state.vacina} onChange={this.handleChangeVacina}>
                <option value="" disabled>Selecione a vacina:</option>
                {
                  DADOS_VACINAS.categorias[this.state.faixa].vacinas.map((v, i) =>
                    <option key={`vacina ${i}`} value={`${i}`}> {v.vacina} </option>
                  )
                }
              </select>
            </label>
          )}

          {
            (this.state.faixa && this.state.faixa !== "") &&
              (this.state.vacina && this.state.vacina !== "")
              && (
                Number(DADOS_VACINAS.categorias[this.state.faixa].vacinas[this.state.vacina].numerodedoses) > 1
              )
              ? (
                <>
                  {console.log("vacina", DADOS_VACINAS.categorias[this.state.faixa].vacinas[this.state.vacina])}

                  {this.state.dose && this.state.dose!=="0" &&(<label>
                    <input type="date" className="sel-pesquisa pesquisa-data" value={this.state.data} onChange={this.handleDate} />
                  </label>)}

                  <label>
                    {
                      console.log("n_doses: ", DADOS_VACINAS.categorias[this.state.faixa]
                        .vacinas[this.state.vacina].numerodedoses)
                    }
                    <select id="quant-dose" className="sel-pesquisa pequisa-dose" value={this.state.dose} onChange={this.handleDose}>
                      <option value="" disabled>Selecione a quantidade de dose já tomadas:</option>
                      {
                        [...Array(DADOS_VACINAS.categorias[this.state.faixa].vacinas[this.state.vacina].numerodedoses + 1)]
                          .map((_, i) => <option key={`dose ${i}`} value={i}> {`${i} doses`} </option>)
                      }
                    </select>
                  </label>
                </>
              )
              : (this.state.faixa && this.state.faixa !== "") &&
              (this.state.vacina && this.state.vacina !== "")
              && (
                <div>
                  <div id="quant-dose" className="sel-pesquisa pequisa-dose" value={this.state.dose} onChange={this.handleDose}>
                    <span >Dose única</span>
                  </div>
                </div>
              )
          }


          <button className="pesquisa-button" type="submit" value="Enviar">Calcular</button>
        </form>
      </div>

    );
  }
}

export default PrazoVacinas;