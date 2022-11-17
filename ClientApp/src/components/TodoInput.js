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
            body: todoInfo
        }).then(r => r.json()).then(res => {
            if (res) {
                this.setState({ message: 'New Employee is Created Successfully' });
            }
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
                            className="validate"
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
                            className="validate"
                            ref="todoDescription"
                        />
                        <label htmlFor="description">Description</label>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={this.onCreateTodo} className="btn waves-effect waves-light" type="submit" name="action">Save</button>
                </div>
            </div >
        );
    }
}

//export function TodoInput() {
//    const [title, setTitle] = useState("");
//    const [description, setDescription] = useState("");
//    const handleSubmit = async (e) => {
//        e.preventDefault();
//        const payload = { title, description };
//        const url = "https://localhost:7007/api/Todo";
//        const response = await axios.post(url, payload);
//        setTitle(e.target.value);
//        setDescription(e.target.value);
//    }
//    return (
//        <form className="p-5 todo-input" onSubmit={handleSubmit}>
//            <div className="text-center mb-5">
//                <h3 className="text-uppercase">Create todo:</h3>
//            </div>

//            <div className="row">
//                <div className="input-field col s6">
//                    <input
//                        id="title"
//                        type="text"
//                        className="validate"
//                        value={title}
//                        onChange={(e) => setTitle(e)}
//                    />
//                    <label htmlFor="title">Title</label>
//                </div>
//            </div>
//            <div className="row">
//                <div className="input-field col s6">
//                    <input
//                        id="description"
//                        type="text"
//                        className="validate"
//                        value={description}
//                        onChange={(e) => setDescription(e)}
//                    />
//                    <label htmlFor="description">Description</label>
//                </div>
//            </div>
//            <div className="text-center">
//                <button className="btn waves-effect waves-light" type="submit" name="action">Save</button>
//            </div>
//        </form >
//    )
//}