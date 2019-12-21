// Fake backend
import uuid from "uuid";
import cloneDeep from "lodash/cloneDeep";
import jsonwebtoken from "jsonwebtoken";
import find from "lodash/find";
import omit from "lodash/omit";

const users = [
	{id: uuid.v4(), username: "admin", password: "AdminAdmin123"},
	{id: uuid.v4(), username: "petya", password: "VueIs2Awesome"}
];

const secretKey = "iYcuprLU3gKiO6hACtVUab9U";

function delay(func) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			func(resolve, reject);
		}, 300);
	});
}

function prepareUser(user) {
	return omit(cloneDeep(user), "password");
}

export function signUp({username, password}) {
	return delay((resolve, reject) => {
		const user = {id: uuid.v4(), username, password};
		users.push(user);
		const jwt = jsonwebtoken.sign({userID: user.id}, secretKey);
		resolve({jwt, user: prepareUser(user)});
	});
}

export function signIn(username, password) {
	return delay((resolve, reject) => {
		const user = find(users, {username, password});
		if (!user) {
			reject();
			return;
		}
		const jwt = jsonwebtoken.sign({userID: user.id}, secretKey);
		resolve({jwt, user: prepareUser(user)});
	});
}

export function checkAuth(jwt) {
	return delay((resolve, reject) => {
		jsonwebtoken.verify(jwt, secretKey, (error, decoded) => {
			if (error) {
				reject();
				return;
			}
			const user = find(users, {id: decoded.userID});
			resolve(prepareUser(user));
		});
	});
}