import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Greeting extends Component {
    constructor(props) {
        super(props);
        // this.state = 'Guest';
        this.GuestGreeting = this.GuestGreeting.bind(this);
        this.UserGreeting = this.UserGreeting.bind(this);
    }

    UserGreeting() {
        return <h1>Welcome back!</h1>;
    }

    GuestGreeting() {
        return <h1>Welcome, new user.</h1>;
    }

    render() {
        if (this.props.isLoggedIn === 'true') {
            return <this.UserGreeting />;
        }
        return <this.GuestGreeting />;
    }
}


export default Greeting;