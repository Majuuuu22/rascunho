import React, { useState } from 'react';
import './ContadorBidirecional.css';

const ContadorBidirecional = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div className="contador-container">
      <h2>Contador: {contador}</h2>
      <div className="botoes">
        <button
          className={`botao ${contador > 10 ? 'incremento' : ''}`}
          onClick={incrementar}
        >
          Incrementar
        </button>
        <button
          className={`botao ${contador < 0 ? 'decremento' : ''}`}
          onClick={decrementar}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default ContadorBidirecional;
