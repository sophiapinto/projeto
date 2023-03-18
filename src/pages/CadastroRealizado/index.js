import React from 'react';

//import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";

import "./cadastrorealizado.css";

function CadastroRealizado () {
  return (
    <div>

      <span className="text">
        Cadastro realizado com sucesso,<br/> realize seu login.
      </span>

     <div className="group-18">
        <Link to="/Login">
          <h2 className="text-group">Acesse</h2>
        </Link>
      </div>
      
      <Footer />
      
    </div>
  );
}

export default CadastroRealizado;