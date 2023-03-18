import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer'

import "./senhasolicitada.css";

function SenhaSolicitada () {
  return (
    <div>

      <Header />

      <span className="text-19">
        Atualização de senha solicitada com sucesso, verificar e-mail.
      </span>
      
      <Footer />
      
    </div>
  );
}

export default SenhaSolicitada;