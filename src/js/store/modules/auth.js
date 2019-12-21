import authAPI from "../../api/auth";

export default {
	state: {
		isSignedIn: false,
		user: null
	},
	mutations: {
		signIn(state, user) {
			state.isSignedIn = true;
			state.user = user;
		},
		signOut(state) {
			state.isSignedIn = false;
			state.user = null;
		}
	},
	actions: {
		signUp({commit}, username, password) {
			authAPI
				.signUp(username, password)
				.then(user => commit("signIn", user))
				.catch(() => commit("signOut"));
		},
		signIn({commit}, username, password) {
			authAPI
				.signIn(username, password)
				.then(user => commit("signIn", user))
				.catch(() => commit("signOut"));
		},
		signOut({commit}) {
			authAPI
				.signOut()
				.then(() => commit("signOut"));
		}
	},
	getters: {
		isSignedIn(state) {
			return state.isSignedIn;
		}
	}
};