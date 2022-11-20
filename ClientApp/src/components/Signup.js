import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
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
            username: this.state.username,
            password: this.state.password
        }


        //let token = SessionManager.getToken();
        let payload = {
            method: 'POST',
            headers: {
                "access-control-allow-origin": "*",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(customerObj)

        }
        fetch('https://localhost:7007/api/v1/authenticate/register', payload)
            .then((response) =>
                response.json()
            ).then((result) => {
                console.log(result)
                let responseJson = result;
                if (responseJson) {
                    window.location.href = "/login";
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
                        <h3 className="text-center">Create account</h3>
                        <div className="form-group">
                            <label className="control-label">Email: </label>
                            <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.onChange}></input>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Username: </label>
                            <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.onChange}></input>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Password:  </label>
                            <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.onChange}></input>
                        </div>

                        <div className="form-group text-center mt-5">
                            <input type="submit" value="Register" className="btn waves-effect waves-light"></input>
                        </div>

                    </form>

                </div>
            </div>
        )
    }

}

