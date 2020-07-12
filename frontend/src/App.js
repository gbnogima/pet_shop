import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomeView, ContactView, LoginView } from './views';
import './styles.css';

function App() {
  return (
    <Router>
      <nav class="nav-bar">
        <div class="container">
          <Link to="/"><a class="navbar-brand" >PET SHOP</a></Link>
          <div class="nav-menu">
            <ul>
              <li class="nav-li"><Link to="/login"><a class="nav-li-a">LOGIN</a></Link></li>
              <li class="nav-li"><Link to="/contato"><a class="nav-li-a">CONTATO</a></Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
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
    </Router>
  );
}

export default App;
