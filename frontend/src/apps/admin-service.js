import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CreateServiceView, ListServicesView } from '../views';

class AdminServiceApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCreateOn: false };
    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
    this.setState(state => ({
      isCreateOn: !state.isCreateOn
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
          {this.state.isCreateOn && <CreateServiceView/>}
          <ListServicesView/>
        </div>
      </Router>
    );
  }
}

export default AdminServiceApp;
