import React from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {
  constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<h1></h1>
		)
	}
};

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		// this.Method = this.Method.bind(this);
	}

	render() {
		return (
			<div className="container col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6">
				<h1 className="display-3 mt-4">Todos</h1>
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="What needs to be done?" />
					<div className="input-group-append">
						<button className="btn btn-outline-secondary" type="button">Add</button>
					</div>
				</div>

				<ul className="list-group">
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Todo Item 1
						<span className="badge">
							<BadgeItemDone /><BageItemDelete />
						</span>
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Todo Item 2
						<span className="badge">
							<BadgeItemDone /><BageItemDelete />
						</span>
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Todo Item 3
						<span className="badge">
							<BadgeItemDone /><BageItemDelete />
						</span>
					</li>
				</ul>
			</div>
		)
	}
};

class BadgeItemDone extends React.Component {
	render() {
		return <svg className="todo-button__done" fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="todo-button__done" d="M0 0h24v24H0z" fill="none"/><path className="todo-button__done" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
		
	}
};
class BageItemDelete extends React.Component {
	render() {
		return <svg className="todo-button__clear" fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="todo-button__clear" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path className="todo-button__clear" d="M0 0h24v24H0z" fill="none"/></svg>
	}
};

ReactDOM.render(
	<TodoList />,
	document.getElementById('root')
);
