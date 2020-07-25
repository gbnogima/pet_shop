// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { AdminApp, ClientApp, LandingPageApp } from '../apps';

class AppHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.user };
  }

  handleAuth(user, token) {
    localStorage.setItem("token", token);
    this.setState({ user: user });
  }

  handleLogout() {
    this.setState({ user: undefined });
    localStorage.removeItem("token");
  }

  async componentDidMount(){
    const userToken = localStorage.getItem('token');
    if(this.state.user){
      const requestData = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': userToken
        }
      }
      try{
        let result = await fetch("http://localhost:3001/users/decode", requestData);
        result = await result.json();
        this.setState({ user: result });
      }
      catch(e){
        alert(e);
      }
      
    }
  }

  render() {
    const user = this.state.user;
    if (user) {
      if (user.role === "admin") {
        return <AdminApp user = {user} onLogout={this.handleLogout.bind(this)} />
      } else if (user.role === "customer") {
        return <ClientApp user={user} onLogout={this.handleLogout.bind(this)} />
      }
    }
    return <LandingPageApp onAuth={this.handleAuth.bind(this)}/>
  }
}

export default AppHandler;
