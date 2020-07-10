import React from 'react';
import './App.css';

import Battle from './pages/Battle.component';

function App() {
  return (
    <div>
      <h3 className="title-app">
        Você está no ano de 3150 e está a frente do setor de tecnologia
        responsável pelo desenvolvimento do sistema de gerenciamento de
        distribuição de Heros para combater ameaças. O sistema deve monitorar o
        sistema de alertas de ameças provido pela ONU e alocar os herois para
        cada nova ameaça existente no globo terrestre.
      </h3>
      <Battle />
    </div>
  );
}

export default App;
