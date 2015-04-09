require("header.css")
var React = require('react');
var Link = require("react-router").Link;

var header = React.createClass({
  	contextTypes: {
    	router: React.PropTypes.func
	},
	render: function() {
		var route = this.context.router.getCurrentRoutes()[1]
		return (
			<header>
				<h1>{route.name}</h1>
				<nav>
					<Link to="inbox">Inbox</Link>
					<Link to="outbox">Outbox</Link>
				</nav>
			</header>
		);
	}

});

module.exports = header;