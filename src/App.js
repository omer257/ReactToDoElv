import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import Form from './Form';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {todoList:[]}
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(data){
    var todoList = this.state.todoList.concat(data);
    this.setState({todoList: todoList})
  }
  removeTodo(data){ 
    var todoList = this.state.todoList;
    todoList.splice(data, 1);
    this.setState({todoList: todoList})
  }
  render() {
    return (
      <div className="row">
        <div className="jumbotron">
          <h1>React todo list</h1>      
        </div>
        <div className="col-xs-3"><Form addTodo={this.addTodo} /></div>
        <div className="col-xs-6"><TodoList todoList={this.state.todoList} removeTodo={this.removeTodo} /></div>
      </div>
    );
  }
}

export default App;
