import React from 'react';
const TextInput = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.labelName} className="form-label">{props.labelName}</label>
            <input
                className="form-input"
                id={props.labelName}
                name={props.labelName}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    );
};
export default TextInput;