require("tag.css")
var React = require('react');
var Reflux = require("reflux");
var Tag = require("stores/tag");

var tag = React.createClass({
	mixins : [Reflux.connect(Tag.store, "tag")],
	render: function() {
		var cx = React.addons.classSet({
			active : this.state.tag.visible,
			tag : true
		})
		return (
			<section className={cx} >
				<div className="wrap">
					<header>Tag Friends</header>
					<ul >
					{
						this.state.tag.friends.map(function(friend) {
							var cx = React.addons.classSet({
								locked : this.state.tag.locked[friend.id],
								checked : this.state.tag.locked[friend.id] || this.state.tag.todo[friend.id]
							})
							return (
								<li onClick={Tag.actions.tag.bind(null, friend.id)} className={cx}>
									<a>
										<img src={friend.avatar} />
										<summary>
											<h1 >{friend.name}</h1>
											<h2 >{friend.email}</h2>
										</summary>
										<i></i>
									</a>
								</li>
							)
						}.bind(this))
					}
					</ul>
					<footer onClick={Tag.actions.close.bind()}>Done</footer>
				</div>
			</section>
		);
	}

});

module.exports = tag;