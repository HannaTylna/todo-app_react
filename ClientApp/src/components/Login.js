import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit(e) {
        e.preventDefault();

        let customerObj = {
            email: this.state.email,
            password: this.state.password
        }

        let payload = {
            method: 'POST',
            headers: {
                //"access-control-allow-origin": "*",
                'accept': 'text/plain',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerObj)

        }
        fetch('https://localhost:7007/api/v1/authenticate/login', payload)
            .then((response) => response.json())
            .then((result) => {
                //setUserSession(email, token) {
                //    sessionStorage.setItem('email', email);
                //    sessionStorage.setItem('token', token);
                //};
                //let responseJson = result;
                console.log(result)
                let responseJson = result;
                let token = result.accessToken;
                localStorage.setItem('todo_dotnet', token);
                if (responseJson) {
                    window.location.href = "/home";
                }
            }).catch(function (error) {
                console.log(error);
            });

        //getToken() {
        //    const token = sessionStorage.getItem('token');
        //    if (token) return token;
        //    else return null;
        //},

        //setUserSession(userName, token, userId, usersRole) {
        //    sessionStorage.setItem('userName', userName);
        //    sessionStorage.setItem('token', token);
        //    sessionStorage.setItem('userId', userId);
        //    sessionStorage.setItem('usersRole', usersRole);
        //}
        //postData('api/Customer/Create', customerObj).then((result) => {
        //    let responseJson = result;
        //    if (responseJson) {
        //        history.push('/login');
        //    }
        //});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={this.onSubmit} className="p-5 border-style">
                        <h3 className="text-center">Login</h3>
                        <div className="form-group">
                            <label className="control-label">Email: </label>
                            <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.onChange}></input>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Password:  </label>
                            <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.onChange}></input>
                        </div>

                        <div className="form-group text-center mt-5">
                            <input type="submit" value="Login" className="btn waves-effect waves-light"></input>
                        </div>

                    </form>

                </div>
            </div>
        )
    }

}

