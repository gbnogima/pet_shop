import React from 'react';



class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCreateOn: false };
        this.handleClick = this.handleClick.bind(this);
    } 
    
    async handleClick() {
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
                    product: this.props.item["_id"]
                }
                
            })}
        try {
            let result = await fetch("http://localhost:3001/orders/", requestData);
            console.log(result);
            
        } catch (e) {
            alert("Error: " + e);
        }
    }
        
    

    render() {
        return (
            <tbody>
                <tr key = {this.props.item["_id"]}>
                    <td>{this.props.item["name"]}</td>
                    <td>{this.props.item["price"]}</td>
                    <td>{this.props.item["description"]}</td>
                    <td>
                        <div id="btnwrap">
                            <button className="edit-button" ><i className="fa fa-cart-plus" onClick={this.handleClick}></i></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        );
    }
}

class BuyProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            search: ""
        }
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
            this.setState({
                rows: []
            })
            for(let i in result){
                this.setState({ 
                    rows: this.state.rows.concat(
                        <ListItem key={i} item={result[i]}/>
                    )
                })
            }
        } catch (e) {
            alert("Error: " + e);
        }
    }

    async componentDidMount() {     
        this.getProductList();
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSearch() {
        this.getProductList();
    }
    
    render() {
        return (
            <div>
                <br/><br/><h3>Produtos</h3>
                    <input className="input-text w80" name="search" placeholder="Pesquisar item" onChange={this.handleChange}/>
                    <button className="btn-stock" type="submit" onClick={this.handleSearch}>Buscar</button>
                    <table id="stock">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Descrição</th>
                                <th>Comprar</th>
                            </tr>
                        </thead>
                        {this.state.rows}
                      </table>
            </div>
        )
    }
}

export default BuyProductView;
