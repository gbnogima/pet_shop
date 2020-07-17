import React from 'react';

class CreateServiceView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    async handleSubmit(event) {
        event.preventDefault();
        await this.validate();
        if(!this.state.error){
            const requestData = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    description: this.state.description,
                    price: this.state.price,
                })
            };

            try {
                const response = await fetch("http://localhost:3001/services", requestData)
                if(response.status === 201) alert("Serviço cadastrado com sucesso!");
                else alert("Erro ao cadastrar serviço");
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    render() {
        return (
            <div>
                <section className="page-section bg-white">
                    <form onSubmit={this.handleSubmit}> 
                        {this.state.error ? <span className="error-span">Todos os campos devem ser preenchidos.</span> : ""}
                        <input 
                            className="input-text"
                            name="name" 
                            placeholder="Nome" 
                            onChange={this.handleChange}
                        />
                        <input 
                            className="input-text"
                            name="description" 
                            placeholder="Descrição" 
                            onChange={this.handleChange}
                        />
                        <input 
                            className="input-text w30" 
                            name="price" 
                            placeholder="Preço" 
                            type="number" 
                            min="0" 
                            onChange={this.handleChange}
                        />
                        <br/>
                        <button className="btn-stock save-button" type="submit">Adicionar Serviço</button>
                    </form>
                </section>
            </div>
        )
    }
}

export default CreateServiceView;
