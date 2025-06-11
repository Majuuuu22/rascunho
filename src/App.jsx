import React from 'react';
import ContadorBidirecional from './componentes/ContadorBidirecional';
import ListaCarros from './componentes/ListaCarros';

const App = () => {
  return (
    <div>
      <h1>Componentes React</h1>
      <ContadorBidirecional />
      <ListaCarros />
    </div>
  );
};

export default App;
