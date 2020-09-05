import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.personName}! numer = {Math.ceil(Math.random() * 20)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.personName}/>
        </div>
    )
};

export default person;