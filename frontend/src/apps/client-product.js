// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { BuyProductView, CartView } from '../views';

class ClientProductApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCreateOn: false, cartRefresh: false};
    this.handleClick = this.handleClick.bind(this);
    this.onCartChange = this.onCartChange.bind(this);
  } 

  handleClick() {
    this.setState(state => ({
      isCreateOn: !state.isCreateOn
    }));
  }

  async onCartChange() {
    this.setState(state => ({
      cartRefresh: !state.cartRefresh
    }));
  }

  render() {
    return (
      <div>
        <div className='stock-container'>
            <h2>Compras</h2>
            <button className="btn-stock new-product-button" onClick={this.handleClick}>
                Ver Carrinho
            </button>
            {this.state.isCreateOn && <CartView cartRefresh={this.state.cartRefresh} onCartChange={this.onCartChange}/>} 
        </div>
        <br/>
        <BuyProductView user={this.props.user} onCartChange={this.onCartChange}/>
      </div>
    );
  }
}

export default ClientProductApp;
