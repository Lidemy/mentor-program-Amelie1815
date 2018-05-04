import React from 'react';

export class TodoItem extends React.Component {
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

export class BadgeItemComplete extends React.Component {
	render() {
		return <svg style={{cursor: 'pointer'}} fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path style={{cursor: 'pointer'}} d="M0 0h24v24H0z" fill="none" /><path style={{cursor: 'pointer'}} d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
		
	}
};

export class BageItemDelete extends React.Component {
	render() {
		return <svg style={{cursor: 'pointer'}} fill="#999999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path style={{cursor: 'pointer'}} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path style={{cursor: 'pointer'}} d="M0 0h24v24H0z" fill="none" /></svg>
	}
};