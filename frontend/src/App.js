import React from 'react';
import { RouterHandler } from './components';
import './styles.css';

function App() {
  const userToken = localStorage.getItem('token');
  if (userToken === null) {
    return <RouterHandler />;
  }
  return <RouterHandler isAuthenticated={true}/> 
}

export default App;
