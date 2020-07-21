import React from 'react';
import { Fab, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ImageUploader from 'react-images-upload';
import toBase64 from '../utils';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const UserCard = ({name, email, phone, img, address}) => {
  return (
    <div class="animal-container">
      <a>
        <div class="animal-img">
          <img src={"data:image/jpeg;base64,"+img}/>
        </div>
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
    <UserCard name={user.name} email={user.email} phone={user.phone} img={user.img} address={user.address}/>
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
      address: '',
      img: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state.img);
  }

  async onDrop(picture) {
    const base64 = await toBase64(picture[0]);
    this.setState({
        img: base64
    });
  }

}

class AdminDetailsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      creating: false
    };

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

  render() {
    const {users} = this.state;
    if (this.state.creating) {
      return <ClientNewUserView userId={this.props.user.id} handleSuccessfulCreation={this.onSuccessfulCreation}/>
    }

    return (
      <div style={{display: "flex", height: "100%", flexDirection: "column", justifyContent: "space-between"}}>
        <div class="user-container">
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
                </div>
            </a>
         </div>
      </div>
    )
  }
}

export default AdminDetailsApp;
