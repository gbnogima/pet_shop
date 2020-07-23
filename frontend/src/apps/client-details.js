// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { Fab, Grid } from '@material-ui/core';
import { EditUserView } from '../views';
import AddIcon from '@material-ui/icons/Add';
import ImageUploader from 'react-images-upload';
import toBase64 from '../utils';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const UserCard = ({name, email, phone, address}) => {
  return (
    <div class="animal-container">
      <a>
        <div class="animal-content">
          <h3>{name}</h3> 
          <ul>
              <li>Email: {email}</li>
              <li>Telefone: {phone}</li>
              <li>Endereço: {address}</li>
          </ul>
        </div>
      </a>
    </div>
  );
}

const UserGrid = ({users}) => {
  console.log(users);
  const usersList = users.map((user) => 
    <UserCard name={user.name} email={user.email} phone={user.phone} address={user.address}/>
  );

  return (
    <div style={{padding: "60px"}} >
      <Grid container spacing={10} direction="row">
        {usersList}
      </Grid>
    </div>
  )
}

class ClientNewUserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  };

}

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
    this.onSuccessfulCreation = this.onSuccessfulCreation.bind(this);
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
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Não foi possível carregar o usuário");
    }
  }

  componentDidMount() {
    this.refreshUsers();
  }

  onSuccessfulCreation() {
    this.setState({ creating: false });
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
    if (this.state.creating) {
      return <ClientNewUserView userId={this.props.user.id} handleSuccessfulCreation={this.onSuccessfulCreation}/>
    }

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
                    <button className="btn-stock new-product-button" onClick={this.handleEditClick} style={{marginLeft: "75%"}}>
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
