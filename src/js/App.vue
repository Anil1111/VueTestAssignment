<template>
	<transition name="fade" mode="out-in">
		<router-view/>
	</transition>
</template>


<script>
export default {
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