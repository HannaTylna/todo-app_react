﻿import React, { Component } from 'react';

export class Login extends Component {
    static displayName = Login.name;

    render() {
        return (
            <div className="p-5 border-style" >
                <div className="text-center">
                    <h3 className="text-uppercase">Login</h3>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input value="" id="username" type="text" className="validate" placeholder="Enter your username" />
                        <label className="active" htmlFor="username">Username</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input value="" id="password" type="text" className="validate" placeholder="Enter password" />
                        <label className="active" htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Login</button>
                </div>
            </div >
        );
    }
} 
