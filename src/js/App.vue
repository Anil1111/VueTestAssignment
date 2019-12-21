<template>
	<div>
		Hello Vue!
		<router-link to="/">/</router-link>
		<router-link to="/enter">/enter</router-link>
		<router-link to="/dashboard">/dashboard</router-link>
		<router-link to="/sign-in">/sign-in</router-link>
		<router-link to="/sign-up">/sign-up</router-link>
		<router-link to="/404">/404</router-link>
		<router-view></router-view>
	</div>
</template>


<script>
export default {
};
</script>

<style lang="scss">
	@import "../scss/global";
</style>