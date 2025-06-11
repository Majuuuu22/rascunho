import React, { useState } from 'react';
import { carros } from '../dados/dados_carro';
import './ListaCarros.css';

const ListaCarros = () => {
  const [lista] = useState(carros);

  const vermelhos = lista.filter((carro) => carro.cor.toLowerCase() === 'vermelho');

  return (
    <div className="lista-container">
      <h2>Todos os Carros (Modelo e Ano)</h2>
      <ul>
        {lista.map((carro, index) => (
          <li key={index}>
            {carro.modelo} - {carro.ano}
          </li>
        ))}
      </ul>

      <h2>Carros Vermelhos</h2>
      <ul>
        {vermelhos.map((carro, index) => (
          <li key={index}>{carro.modelo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCarros;
