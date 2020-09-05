import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: "Name1", age: 20},
            {name: "Joao", age: 40},
            {name: "Jose", age: 30}
        ],
        showPersons: false
    }

    switchNameHandler = (newName) => {
        console.log("clicked")
        this.setState({
            persons: [{name: "Max"}, {name: newName}, {name: "Bill"}]
        })
    }

    nameChangeHandler = (e) => {
        console.log("clicked")
        this.setState({
            persons: [{name: "Max"}, {name: e.target.value}, {name: "Bill"}]
        })
    }

    togglePersonsHandler = () => {
        const show = this.state.showPersons;
        this.setState({showPersons: !show});
    }

    render() {
        return (
            <div className="App">
                <h1>Hello world!</h1>
                <p>This is working</p>
                <button onClick={this.togglePersonsHandler}>Change</button>
                {this.state.showPersons ?
                <div>
                    <Person click={this.switchNameHandler.bind(this, 'BINDING')} personName={this.state.persons[0].name}
                            age={this.state.persons[0].age}> Some info here </Person>
                    <Person change={this.nameChangeHandler} personName={this.state.persons[1].name}
                            age={this.state.persons[1].age}> Another info </Person>
                    <Person click={this.switchNameHandler} personName={this.state.persons[2].name}
                            age={this.state.persons[2].age}/>
                </div> : null}
            </div>
        );
    }
}

export default App;
