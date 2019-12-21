<template>
	<div></div>
</template>

<script>
export default {
	name: "SignOutPage",
	mounted() {
		this.$store.dispatch("signOut");
		this.$router.push("/").catch(() => {});
	}
};
</script>