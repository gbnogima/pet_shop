// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import {Grid } from '@material-ui/core';

const ProductCard = ({name, img, price, description, id}) => {

    const handleClick = async () => {
        const userToken = localStorage.getItem('token');
        const requestData = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: userToken,
                items: {
                    quantity: 1,
                    product: id
                }
                
            })}
        try {
            let result = await fetch("http://localhost:3001/orders/", requestData);
            console.log(result);
            
        } catch (e) {
            alert("Error: " + e);
        }
    }

    return (
      <div class="animal-container">
        <a>
          <div class="animal-img">
            <img src={"data:image/jpeg;base64,"+img}/>
          </div>
          <div class="animal-content">
            <h3>{name}</h3> 
            <ul>
                <li>Preço: R$ {price}</li>
                <li>Descrição: {description}</li>
            </ul>
          </div>
        </a>
        <div id="btnwrap">
            <button className="edit-button" ><i className="fa fa-cart-plus" onClick={handleClick}></i></button>
        </div>
      </div>
    );
}
  
const ProductGrid = ({products}) => {
    console.log(products);
    const productsList = products.map((product) => 
        <ProductCard name={product.name} img={product.img} price={product.price} description={product.description} id={product._id}/>
    );

    return (
        <div style={{padding: "60px"}} >
        <Grid container spacing={10} direction="row">
            {productsList}
        </Grid>
        </div>
    )
}

class BuyProductView extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
            products: [],
            creating: false,
            search: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }


    async getProductList() {
        const requestData = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({search: this.state.search})
        }
        try {
            let result = await fetch("http://localhost:3001/products/name", requestData);
            result = await result.json();
            this.setState({products: result});
        } catch (e) {
            alert("Error: " + e);
        }
    }

    componentDidMount() {
        this.getProductList();
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSearch() {
        this.getProductList();
    }

    render() {
        const {products} = this.state;
        return (
            <div className='stock-container'>
                <input className="input-text w80" name="search" placeholder="Pesquisar item" onChange={this.handleChange}/>
                <button className="btn-stock" type="submit" onClick={this.handleSearch}>Buscar</button>
                <div style={{display: "flex", height: "100%", flexDirection: "column", justifyContent: "space-between"}}>
                    {products.length > 0
                        ? <ProductGrid products={this.state.products} />
                        : <p>Nenhum produto encontrado.</p>
                    }
                </div>
            </div>
        )
    }
}

export default BuyProductView;
