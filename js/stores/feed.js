var Reflux = require("reflux")
var axios = require("axios")

module.exports.actions = Reflux.createActions([
	"refresh",
	"search",
	"read"
])

var data = { 
	inbox : [],
	saved : [],
	outbox : [],
	search : []
};

module.exports.store = Reflux.createStore({
	listenables : [module.exports.actions],
	onRefresh : function(seg) {
		axios.get("me/" + seg).then(function(response) {
			data[seg] = response.data;
			this.trigger(data);
		}.bind(this))

	},
	onSearch : function(query) {
		var self = this;
		data.search = [];
		self.trigger(data);
		axios.get("me/search?link=" + query).then(function(response) {
			data.search = response.data;
			self.trigger(data)
		})

	},
	onRead : function(item) {
		axios.post("link/" + item.link.id + "/read");
		item.read = true;
		this.trigger(data);
	},
	getInitialState: function() {
		return data
	},
})