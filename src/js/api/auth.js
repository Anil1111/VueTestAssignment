// Fake backend
import uuid from "uuid";
import cloneDeep from "lodash/cloneDeep";

import njwt from "njwt";
import find from "lodash/find";
import omit from "lodash/omit";

const users = [
	{id: "9604b77e-cfde-42a7-8a00-877e90eeaf5e", fullName: "admin", email: "admin@admin.admin", password: "AdminAdmin123"},
	{id: "955dfdc8-2ba0-433d-88c6-f50bd1b3cb37", fullName: "petya", email: "petya@petya.petya", password: "VueIs2Awesome"}
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

export function signUp(fullName, email, password) {
	return delay((resolve, reject) => {
		const user = {id: uuid.v4(), fullName, email, password};
		users.push(user);
		const jwt = njwt.create({userID: user.id}, secretKey).compact();
		resolve({jwt, user: prepareUser(user)});
	});
}

export function signIn(email, password) {
	return delay((resolve, reject) => {
		const user = find(users, {email, password});
		if (!user) {
			reject();
			return;
		}
		const jwt = njwt.create({userID: user.id}, secretKey).compact();
		resolve({jwt, user: prepareUser(user)});
	});
}

export function checkAuth(jwt) {
	return delay((resolve, reject) => {
		njwt.verify(jwt, secretKey, (error, decoded) => {
			if (error) {
				reject();
				return;
			}
			const user = find(users, {id: decoded.userID});
			resolve(prepareUser(user));
		});
	});
}