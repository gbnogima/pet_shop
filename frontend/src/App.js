// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { AppHandler } from './components';
import './styles.css';

function App() {
  const userToken = localStorage.getItem('token');
  if (userToken === null) {
    return <AppHandler />;
  }
  return <AppHandler user={true}/> 
}

export default App;
