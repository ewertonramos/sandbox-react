import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
    state = {
        users: [{username: "BUG"}, {username: "John"}],
        username: "Ewerton"
    }

    userChangeHandler = (e) => {
        this.setState({username: e.target.value});
    }

    render() {
        return (
            <div className="App">
                <UserInput change={this.userChangeHandler} username={this.state.username}></UserInput>
                <UserOutput username={this.state.username}></UserOutput>
                <UserOutput username={this.state.users[1].username}></UserOutput>
            </div>
        );
    }
}

export default App;
