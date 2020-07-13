import React from 'react';
import { AdminApp, ClientApp, LandingPageApp } from '../apps';

class AppHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.auth };
  }

  handleAuth(user, token) {
    console.log(user);
    localStorage.setItem("token", token);
    this.setState({ user: user });
  }

  handleLogout() {
    console.log(this.state);
    this.setState({ user: undefined });
    localStorage.removeItem("token");
  }

  render() {
    const user = this.state.user;
    if (user) {
      if (user.role == "admin") {
        return <AdminApp onLogout={this.handleLogout.bind(this)} />
      } else if (user.role == "customer") {
        return <ClientApp onLogout={this.handleLogout.bind(this)} />
      }
    }
    return <LandingPageApp onAuth={this.handleAuth.bind(this)}/>
  }
}

export default AppHandler;
