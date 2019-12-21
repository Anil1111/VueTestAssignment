import * as authAPI from "../../api/auth";

export default {
	state: {
		isSignedIn: false,
		user: null,
		jwt: null
	},
	mutations: {
		signIn(state, {user, jwt}) {
			state.isSignedIn = true;
			state.user = user;
			state.jwt = jwt;
			window.localStorage.setItem("jwt", jwt);
		},
		signOut(state) {
			state.isSignedIn = false;
			state.user = null;
			state.jwt = null;
			window.localStorage.removeItem("jwt");
		}
	},
	actions: {
		signInFromLocalStorage({commit}) {
			const jwt = window.localStorage.getItem("jwt");
			if (!jwt)
				return Promise.resolve();

			return authAPI
				.checkAuth(jwt)
				.then(user => commit("signIn", {user, jwt}))
				.catch(() => commit("signOut", user));
		},
		signUp({commit}, {username, password}) {
			return authAPI
				.signUp(username, password)
				.then(({jwt, user}) => commit("signIn", {user, jwt}))
				.catch(() => commit("signOut"));
		},
		signIn({commit}, {username, password}) {
			return authAPI
				.signIn(username, password)
				.then(({jwt, user}) => commit("signIn", {user, jwt}))
				.catch(() => commit("signOut"));
		},
		signOut({commit}) {
			commit("signOut");
		}
	},
	getters: {
		isSignedIn(state) {
			return state.isSignedIn;
		}
	}
};