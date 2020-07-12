import React from 'react';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
      body: JSON.stringify(this.state)
    }

    try {
      // TODO: URL is hardcoded for now, change that later
      const response = await fetch("http://localhost:3001/users/authenticate", requestData)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  render() {
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
