import React from 'react';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleRemove(){
    const {todoId, removeTodo} = this.props;
    removeTodo(todoId);
  }

  handleComplete(){
    const {todoId, completeTodo} = this.props;
    completeTodo(todoId);
  }

  render() {
    const {text, completed} = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        { completed ? <del>{text}</del> : text }
        <span className="badge">
          <BageItemComplete handleComplete={this.handleComplete}/><BageItemRemove handleRemove={this.handleRemove}/>
        </span>
			</li>
    )
  }
};

export class BageItemRemove extends React.Component {
  render() {
    return <img onClick={this.props.handleRemove} style={{cursor: 'pointer'}} src="/img/ic_clear_999_24px.svg" />
  }
};

export class BageItemComplete extends React.Component {
  render() {
    return <img onClick={this.props.handleComplete} style={{cursor: 'pointer'}} src="/img/ic_done_999_24px.svg" />
  }
};