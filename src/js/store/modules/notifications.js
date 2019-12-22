import uiid from "uuid";

export default {
	state: {
		notifications: []
	},
	mutations: {
		addNotification(state, {type, message}) {
			state.notifications.push({id: uiid.v4(), type, message});
		},
		deleteNotification(state, id) {
			state.notifications = state.notifications.filter(n => n.id !== id);
		}
	},
	actions: {
		addNotification({commit}, {type, message}) {
			commit("addNotification", {type, message});
		},
		deleteNotification({commit}, id) {
			commit("deleteNotification", id);
		}
	}
};