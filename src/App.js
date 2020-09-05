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
        showPersons: true
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
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((p) => {
                        return <Person personName={p.name} age={p.age}/>
                        })
                    }
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Hello world!</h1>
                <p>This is working</p>
                <button onClick={this.togglePersonsHandler}>Change</button>
                {persons}
            </div>
        );
    }
}

export default App;
