import React from 'react';

class SignUpView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: ''
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
      body: JSON.stringify({...this.state, role: "customer"})
    }

    try {
      // TODO: URL is hardcoded for now, change that later
      const response = await fetch("http://localhost:3001/users", requestData)
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
              <h2 class="login-title">CADASTRO</h2>
              <input class="input-text" id="name" name="name" placeholder="Nome" onChange={this.handleChange}/>
              <input class="input-text" id="email" name="email" placeholder="E-mail" onChange={this.handleChange}/> 
              <input class="input-text" id="phone" name="phone" placeholder="Telefone" onChange={this.handleChange}/> 
              <input class="input-text" id="address" name="address" placeholder="Endereço" onChange={this.handleChange}/> 
              <input class="input-text" id="password" name="password" type="password" placeholder="Senha" onChange={this.handleChange}/>
              <input class="btn-submit" type="submit" value="Cadastrar"/>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

export default SignUpView;
