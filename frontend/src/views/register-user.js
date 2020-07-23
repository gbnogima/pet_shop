// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

class RegisterUserView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      isAdmin: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({target}) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
        [target.name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { isAdmin, ...body } = this.state;
    body.role = isAdmin ? "admin" : "customer";
    const requestData = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
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
      <div class="login-container">
        <form onSubmit={this.handleSubmit}>
          <h2 class="login-title">Registrar Usuário</h2>
          <input class="input-text" id="name" name="name" placeholder="Nome" onChange={this.handleChange}/>
          <input class="input-text" id="email" name="email" placeholder="E-mail" onChange={this.handleChange}/> 
          <input class="input-text" id="phone" name="phone" placeholder="Telefone" onChange={this.handleChange}/> 
          <input class="input-text" id="address" name="address" placeholder="Endereço" onChange={this.handleChange}/> 
          <input class="input-text" id="password" name="password" type="password" placeholder="Senha" onChange={this.handleChange}/>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.isAdmin}
                name="isAdmin"
                color="primary"
                onChange={this.handleChange}
              />
            }
            label="Administrador"
          />
          <input class="btn-submit" type="submit" value="Cadastrar"/>
        </form>
      </div>
    )
  }
}

export default RegisterUserView;
