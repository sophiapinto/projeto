import React, { PureComponent } from "react";
//import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

//import { Link } from "react-router-dom";
//import calendario from "../../assets/images/calendario.svg";
//import pesquisa from "../../assets/images/logo.png";
//import aprazamento from "../../assets/images/aprazamento.svg";

import './prazovacinas.css';
class PrazoVacinas extends PureComponent {
    render() {
      return (
        <div>
          <div className= "logo">
            <img src= {logo} alt="Senhora Vacina" />
          </div>
          <span className="text-span">APRAZAMENTO DE VACINAS</span>
          {/*
          <div className="wrapper">
            <div className="wrapper-01">
              <span className="text-s">NOME</span>
            </div>
            <div className="wrapper-02"></div>
          </div>
        */}

          <div className="wrapper-pesquisa">
            <form className="Form-Prazo-Vacinas">  
            <div className="selection-faixaetaria">
              <select class="pesquisa-faixa-etaria" name="option">
                <option value="" disabled selected>Selecione a faixa etária:</option>
                <option value="1">Recém-nascido</option>
                <option value="2">Criança</option>
                <option value="3">Adolescente</option>
                <option value="4">Adulto</option>
                <option value="5">Idoso</option>
                <option value="6">Gestante</option>
              </select>
            </div>

            <div className="selection-vacina">
              <select class="pesquisa-vacina" name="option">
                <option value="" disabled selected>Selecione a vacina:</option>
                <option value="1">BCG</option>
                <option value="2">Hepatite</option>
              </select>
            </div>

            <div className="data">
              <input type="date" className="pesquisa-data" placeholder="Insira a data:" />
            </div>
            {/*
            <Link to= "/">
            <div className="pesquisa-button">
              <span className="text-pesquisa-button">Pesquisar</span>
            </div>
            </Link>

            */}

            <input type="submit" class="pesquisa-button" onclick="Calcular();" value="Pesquisar" />
            </form>

          </div>
        </div>  
      );
    }
}

export default PrazoVacinas;