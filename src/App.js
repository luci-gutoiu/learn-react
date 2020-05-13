import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {Search} from "./components/search/search.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users.data}))

    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.first_name.toLowerCase().includes(searchField.toLowerCase()) || monster.last_name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <h1>MOnsTerS</h1>
                <Search placeholder='search monsters' handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
