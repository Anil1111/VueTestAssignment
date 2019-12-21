<template>
	<div>
		Hello Vue!
		<RectangleButton @onClick="signInButtonClicked">Sign in</RectangleButton>
		<router-link to="/">/</router-link>
		<router-link to="/enter">/enter</router-link>
		<router-link to="/dashboard">/dashboard</router-link>
		<router-link to="/sign-in">/sign-in</router-link>
		<router-link to="/sign-out">/sign-out</router-link>
		<router-link to="/sign-up">/sign-up</router-link>
		<router-link to="/404">/404</router-link>
		<router-view></router-view>
	</div>
</template>


<script>
import RectangleButton from "./components/RectangleButton";
export default {
	components: {RectangleButton},
	methods: {
		signInButtonClicked() {
			this.$store.dispatch("signIn", {username: "admin", password: "AdminAdmin123"}).then(() => {
				this.$router.push("/");
			});
		}
	}
};
</script>

<style lang="scss">
	@import "../scss/global";
</style>