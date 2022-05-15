import React, { Component } from 'react';
import logo from '../../logo_donathor.png';
import '../../App.css';

class UserInfos extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

export default UserInfos;