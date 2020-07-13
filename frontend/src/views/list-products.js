import React from 'react';


class ListProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            search: ""
        }
    }

    async componentDidMount() {     
        try {
            let result = await fetch("http://localhost:3001/products");
            result = await result.json();
            console.log(result);
            console.log(Object.keys(result));
            for(let i in result){
                console.log(result[i]);
                this.setState({ 
                    rows: this.state.rows.concat(
                        <tr key = {i}>
                            <td>{result[i]["name"]}</td>
                            <td>{result[i]["price"]}</td>
                            <td>{result[i]["amount"]}</td>
                            <td>
                                <div id="btnwrap">
                                    <a className="edit-button"><i class="fa fa-edit"></i></a>
                                </div>
                            </td>
                        </tr> 
                    )
                })
            }
            
            
        } catch (e) {
            alert("Error: " + e);
        }
    }

    async handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    

    render() {
        
        return (
            <div>
                <section className="page-section bg-white">
                    <input className="input-text" name="search" placeholder="Pesquisar item" onChange={this.handleChange}/>
                        
                    <table id="stock">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.rows}
                        </tbody>
                        
                      </table>
                    
                </section>
            </div>
        )
    }
}

export default ListProductView;
