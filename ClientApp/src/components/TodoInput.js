import React, { Component, useState } from 'react';
import axios from 'axios';

export class TodoInput extends Component {
    static displayName = TodoInput.name;
    constructor(props) {
        super(props);
        this.state = { message: "" };
    }
    onCreateTodo = () => {
        let todoInfo = {
            todoTitle: this.refs.todoTitle.value,
            todoDescription: this.refs.todoDescription.value

        };
        fetch('https://localhost:7007/api/Todo', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todoInfo)
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                window.location.reload()
            });
    }


    render() {
        return (
            <div className="p-5 todo-input" >
                <div className="text-center mb-5">
                    <h3 className="text-uppercase">Create todo:</h3>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="title"
                            type="text"
                            className="validate mt-5"
                            ref="todoTitle"
                        />
                        <label htmlFor="title">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="description"
                            type="text"
                            className="validate mt-5"
                            ref="todoDescription"
                        />
                        <label htmlFor="description">Description</label>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={this.onCreateTodo} className="btn waves-effect waves-light" type="submit" name="action">Save</button>
                </div>
            </div>
        );
    }
}
