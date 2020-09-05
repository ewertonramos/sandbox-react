import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent'

class App extends Component {
    state = {
        inputText: '',
        inputLength: 0
    };

    inputChangeHandler = (e) => {
        let newText = e.target.value;
        let newLength = newText.length;
        this.setState({inputLength: newLength, inputText: newText})
    };

    removeCharHandler = (e) => {
        let clickedChar = e.target.innerText;
        let charArray = this.state.inputText.split('');
        let filtered = charArray.filter(c => {return c!==clickedChar});
        let newText = filtered.join('');
        this.setState({inputText: newText, inputLength: newText.length})
    };



    render() {
        let chars = this.state.inputText.split('').map((c, i) => {
            return <CharComponent
                click={(e) => this.removeCharHandler(e)}
                key={i}
                theChar={c}/>
        });

        return (
            <div className="App">
                <p>Task 2</p>
                <input type="text" onChange={(e) => this.inputChangeHandler(e)} value={this.state.inputText}/>
                <p>The length is: {this.state.inputLength}</p>
                <ValidationComponent min='5' inputLength={this.state.inputLength}/>
                {chars}
            </div>
        );
    }
}

export default App;
