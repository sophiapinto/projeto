import React from 'react';

import logo from "../../assets/images/logo.png";

//import Header from '../../components/Header';
//import Footer from '../../components/Footer'
import { Link } from "react-router-dom";

import "./home.css";

function Home () {
  return (
    <div>

        <div className= "logo">
          <img src= {logo} alt="Senhora Vacina" />
          <h1>CALENDÁRIO VACINAL</h1>
        </div>

      <div className="acess">
        <Link to="/Login">
          <h2 className="text-acess">Acesse</h2>
        </Link>
      </div>

      <div className="footer-wrapper">
        
        <span className="footer-text">Plataforma desenvolvida por Elisa e Sophia Pinto.<br/>Copyright&copy;&nbsp;2022.<br/>Todos os direitos reservados.</span>
        {/*<div className="footer-navbar">
          <a href="/" className="footer-link">
            Termos de uso
          </a>
          <a href="/" className="footer-link">
            Política de privacidade
          </a>
        </div>
        */}
        
      </div>
      
    </div>
  );
}

export default Home;