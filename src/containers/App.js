import React, { Component, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';

class App extends Component {
    constructor() {
        super () 
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        this.setState({robots: users})
    })
}

    //const [onChangeText, setOnChangeText] = useState(robots)
   // const [onChangeSearch, setOnChangeSearch] = useState(searchfield)


   onSearchChange = (event) => {
       this.setState({ searchfield: event.target.value })

}

    render () {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='containerAllCenter'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filterRobots}/> 
                </Scroll>
                </div>
         
            );
        }
    
   
}}
export default App;