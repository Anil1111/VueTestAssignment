<template>
	<p class="page-proposal">
		<slot/>
	</p>
</template>

<script>
export default {
	name: "VPageProposal"
}
</script>

<style scoped lang="scss">
	.page-proposal {
		margin-top: $spacer * 1.5;
		text-align: center;
		color: $primary-color;
		font-weight: 500;
		width: 100%;
	}
</style>