import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import EnterPage from "./pages/EnterPage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import VueRouter from "vue-router";
import Vue from "vue";
import has from "lodash/has";
import {store} from "./store/store";

Vue.use(VueRouter);

export const routes = [
	{path: "/dashboard", alias: "/", component: DashboardPage, meta: {redirectToIfNotSignedIn: "/sign-in"}},
	{path: "/enter", component: EnterPage, meta: {redirectToIfSignedIn: "/"}},
	{path: "/sign-up", component: SignUpPage, meta: {redirectToIfSignedIn: "/"}},
	{path: "/sign-in", component: SignInPage, meta: {redirectToIfSignedIn: "/"}},
	{path: "/*", component: NotFoundPage}
];

export const router = new VueRouter({
	mode: "history",
	routes
});

router.beforeEach((to, from, next) => {
	if (has(to, "meta.redirectToIfNotSignedIn") && !store.getters.isSignedIn) {
		next(to.meta.redirectToIfNotSignedIn);
		return;
	}
	if (has(to, "meta.redirectToIfSignedIn") && store.getters.isSignedIn) {
		next(to.meta.redirectToIfSignedIn);
		return;
	}

	next();
});