// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { FormControl, InputLabel, NativeSelect, Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const SchedulingItem = ({scheduling}) => {
  const date = new Date(scheduling.date)
  return (
    <tbody>
      <tr key = {scheduling._id}>
        <td>{scheduling.pet.name}</td>
        <td>{scheduling.service.name}</td>
        <td>{date.toLocaleString()}</td>
      </tr>
    </tbody>
  )
}

const SchedulingsGrid = (props) => {
  const schedulingsList = props.schedulings.map((sched) => <SchedulingItem scheduling={sched}/>);
  return (
    <table id="stock">
      <thead>
        <tr>
          <th>Pet</th>
          <th>Serviço</th>
          <th>Data</th>
        </tr>
      </thead>
      {schedulingsList}
    </table>
  )
}

class ClientListSchedulingsView extends React.Component {

  render() {
    const { schedulings } = this.props;
    if (schedulings.length === 0) {
      return <p>Você não possui agendamentos</p>
    }
    return (
      <Container>
        <h1>Meus agendamentos</h1>
        <SchedulingsGrid schedulings={schedulings} /> 
      </Container>
    )
  }
}

class ClientCreateSchedulingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petsList: [],
      servicesList: [],
      slotsList: [],
      pet: undefined,
      service: undefined,
      date: new Date(),
      slot: undefined,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.updateAvailableSlots = this.updateAvailableSlots.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  async componentDidMount() {
    let response = await fetch("http://localhost:3001/services");
    const services = await response.json();
    response = await fetch(`http://localhost:3001/pets/customer-id/${this.props.user.id}`);
    const pets = await response.json();
    this.setState({petsList: pets, servicesList: services});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const body = {
      petId: this.state.pet,
      serviceId: this.state.service,
      date: this.state.date,
      customerId: this.props.user.id,
    }
    try {
      await fetch("http://localhost:3001/scheduling/", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
    } catch (error) {
      alert("Houve um erro ao cadastrar o agendamento");
      console.log(error);
    }

    alert("Agendamento realizado com sucesso");
    this.props.onSuccess(); 
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSlotChange(event) {
    const slot = event.target.value;
    const date = new Date(this.state.date);
    date.setHours(slot);
    date.setMinutes(0);
    date.setSeconds(0);
    this.setState({ slot: slot, date: date.toString() })
  }

  handleServiceChange(event) {
    this.setState({service: event.target.value}, () => this.updateAvailableSlots());
  }

  handleDateChange(date) {
    this.setState({date: date}, () => this.updateAvailableSlots()); 
  }

  async updateAvailableSlots() {
    let response = await fetch(`http://localhost:3001/scheduling/service/${this.state.service}?date=${this.state.date.toISOString()}`);
    response = await response.json();
    this.setState({slotsList: response});
  };

  render() {
    return (
      <div class="login-container">
        <Container maxWidth="sm">
          <h1>Novo agendamento</h1>
            <form onSubmit={this.handleSubmit}> 
              <FormControl className="input-text">
                <InputLabel htmlFor="age-native-helper">Pet</InputLabel>
                <NativeSelect
                  value={this.state.pet}
                  onChange={this.handleChange}
                  name="pet"
                >
                  <option aria-label="None" value="" />
                  {this.state.petsList.map((pet) => <option value={pet._id}>{pet.name}</option>)}
                </NativeSelect> 
              </FormControl>

              <FormControl className="input-text">
                <InputLabel htmlFor="age-native-helper">Serviço</InputLabel>
                <NativeSelect
                  value={this.state.service}
                  onChange={this.handleServiceChange}
                  name="service"
                >
                  <option aria-label="None" value="" />
                  {this.state.servicesList.map((service) => <option value={service._id}>{service.name}</option>)}
                </NativeSelect> 
              </FormControl>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  className="input-text"
                  margin="normal"
                  value={this.state.date}
                  onChange={this.handleDateChange}
                  id="date-picker-dialog"
                  label="Data"
                  format="MM/dd/yyyy"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
              <FormControl className="input-text">
                <InputLabel htmlFor="age-native-helper">Horários disponíveis</InputLabel>
                <NativeSelect
                  value={this.state.slot}
                  onChange={this.handleSlotChange}
                  name="slot"
                >
                  <option aria-label="None" value="" />
                  {this.state.slotsList.map((slot) => <option value={slot}>{`${slot}h00`}</option>)}
                </NativeSelect> 
              </FormControl>
              <br/>
              <button className="btn-stock save-button" type="submit">Adicionar Serviço</button>
            </form>
        </Container>
      </div>
    )
  }
}

class ClientSchedulingsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedulings: [],
      creating: false
    }

    this.handleFabClick = this.handleFabClick.bind(this);
    this.disableCreating = this.disableCreating.bind(this);
    this.updateSchedulings = this.updateSchedulings.bind(this);
  }

  componentDidMount() {
    this.updateSchedulings();
  }

  handleFabClick() {
    this.setState({ creating: true });
  }

  disableCreating() {
    this.setState({ creating: false });
    this.updateSchedulings();
  }

  async updateSchedulings() {
    const response = await fetch(`http://localhost:3001/scheduling/customer-id/${this.props.user.id}`);
    const schedulings = await response.json();
    this.setState({schedulings: schedulings});
  }

  render() {
    const { schedulings } = this.state;
    if (this.state.creating) {
      return <ClientCreateSchedulingView onSuccess={this.disableCreating} schedulings={schedulings} user={this.props.user}/>
    }

    return (
      <div style={{display: "flex", height: "100%", flexDirection: "column", justifyContent: "space-between"}}>
        {schedulings.length > 0
          ? <ClientListSchedulingsView schedulings={schedulings} user={this.props.user}/>
          : <p>Você não possui nenhum agendamento!</p>
        }
        <Fab onClick={this.handleFabClick} className="floating-button" size="large" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    )
  }
}

export default ClientSchedulingsApp;
