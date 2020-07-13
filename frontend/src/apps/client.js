import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardHeader, ClientSidebar } from '../components';

class ClientApp extends React.Component {
  render() {
    return (
      <Router>
        <DashboardHeader onLogoutSuccessful={this.props.onLogout}/>
        <div className="container flex-row">
          <ClientSidebar/>
          <div className="container">
            <Switch>
              <Route path="/">
                <h1>It works!</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default ClientApp;
