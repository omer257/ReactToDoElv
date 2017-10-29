import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    // var TodoList = [];
    // for(var i=0;i<this.props.todoList.length;i++)
    // {
    //   TodoList.push(<TodoItem removeTodo={this.props.removeTodo.bind(this, index)} key={index} item={item} />);
    // }
    var TodoList = this.props.todoList.map((item,index)=>{
      //use a bind method in order to pass a function with the arguemnts already set.
      return <TodoItem removeTodo={this.props.removeTodo.bind(this, index)} key={index} item={item} />
    })
    return (
      <div className="App">  
        {TodoList}
      </div>
    );
  }
}

export default TodoList;