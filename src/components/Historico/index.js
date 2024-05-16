import React from 'react';
import './historico.css'; // Importa o arquivo CSS

function Historico({ historico }) {
  

  const listItems = historico.map((item, index) => (
    <li key={index} className="historico-item">
      {/*{index + 1}. Faixa Etária: {item.faixa}, Nome da Vacina: {item.vacina}, Dose: {item.dose}, Data: {item.data}
    */}

      {index + 1}. {item.action}: {item.newValue}
    </li>
  ));

  return (

<div className="historico-container">
      <h2 className="historico-title">Histórico Vacinal</h2>
      <ol>{listItems}</ol>
    </div>
  );
}

export default Historico;