import "header/header.css"
import React from "react"
import { connect } from 'redux/react';
import { Link } from 'react-router'

export default class Header {
	componentWillMount() {
	}
	render() {
		return (
			<header>
				<nav className='content'>
					<Link to='/inbox'>Inbox</Link>
					<Link to='/outbox'>Outbox</Link>
					<Link to='/saved'>Saved</Link>
					<a target='_blank' href='https://chrome.google.com/webstore/detail/mush/kfgjjanhodaoongmigihfkakpjphmnjf'>Get Chrome Extension</a>
				</nav>
			</header>
		);
	}
}
