// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';



class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCreateOn: false };
    }

    render() {
        return (
            <tbody>
                <tr key = {this.props.item["_id"]}>
                    <td>{this.props.item["name"]}</td>
                    <td>{this.props.item["price"]}</td>
                    <td>{this.props.item["description"]}</td>
                </tr>
            </tbody>
        );
    }
}

class CartView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            orderId: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async getProductList() {
        const userToken = localStorage.getItem('token');
        const requestData = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': userToken
            }
        }
        try {
            let result = await fetch("http://localhost:3001/orders/customer-id/", requestData);
            result = await result.json();
            if(result!==""){
                this.setState({
                    rows: [],
                    orderId: result[0]._id
                })
    
                for(let i in result[0].items){
                    let product = await fetch("http://localhost:3001/products/id/" + result[0].items[i].product);
                    product = await product.json();
                    this.setState({ 
                        rows: this.state.rows.concat(
                            <ListItem key={i} item={product}/>
                        )
                    })
                }
            }
            
        } catch (e) {
            alert("Error1: " + e);
        }
    }

    async componentDidMount() {     
        this.getProductList();
    }

    componentWillReceiveProps(props) {
        const { cartRefresh } = this.props;
        if (props.cartRefresh !== cartRefresh) {
            this.getProductList();
        }
      }

    async handleClick() {
        const requestData = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: 'done',
                
            })}
        try {
            await fetch("http://localhost:3001/orders/id/" + this.state.orderId, requestData);
            this.setState({
                rows: [],
                orderId: ""
            })
            alert("Produto adquirido.");
            
        } catch (e) {
            alert("Error: " + e);
        }
    }

    
    render() {
        return (
            <div>
                <table id="stock">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    {this.state.rows}
                </table>
                {this.state.orderId && <button className="btn-stock save-button" type="submit" onClick={this.handleClick}>Finalizar Compra</button>}
            </div>
        )
    }
}

export default CartView;
