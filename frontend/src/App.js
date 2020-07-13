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
