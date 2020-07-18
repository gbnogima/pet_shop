import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {BuyProductView, CartView } from '../views';

class ClientProductApp extends React.Component {
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
                <h2>Compras</h2>
                    <button className="btn-stock new-product-button" onClick={this.handleClick}>
                        Ver Carrinho
                    </button>
                    {this.state.isCreateOn && <CartView/>}
                    <BuyProductView/>
                </div>
      </Router>
    );
  }
}

export default ClientProductApp;
