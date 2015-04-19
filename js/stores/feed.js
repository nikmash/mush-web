var Reflux = require("reflux")
var axios = require("axios")

module.exports.actions = Reflux.createActions([
	"refresh",
	"read"
])

var data = { 
	inbox : [],
	saved : [],
	outbox : []
};

module.exports.store = Reflux.createStore({
	listenables : [module.exports.actions],
	onRefresh : function(seg) {
		axios.get("me/" + seg).then(function(response) {
			data[seg] = response.data;
			this.trigger(data);
		}.bind(this))

	},
	onRead : function(item) {
		axios.post("post/" + item.post.id + "/read");
		item.read = true;
		this.trigger(data);
	},
	getInitialState: function() {
		return data
	},
})