import React from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Username: null,
            Email: props.email,
            PhoneNumber: null,
            Redirect: false,
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername = e => {
        this.setState({Username: e.target.value})
    }

    onChangePhoneNumber = e => {
        this.setState({PhoneNumber: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();

        const obj = this.state;
        
        axios.post('http://localhost:8080/register', obj).catch(error => {
            console.log(error);
            this.setState({Username: null, PhoneNumber: null})
            this.setState({Redirect: false})
        }).then(() => {
            this.setState({Redirect: true})
        });
    }

    render() {
        return (
            <div>
                {this.state.Redirect && <Navigate to = "/panel" />}
                <form onSubmit={this.onSubmit}>
                    <label>
                        Username:
                    </label> <br />
                    <input type="text" id='uname' name='uname' onChange={this.onChangeUsername} /> <br />
                    <label>
                        Numar de telefon:
                    </label> <br />
                    <input type="text" id='phone' name='phone' onChange={this.onChangePhoneNumber} /> <br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
  };

export default Register;