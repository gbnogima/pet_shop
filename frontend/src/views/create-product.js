// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import ImageUploader from 'react-images-upload';
import toBase64 from '../utils';

class CreateProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            amount: "",
            sold: "",
            img:"",
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    validate() {  
        this.setState({
            error: this.state.name.length === 0 || 
                this.state.description.length === 0 || 
                this.state.price.length === 0 || 
                this.state.amount.length === 0 ||  
                this.state.sold.length === 0    
        });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async onDrop(picture) {
        console.log("picture: " + picture);
        if(picture.length){
            const base64 = await toBase64(picture[0]);
            this.setState({
                img: base64
            });
        }
        
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
                    amount: this.state.amount,
                    sold: this.state.sold,
                    img: this.state.img
                })
            }

            try {
                const response = await fetch("http://localhost:3001/products", requestData)
                if(response.status === 201){
                    this.props.onStockChange();
                    this.props.handleClick();
                    alert("Produto cadastrado com sucesso!");    
                } 
                else alert("Erro ao cadastrar produto");
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
                        <ImageUploader
                            withPreview={true}
                            withLabel={false}
                            buttonText='Escolher imagem'
                            onChange={this.onDrop}
                            singleImage={true}
                            withIcon={false}
                            fileContainerStyle={{margin: 0, padding: 0, background: "none", boxShadow: "none" }}
                        />
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
                        <input 
                            className="input-text w30" 
                            name="amount" 
                            placeholder="Quantidade" 
                            type="number" 
                            min="0"
                            onChange={this.handleChange}
                        />
                        <input 
                            className="input-text w30" 
                            name="sold" 
                            placeholder="Quantidade Vendida" 
                            type="number" 
                            min="0"
                            onChange={this.handleChange}
                        /><br/>
                        
                        <button className="btn-stock save-button" type="submit">Adicionar Produto</button>
                    </form>
                </section>
            </div>
        )
    }
}

export default CreateProductView;
