import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardHeader, AdminSidebar } from '../components';

class AdminApp extends React.Component {
  render() {
    return (
      <Router>
        <DashboardHeader onLogoutSuccessful={this.props.onLogout}/>
        <div className="container flex-row">
          <AdminSidebar/>
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

export default AdminApp;
