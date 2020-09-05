import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Name1"},
            {name: "Joao"},
            {name: "Jose"}
        ]
    }

    switchNameHandler = (newName) => {
        console.log("clicked")
        this.setState({
            persons:[{name: "Max"}, {name: newName}, {name: "Bill"}]
        })
    }

    nameChangeHandler = (e) => {
        console.log("clicked")
        this.setState({
            persons:[{name: "Max"}, {name: e.target.value}, {name: "Bill"}]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hello world!</h1>
                <p>This is working</p>
                <button onClick={this.switchNameHandler.bind(this, 'BOUND')}>Changen name</button>
                <Person click={this.switchNameHandler.bind(this, 'BINDING')} personName={this.state.persons[0].name}> person info </Person>
                <Person change={this.nameChangeHandler} personName={this.state.persons[1].name}> another info </Person>
                <Person click={this.switchNameHandler} personName={this.state.persons[2].name}/>
            </div>
        );
    }
}

export default App;
