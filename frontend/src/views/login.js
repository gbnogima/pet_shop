// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const requestData = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: this.state.email, password: this.state.password })
    }

    try {
      // TODO: URL is hardcoded for now, change that later
      let response = await fetch("http://localhost:3001/users/authenticate", requestData)
      if (!response.ok) {
        alert("Credenciais invalidas");
        return;
      }

      response = await response.json();
      this.props.onLoginSuccess(response.data, response.token);
    } catch (error) {
      console.log(error);
    }
  }
  
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}/>
    }
    return (
      <div>
        <section class="page-section bg-white">
          <div class="login-container">
            <form onSubmit={this.handleSubmit}>
              <h2 class="login-title">LOGIN</h2>
              <input class="input-text" id="email" name="email" placeholder="E-mail" onChange={this.handleChange}/>
              <input class="input-text" id="password" type="password" name="password" placeholder="Senha" onChange={this.handleChange}/>
              <input class="btn-submit" type="submit" value="Entrar"/>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

export default LoginView;
