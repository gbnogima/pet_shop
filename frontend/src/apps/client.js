import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardHeader, ClientSidebar } from '../components';
import { ClientProductApp, ClientPetsApp, ClientDetailsApp } from '../apps'

class ClientApp extends React.Component {
  render() {
    return (
      <Router>
        <DashboardHeader onLogoutSuccessful={this.props.onLogout}/>
        <div className="container flex-row">
          <ClientSidebar/>
          <div className="container">
            <Switch>
              <Route path="/a">
                <h1>It works!</h1>
              </Route>
              <Route path="/comprar-produtos">
                <ClientProductApp user={this.props.user}/>
              </Route>
              <Route path="/meus-pets">
                <ClientPetsApp user={this.props.user}/>
              </Route>
              <Route path="/minha-conta">
                <ClientDetailsApp user={this.props.user}/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default ClientApp;
