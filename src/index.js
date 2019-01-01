import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';
import axios from 'axios';

const RegisterationComponent = {
    width: "300px",
    margin: "30px auto",
    backgroundColor: "#44014C",
    minHeight: "200px",
    boxSizing: "border-box"
}

const Header = {
    padding: "10px 20px",
    textAlign: "center",
    color: "blue",
    fontSize: "22px"
}

const ErrorMessage = {
    color: "white",
    fontSize: "13px"
}

const Button = {
    backgroundColor: "#4CAF50", /* Green */
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    display: "inline-block",
    fontSize: "32px"
}
class RegisterationApp extends React.Component {

    handleClick(){
        console.log('Submitting the request');
        const response = axios.get('https://reqres.in/api/users', {
            params: {
                query: '2'
            }
        });
        console.log(response);
    }

    render() {
        return (<div sytle={RegisterationComponent} className="create_account_screen">
            <div className="create_account_form">
                <h3 style={Header}>Create account</h3>
                <p>Example of form validation built with React.</p>
                <TextInput labelName="Name" type="text" />
                <TextInput labelName="Email" type="email" />
                <TextInput labelName="DOB" type="text" />
                <TextInput labelName="Password" type="password" />
                <button name="Submit" sytle={Button} onClick={this.handleClick}>Register</button>
            </div>
        </div>);
    }
};
ReactDOM.render(<RegisterationApp />, document.querySelector('#root'))