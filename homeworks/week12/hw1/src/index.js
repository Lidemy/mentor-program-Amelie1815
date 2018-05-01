import React from 'react';
import ReactDOM from 'react-dom';

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
          {this.state.todos.map( todo => (
              <TodoItem key={todo.id} todoId={todo.id} text={todo.text} compeleted={todo.compeleted} />
          ))}
				</ul>
			</div>
		)
	}
};

class TodoItem extends React.Component {
  constructor(props) {
		super(props);
	}

	render() {
		return (
				<li className="list-group-item d-flex justify-content-between align-items-center">
				{this.props.text}
				<span className="badge">
					<BadgeItemComplete /><BageItemDelete />
				</span>
			</li>
		)
	}
};

class BadgeItemComplete extends React.Component {
	render() {
		return <svg style={{cursor: 'pointer'}} fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path style={{cursor: 'pointer'}} d="M0 0h24v24H0z" fill="none" /><path style={{cursor: 'pointer'}} d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
		
	}
};

class BageItemDelete extends React.Component {
	render() {
		return <svg style={{cursor: 'pointer'}} fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path style={{cursor: 'pointer'}} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path style={{cursor: 'pointer'}} d="M0 0h24v24H0z" fill="none" /></svg>
	}
};

ReactDOM.render(
	<TodoList />,
	document.getElementById('root')
);
