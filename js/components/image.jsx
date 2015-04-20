var React = require('react');
var Format = require("format.js")

var image = React.createClass({

	render: function() {
		if(!this.props.src)
			return false;
		var w = this.props.width;
		var h = this.props.height;
		return (
			<img src={Format.Crop(this.props.src, h*2)}  />
		);
	}

});

module.exports = image;