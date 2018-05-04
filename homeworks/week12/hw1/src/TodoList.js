import React from 'react';
import { TodoItem, BadgeItemComplete, BageItemDelete } from './TodoItem';
import { hot } from 'react-hot-loader';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.id = 0;
}

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleAddTodo() {
    if (this.state.inputValue) {
      this.setState({
        todos: [{ id: this.id++, text: this.state.inputValue, completed: false}, ...this.state.todos],
        inputValue: ''
      })
    }
  }
  
  handleEnter(e) {
    if (e.key === 'Enter') {
      this.handleAddTodo()
    }
  }

  removeTodo(todoId) {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== todoId)
    })
  }

  completeTodo(todoId) {
    let newTodos = this.state.todos.map(item => {
      if (item.id == todoId) {
        item.completed = !item.completed;
      }
      return item;
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="container col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6">
        <h1 className="display-3 mt-4">Todos</h1>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="What needs to be done?" value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.handleEnter} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={this.handleAddTodo}>Add</button>
          </div>
        </div>
        <ul className="list-group">
          {this.state.todos.map(todo => (
            <TodoItem key={todo.id} todoId={todo.id} text={todo.text} completed={todo.completed} removeTodo={this.removeTodo} completeTodo={this.completeTodo} />
          ))}
        </ul>
      </div>
    )
  }
};

export default hot(module)(TodoList);