import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';
import axios from 'axios';

const App =() =>{
    return (<div className="create_account_screen">
        <div className="create_account_form">
            <h3>Create account</h3>
            <p>Example of form validation built with React.</p>
            <TextInput labelName="Name" type="text" />
            <TextInput labelName="Email" type="email" />
            <TextInput labelName="DOB" type="text" />
            <TextInput labelName="Password" type="password" />
        </div>
    </div>);
};
ReactDOM.render(<App/>,document.querySelector('#root'))