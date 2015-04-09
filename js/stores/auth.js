var Reflux = require("reflux")
var axios = require("axios");
axios.interceptors.request.use(function(config) {
	//config.url = "http://mush.io/api/" + config.url;
	config.url = "http://api.ironbay.digital/" + config.url;
	return config;
});

module.exports.actions = Reflux.createActions([
	"login"
])

var data = { 
	me : {},
	authed : undefined,
};

module.exports.store = Reflux.createStore({
	listenables : [module.exports.actions],
	init : function() {
		this.me();
	},
	onLogin : function(email, password) {
		axios.post("auth/login", {
			email : email,
			password : password
		}).then(function(response) {
			localStorage.setItem("session", response.data)
			this.me();
		}.bind(this))
	},
	me : function() {
		var session = localStorage.getItem("session"); 
		if(!session) {
			data.authed = false;
			this.trigger(data);
		}

		var self = this;
		axios.get("me?session=" + session).then(function(response) {
			data.authed = true;
			data.me = response.data;
			axios.interceptors.request.use(function(config) {
				config.params = config.params || {};
				config.params.session = session;
				return config;
			});
			self.trigger(data);
		}).catch(function() {
			data.authed = false;
			self.trigger(data);
		})
	},
	getInitialState: function() {
		return data
	},
})