import React from 'react';
import { VacinaCardContainer } from './styles';

function VacinaCard({ vacinaTitle }) {
    return (
    <VacinaCardContainer
      title={vacinaTitle}
    />
  );
}

export default VacinaCard;