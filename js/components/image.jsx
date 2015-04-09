var React = require('react');
var Format = require("format.js")

var image = React.createClass({

	render: function() {
		if(!this.props.src)
			return false;
		var w = this.props.width;
		var h = this.props.height;
		return (
			<img src={Format.Crop(this.props.src, h)}  />
		);
	}

});

module.exports = image;