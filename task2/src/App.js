import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent'

class App extends Component {
    state = {
        inputText: ''
    };

    inputChangeHandler = (e) => {
        let newText = e.target.value;
        let newLength = newText.length;
        this.setState({inputLength: newLength, inputText: newText})
    };

    removeCharHandler = (e, i) => {
        // let clickedChar = e.target.innerText;
        // let charArray = this.state.inputText.split('');
        // let filtered = charArray.filter(c => {return c!==clickedChar});
        let filtered = this.state.inputText.split('');
        filtered.splice(i, 1);
        let newText = filtered.join('');
        this.setState({inputText: newText})
    };



    render() {
        let chars = this.state.inputText.split('').map((c, i) => {
            return <CharComponent
                click={(e) => this.removeCharHandler(e, i)}
                key={i}
                theChar={c}/>
        });

        return (
            <div className="App">
                <p>Task 2</p>
                <input type="text" onChange={(e) => this.inputChangeHandler(e)} value={this.state.inputText}/>
                <p>The length is: {this.state.inputText.length}</p>
                <ValidationComponent min='5' inputLength={this.state.inputText.length}/>
                {chars}
            </div>
        );
    }
}

export default App;
