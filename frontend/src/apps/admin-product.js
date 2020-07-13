import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreateProductView } from '../views';

class AdminProductApp extends React.Component {
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
        <div className="container flex-row">
          <div className="container">
            <div className='stock-container'>
              <h2>Controle de estoque</h2>
              <Switch>
                <Route path="/">
                  <button className="btn-stock new-product-button" onClick={this.handleClick}>
                    Novo Produto
                  </button>
                  {this.state.isCreateOn
                    ? <CreateProductView/>
                    : console.log('nao')
                  }
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default AdminProductApp;
