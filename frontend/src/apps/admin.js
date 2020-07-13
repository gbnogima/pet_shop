import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardHeader, AdminSidebar} from '../components';
import {AdminProductApp} from '../apps'

class AdminApp extends React.Component {
  render() {
    return (
      <Router>
        <DashboardHeader onLogoutSuccessful={this.props.onLogout}/>
        <div className="container flex-row">
          <AdminSidebar/>
          <div className="container">
            <Switch>
              <Route path="/a">
                <h1>It works!</h1>
              </Route>
              <Route path="/gerenciar-produtos">
                <AdminProductApp/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default AdminApp;
