import React from 'react';
import axios from 'axios';

class LogIn extends React.Component{
    state = {
        username: '',
        password: ''
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='username'>
                            Username
                        </label>
                        <input
                            type='text'
                            onChange={this.handleChange}
                            name='username'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>
                            Password
                        </label>
                        <input
                            type='password'
                            onChange={this.handleChange}
                            name='password'
                        />
                    </div>
                    <button type='submit'>
                        Log in
                    </button>
                </form>
            </div>
        )
    }

    handleSubmit = event => {
        event.preventDefault();
        const endpoint = 'http://localhost:8000/api/login';
        axios
            .post(endpoint, this.state)
            .then(response => {
                localStorage.setItem(
                    'jwttoken',
                    response.data.token
                );
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    handleChange = event => {
        this.setState({[event.target.name]:event.target.value});
    }
}

export default LogIn;