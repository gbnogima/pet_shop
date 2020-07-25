// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { Fab, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ImageUploader from 'react-images-upload';
import toBase64 from '../utils';

const PetCard = ({name, race, age, img, breed, weight}) => {
  return (
    <div class="animal-container">
      <a>
        <div class="animal-img">
          <img src={"data:image/jpeg;base64,"+img}/>
        </div>
        <div class="animal-content">
          <h3>{name}</h3> 
          <ul>
              <li>Raça: {race}</li>
              <li>Idade: {age}</li>
              <li>Peso: {weight}</li>
              <li>Espécie: {breed}</li>
          </ul>
        </div>
      </a>
    </div>
  );
}

const PetGrid = ({pets}) => {
  const petsList = pets.map((pet) => 
    <PetCard name={pet.name} race={pet.race} age={pet.age} img={pet.img} breed={pet.breed} weight={pet.weight}/>
  );

  return (
    <div style={{padding: "60px"}} >
      <Grid container spacing={10} direction="row">
        {petsList}
      </Grid>
    </div>
  )
}

class ClientNewPetView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      breed: 'Cachorro',
      race: '',
      age: '',
      weight: '',
      img: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async onDrop(picture) {
    const base64 = await toBase64(picture[0]);
    this.setState({
        img: base64
    });
  }

  async handleSubmit(event) {
    event.preventDefault(); 
    const body = {
      customerId: this.props.userId,
      name: this.state.name,
      race: this.state.race,
      age: this.state.age,
      img: this.state.img,
      breed: this.state.breed,
      weight: this.state.weight,
    }
    try {
      let response = await fetch("http://localhost:3001/pets", {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        this.props.handleSuccessfulCreation(); 
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao criar o pet");
    }

  }

  render() {
    return (
      <div class="login-container">
        <form onSubmit={this.handleSubmit}>
          <h2 class="login-title">Cadastrar pet</h2>
          <div class="form-group">
            <input onChange={this.handleChange} class="input-text" name="name" id="name"  placeholder="Nome do Pet"/>
            <ImageUploader
                withLabel={false}
                buttonText='Escolher imagem'
                onChange={this.onDrop}
                singleImage={true}
                withIcon={false}
                fileContainerStyle={{margin: 0, padding: 0, background: "none", boxShadow: "none" }}
            />
          </div>
          <div class="form-group">
            <select name="breed" onChange={this.handleChange} value={this.state.breed} class="form-select">
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
            </select>
            <input class="input-text" name="race" id="breed" onChange={this.handleChange} placeholder="Raça"/>
          </div>
          <div class="form-group">
              <input class="input-text" name="age" id="age" onChange={this.handleChange} placeholder="Idade"/>
              <input class="input-text" name="weight" id="weight" onChange={this.handleChange} placeholder="Peso"/>
          </div>
          <input type="submit" class="btn-submit" value="Cadastrar"/>
        </form>
      </div>

    )
  }
}

class ClientPetsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      creating: false
    };

    this.handleFabClick = this.handleFabClick.bind(this);
    this.onSuccessfulCreation = this.onSuccessfulCreation.bind(this);
    this.refreshPets = this.refreshPets.bind(this);
  }

  handleFabClick() {
    this.setState({ creating: true });
  }

  async refreshPets() {
    try {
      let response = await fetch(`http://localhost:3001/pets/customer-id/${this.props.user.id}`)
      response = await response.json()
      this.setState({pets: response});
    } catch (error) {
      console.log(error);
      alert("Não foi possível carregar os pets");
    }
  }

  componentDidMount() {
    this.refreshPets();
  }

  onSuccessfulCreation() {
    this.setState({ creating: false });
    this.refreshPets();
  }

  render() {
    const {pets} = this.state;
    if (this.state.creating) {
      return <ClientNewPetView userId={this.props.user.id} handleSuccessfulCreation={this.onSuccessfulCreation}/>
    }

    return (
      <div style={{display: "flex", height: "100%", flexDirection: "column", justifyContent: "space-between"}}>
        {pets.length > 0
          ? <PetGrid pets={this.state.pets} />
          : <p>Você não possui nenhum pet cadastrado ainda!</p>
        }
        <Fab onClick={this.handleFabClick} className="floating-button" size="large" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    )
  }
}

export default ClientPetsApp;
