// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { EditUserView } from '../views';

class ClientDetailsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      creating: false,
      isCreateOn : false
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFabClick = this.handleFabClick.bind(this);
    this.refreshUsers = this.refreshUsers.bind(this);
  }

  handleFabClick() {
    this.setState({ creating: true });
  }

  async refreshUsers() {
    try {
      let response = await fetch(`http://localhost:3001/users/id/${this.props.user.id}`)
      response = await response.json()
      this.setState({users: response});
    } catch (error) {
      alert("Não foi possível carregar o usuário");
    }
  }

  componentDidMount() {
    this.refreshUsers();
  }

  handleEditClick() {
    this.setState(state => ({
      isEditOn: !state.isEditOn
    }));
  }

  render() {
    let className;
    if (this.state.isEditOn){
      className = 'user-container-expand'
    }
    else{
      className = 'user-container';
    }
    
    const {users} = this.state;

    return (
      <div style={{display: "flex", height: "100%", flexDirection: "column", justifyContent: "space-between"}}>
        <div class={className}>
            <a>
                <div class="user-content">
                    <h3>{users.name}</h3> 
                    <ul>
                        <li>Email: {users.email}</li>
                    </ul>
                    <ul>
                        <li>Telefone: {users.phone}</li>
                    </ul>
                    <ul>
                        <li>Endereço: {users.address}</li>
                    </ul>
                    <button className="btn-stock new-product-button" onClick={this.handleEditClick} style={{marginLeft: "1%"}}>
                      Editar Cadastro
                    </button>
                </div>
            </a>
              {this.state.isEditOn && <EditUserView item={users}/>}
         </div>
         
      </div>
      
    )
  }
}

export default ClientDetailsApp;
