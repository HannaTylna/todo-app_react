import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { todos: [], loading: true };
    }

    componentDidMount() {
        this.populateTodosData();
    }

    static renderTodos(todos) {
        return (
            <ol className="list-group list-group-numbered">
                { todos.map(item =>

                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold text-uppercase">{item.todoTitle}</div>
                            {item.todoDescription}
                        </div>
                    </li>
                )}

            </ ol>

        )
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderTodos(this.state.todos);

        return (
            <div>
                <h1 className="text-center">Todos</h1>
                <div className="todos">{contents}</div>
            </div>
        );
    }

    async populateTodosData() {
        const response = await fetch('https://localhost:7007/api/Todo');
        const data = await response.json();
        this.setState({ todos: data, loading: false });
        console.log(data)
    }

}
