// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DashboardHeader, AdminSidebar} from '../components';
import { AdminProductApp, AdminServiceApp, AdminDetailsApp } from '../apps'
import { RegisterUserView } from '../views';

class AdminApp extends React.Component {
  render() {
    return (
      <Router>
        <DashboardHeader onLogoutSuccessful={this.props.onLogout}/>
        <div className="container flex-row">
          <AdminSidebar/>
          <div className="container">
            <Switch>
              <Route path="/registrar-usuario">
                <RegisterUserView/>
              </Route>
              <Route path="/gerenciar-produtos">
                <AdminProductApp/>
              </Route>
              <Route path="/gerenciar-servicos">
                <AdminServiceApp/>
              </Route>
              <Route path="/minha-conta">
                <AdminDetailsApp user={this.props.user}/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default AdminApp;
