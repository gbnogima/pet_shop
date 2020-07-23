import React from 'react';

class EditUserView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.item["name"],
            email: this.props.item["email"],
            phone: this.props.item["phone"],
            address: this.props.item["address"],
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    validate() {  
        this.setState({
            error: this.state.name.length === 0 || 
                this.state.email.length === 0 || 
                this.state.phone.length === 0 ||
                this.state.address.length === 0
        });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    
    async handleUpdate(event) {
        event.preventDefault();
        await this.validate();
        if(!this.state.error){
            const requestData = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    address: this.state.address})
            }

            try {
                console.log(this.props);
                const response = await fetch("http://localhost:3001/users/" + this.props.item["_id"], requestData)
                if(response.status === 200) alert("Cadastro atualizado com sucesso!");
                else alert("Erro ao atualizar dados cadastrais");
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    render() {
        return (
            <tr>
                <td colSpan="5">
                    <p style={{marginLeft: "1%", color: "#239888"}}>Editar Cadastro</p>
                    <form onSubmit={this.handleUpdate} style={{width: "98%", marginLeft: "1%"}}>
                        {this.state.error ? <span className="error-span">Todos os campos devem ser preenchidos.</span> : ""}
                        <input class="input-text" id="name" name="name" placeholder="Nome" onChange={this.handleChange}/>
                        <input class="input-text" id="email" name="email" placeholder="E-mail" onChange={this.handleChange}/> 
                        <input class="input-text" id="phone" name="phone" placeholder="Telefone" onChange={this.handleChange}/> 
                        <input class="input-text" id="address" name="address" placeholder="Endereço" onChange={this.handleChange}/> 
                        <br/>
                        <button className="btn-stock save-button" type="submit">Salvar alterações</button>
                    </form>
                </td>
            </tr>
        )
    }
}

export default EditUserView;
