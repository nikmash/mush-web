var Reflux = require("reflux")
var Axios = require("axios")

module.exports.actions = Reflux.createActions([
	"load",
	"close",
	"tag"
])

var data = { 
	friends : [],
	todo : {},
	locked : {},
	visible : false,
};

module.exports.store = Reflux.createStore({
	listenables : [module.exports.actions],
	onClose : function() {
		data.visible = false;
		data.friends = [];
		data.locked = {};
		for(var key in data.todo) {
			Axios.post("me/friends/" + key + "/mention/" + data.post)
		}
		data.todo = {};
		this.trigger(data);
	},
	onTag : function(id) {
		if(data.todo[id]) {
			delete data.todo[id];
		}
		else
			data.todo[id] = true;
		this.trigger(data);
	},
	onLoad: function(post) {
		var self = this;
		data.visible = true;
		data.post = post;
		Axios.get("me/friends").then(function(resp) {
			data.friends = resp.data;
			return Axios.get("post/" + post + "/mentions")
		}).then(function(resp) {
			resp.data.forEach(function(friend) {
				data.locked[friend.id] = true;
			})
			self.trigger(data);
		})
	},
	getInitialState: function() {
		return data
	},
})