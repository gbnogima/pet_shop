// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CreateProductView, ListProductsView } from '../views';

class AdminProductApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCreateOn: false, stockRefresh: false };
    this.handleClick = this.handleClick.bind(this);
    this.onStockChange = this.onStockChange.bind(this);
  } 

  handleClick() {
    this.setState(state => ({
      isCreateOn: !state.isCreateOn
    }));
  }

  onStockChange() {
    this.setState(state => ({
      stockRefresh: !state.stockRefresh
    }));
  }

  render() {
    return (
      <Router>
        <div className='stock-container'>
          <h2>Controle de estoque</h2>
            <button className="btn-stock new-product-button" onClick={this.handleClick}>
              Novo Produto
            </button>
            {this.state.isCreateOn && <CreateProductView onStockChange={this.onStockChange} handleClick={this.handleClick}/>}
            <ListProductsView stockRefresh={this.state.stockRefresh} onStockChange={this.onStockChange}/>
        </div>
      </Router>
    );
  }
}

export default AdminProductApp;
