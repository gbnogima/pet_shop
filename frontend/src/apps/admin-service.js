// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CreateServiceView, ListServicesView } from '../views';

class AdminServiceApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCreateOn: false, serviceRefresh: false };
    this.handleClick = this.handleClick.bind(this);
    this.onServiceChange = this.onServiceChange.bind(this);
  } 

  handleClick() {
    this.setState(state => ({
      isCreateOn: !state.isCreateOn
    }));
  }

  onServiceChange() {
    this.setState(state => ({
      serviceRefresh: !state.serviceRefresh
    }));
  }

  render() {
    return (
      <Router>
        <div className='stock-container'>
          <h2>Gerenciamento de serviços</h2>
          <button className="btn-stock new-product-button" onClick={this.handleClick}>
            Novo Serviço
          </button>
          {this.state.isCreateOn && <CreateServiceView onServiceChange={this.onServiceChange} handleClick={this.handleClick}/>}
          <ListServicesView serviceRefresh={this.state.serviceRefresh} onServiceChange={this.onServiceChange}/>
        </div>
      </Router>
    );
  }
}

export default AdminServiceApp;
