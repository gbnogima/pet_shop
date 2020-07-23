// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';


class EditProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.item["name"],
            description: this.props.item["description"],
            price: this.props.item["price"],
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    validate() {  
        this.setState({
            error: this.state.name.length === 0 || 
                this.state.description.length === 0 || 
                this.state.price.length === 0 
        });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleDelete(event){
        event.preventDefault();
        if(!this.state.error){
            const requestData = {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: this.props.item["_id"]})
            }

            try {
                console.log(this.props);
                const response = await fetch("http://localhost:3001/services/", requestData)
                if(response.status === 200) alert("Serviço removido com sucesso!");
                else alert("Erro ao remover serviço");
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

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
                    description: this.state.description,
                    price: this.state.price})
            }

            try {
                console.log(this.props);
                const response = await fetch("http://localhost:3001/services/" + this.props.item["_id"], requestData)
                if(response.status === 200) alert("Serviço atualizado com sucesso!");
                else alert("Erro ao cadastrar serviço");
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
                    <p>Editar Serviço</p>
                    <form onSubmit={this.handleUpdate}> 
                        {this.state.error ? <span className="error-span">Todos os campos devem ser preenchidos.</span> : ""}
                        <input 
                            className="input-text"
                            name="name" 
                            placeholder="Nome"
                            value={this.state.name} 
                            onChange={this.handleChange}
                        />
                        <input 
                            className="input-text"
                            name="description" 
                            placeholder="Descrição" 
                            value={this.state.description} 
                            onChange={this.handleChange}
                        />
                        <input 
                            className="input-text w30" 
                            name="price" 
                            placeholder="Preço" 
                            type="number" 
                            min="0" 
                            value={this.state.price} 
                            onChange={this.handleChange}
                        />
                        <br/>
                        <button className="btn-stock save-button" type="submit">Salvar alterações</button>
                        
                    </form>
                    <button className="btn-stock remove-button" onClick={this.handleDelete}>Remover serviço</button>
                </td>
            </tr>
        )
    }
}

export default EditProductView;
