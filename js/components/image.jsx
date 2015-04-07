var React = require('react');

var image = React.createClass({

	render: function() {
		if(!this.props.src)
			return false;
		return (
			<img src={this.props.src} width={this.props.width} height={this.props.height} />
		);
	}

});

module.exports = image;