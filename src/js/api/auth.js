// Fake backend
import uuid from "uuid";
import cloneDeep from "lodash/cloneDeep";

const users = [
	{id: uuid.v4(), username: "admin", password: "AdminAdmin123"},
	{id: uuid.v4(), username: "petya", password: "VueIs2Awesome"}
];

function delay(func) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			func(resolve, reject);
		}, 300);
	});
}

export function signUp({username, password}) {
	return delay((resolve, reject) => {
		const user = {id: uuid.v4(), username, password};
		users.push(user);
		resolve(cloneDeep(user));
	});
}

export function signIn(username, password) {
	return delay((resolve, reject) => {
		const user = users.find({username, password});
		if (!user) {
			reject();
			return;
		}
		resolve(cloneDeep(user));
	});
}

export function signOut() {
	return delay((resolve, reject) => resolve());
}