import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView, ContactView, LoginView, SignUpView } from '../views';
import { Header, Footer } from './';

class RouterHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: this.props.isAuthenticated };
  }

  setAuthenticated() {
    this.setState({ isAuthenticated: true });
  }

  render() {
    if (this.state.isAuthenticated) {
      return (
        <Router>
          <Switch>
            <Route path="/">
              <h1>It works!</h1>
            </Route>
          </Switch>
        </Router>
      );
    }
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/cadastro">
              <SignUpView />
            </Route>
            <Route path="/login">
              <LoginView onLoginSuccess={this.setAuthenticated.bind(this)}/>
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

export default RouterHandler;
