import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomeView, ContactView, LoginView, SignUpView } from './views';
import { Header, Footer } from './components';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/cadastro">
            <SignUpView />
          </Route>
          <Route path="/login">
            <LoginView />
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

export default App;
