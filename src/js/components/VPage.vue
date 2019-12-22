<template>
	<div class="page">
		<slot/>
	</div>
</template>

<script>
export default {
	name: "VPage"
};
</script>

<style scoped lang="scss">
	.page {
		padding: $spacer * 3 $spacer;
		background-color: $background-color;
		min-height: 100%;
	}
</style>