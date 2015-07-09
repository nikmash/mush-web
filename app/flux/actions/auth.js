import Axios from 'axios'
import createActions from 'util/action'

function doMe(dispatcher, session) {
	Axios.get("me?session=" + session).then((response) => {
		dispatcher({
			me : response.data.payload,
			session : session,
			type : "authSuccess"
		})
		dispatcher({
			type : "refreshUser",
			user : response.data.payload,
		})
	}).catch(() => {
		dispatcher({
			type : "authFailed"
		})
	})

}

export default createActions({
	login(email, password) {
		return (dispatcher) => {
			Axios.post("auth/login", {
				email,
				password
			}).then((response) => {
				doMe(dispatcher, response.data.payload)
			}).catch((...args) => {
				
			})
		}
	},
	me() {
		return (dispatcher) => {
			const session = localStorage.getItem("session")
			if(!session && false) {
				dispatcher({
					type : "authFailed"
				})
				return
			}
			doMe(dispatcher, session)
		}
	}
});