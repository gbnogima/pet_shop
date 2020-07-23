// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView, ContactView, LoginView, SignUpView } from '../views';
import { Header, Footer } from '../components';

class LandingPageApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/cadastro">
              <SignUpView />
            </Route>
            <Route path="/login">
              <LoginView onLoginSuccess={this.props.onAuth}/>
            </Route>
            <Route path="/contato">
              <ContactView />
            </Route>
            <Route path="/">
              <HomeView />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default LandingPageApp;
