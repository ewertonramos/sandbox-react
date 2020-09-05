import React from 'react';

const validationComponent = (props) => {
    let lengthValidation;
    if (props.inputLength < props.min) {
        lengthValidation = 'Text too short';
    } else {
        lengthValidation = 'All good!'
    }

    return (
        <div>
            <p>{lengthValidation}</p>
        </div>
    );
};

export default validationComponent;