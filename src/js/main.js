import Vue from "vue";
import App from "./App";
import {router} from "./router";
import {store} from "./store/store";

import "./tooltip";

store.dispatch("signInFromLocalStorage").then(() => {
	new Vue({
		el: "#app",
		render: createElement => createElement(App),
		router,
		store
	});
});