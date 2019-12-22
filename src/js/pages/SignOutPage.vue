<template>
	<VPage>

	</VPage>
</template>

<script>
import VPage from "../components/VPage";
export default {
	name: "SignOutPage",
	components: {VPage},
	mounted() {
		this.$store.dispatch("signOut");
		this.$router.push("/").catch(() => {});
		this.$store.dispatch("addNotification", {message: "You have signed out", type: "success"});
	}
};
</script>

<style scoped lang="scss">
</style>