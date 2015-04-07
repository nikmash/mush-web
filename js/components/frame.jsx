require("frame.css")
var React = require('react/addons');
var Reflux = require('reflux');
var Frame = require("stores/frame.js")

var frame = React.createClass({
	mixins : [Reflux.connect(Frame.store, "frame")],
	render: function() {
		var cx = React.addons.classSet({
			frame : true,
			active : this.state.frame.url
		})

		var url = this.state.frame.url;
		if(url.indexOf("youtube.com") > -1) {
			var id = url.split('v=')[1];
			var amp = id.indexOf('&');
			if(amp != -1) {
		  		id = video_id.substring(0, amp);
			}
			url = "http://www.youtube.com/embed/" + id;
		}

		return (
			<section onMouseLeave={Frame.actions.close} className={cx}>
				<iframe  sandbox="allow-forms allow-scripts" src={url}></iframe>
				<i onClick={Frame.actions.close} ></i>
			</section>
		);
	}

});

module.exports = frame;