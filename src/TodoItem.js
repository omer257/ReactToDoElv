import React, { Component } from 'react';

class TodoItem extends Component {
  render() { 
    const {removeTodo,item} = this.props;
    return (
      <div className="App">
        {item} - <span onClick={removeTodo}>Remove</span>
      </div>
    );
  }
}

export default TodoItem;
