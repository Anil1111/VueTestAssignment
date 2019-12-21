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
	}
};
</script>

<style scoped lang="scss">
</style>