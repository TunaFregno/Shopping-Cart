import React from 'react';
import './style.css'
import { connect } from 'react-redux';
//import { BrowserRouter, Link } from "react-router-dom";


class Login extends React.Component {

    state = { 
        email: '',
        password: '',
    }

    emailHandler = (event) => {
      console.log('in the email handler');
        this.setState({
            email: event.target.value,
        })
    }

    passwordHandler = (event) => {
        console.log('in the password handler');
        this.setState({
            password: event.target.value,
        })
    }

    submitHandler = () => {
        console.log('in the submitHandler');
        const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/';
        const body = {
            email: this.state.email,
            password: this.state.password
        }

        const config = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(body),
        };

        fetch(url, config)
        .then((res) => res.json())
        .then((data) => {
            const action = {
                type: 'auth/login',
                payload: data
            }

            this.props.dispatch(action)

            this.setState({
                email: '',
                password: '',
            });
            console.log(data.access)
            console.log('blablabla')
        })  
        
    }



    render() {
        console.log('holacomo estaaas')
        return (
            
            <div className="buttonBox" >
                <h1>Are you ready ?</h1>
                <br></br>
                <br></br>
                <input type='text' value={this.state.email} onChange={this.emailHandler} placeholder='Log in...' className="logInBox"></input>
                <br></br>
                <input type='password' value={this.state.password} onChange={this.passwordHandler} placeholder='Password' className="passwordBox"></input>
                <br></br>
                
                <button className="startButton" onClick={this.submitHandler}>Let's Shop!</button>
                
            </div>
            
        );
    }
}

export default connect()(Login);
