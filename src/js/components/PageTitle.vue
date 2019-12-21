<template>
	<h1 class="page-title">
		<slot/>
	</h1>
</template>

<script>
export default {
	name: "PageTitle"
}
</script>

<style scoped lang="scss">
	.page-title {
		margin-top: $spacer * 5;
		width: 100%;
		text-align: center;
		color: $primary-color;
		font-size: 22px;
		font-weight: 800;
		line-height: 30px;
	}
</style>