import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [{
                  number: 1,
                  text: "Ola"
                },
                {
                  number: 2,
                  text: "Zosia"
                },
                {
                  number: 3,
                  text: "Kasia"
                }
            ]
        };
    }

    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="Title in webpack" taskNumber={this.state.data.length}></Title>
            </div>
        );
    }
}

export default App;