// Alunos:
//     Alysson Rogerio Oliveira (9771355)
//     Guilherme Brunassi Nogima (9771629)
//     Leonardo Akel Daher (9771682)

import React from 'react';
import { EditServiceView } from '../views';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCreateOn: false };
        this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
        this.setState(state => ({
            isCreateOn: !state.isCreateOn
        }));
    }

    render() {
        return (
            <tbody>
                <tr key = {this.props.item["_id"]}>
                    <td>{this.props.item["name"]}</td>
                    <td>{this.props.item["price"]}</td>
                    <td>
                        <div id="btnwrap">
                            <button className="edit-button"><i class="fa fa-edit" onClick={this.handleClick}></i></button>
                        </div>
                    </td>
                </tr>
                {this.state.isCreateOn && <EditServiceView item={this.props.item}/>}
            </tbody>
        );
    }
}

class ListProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            search: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    async getServiceList() {
        const requestData = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({search: this.state.search})
        }
        try {
            let result = await fetch("http://localhost:3001/services/name", requestData);
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
        this.getServiceList();
    }

    componentWillReceiveProps(props) {
        const { serviceRefresh } = this.props;
        if (props.serviceRefresh !== serviceRefresh) {
            this.getServiceList();
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSearch() {
        this.getServiceList();
    }
    
    render() {
        return (
            <div>
                <section className="page-section bg-white">
                    <input className="input-text w80" name="search" placeholder="Pesquisar item" onChange={this.handleChange}/>
                    <button className="btn-stock" type="submit" onClick={this.handleSearch}>Buscar</button>
                    <table id="stock">
                        <thead>
                            <tr>
                                <th>Serviço</th>
                                <th>Preço</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        {this.state.rows}
                      </table>
                </section>
            </div>
        )
    }
}

export default ListProductView;
