<template>
	<p class="page-lead">
		<slot/>
	</p>
</template>

<script>
export default {
	name: "VPageLead"
}
</script>

<style scoped lang="scss">
	.page-lead {
		width: 100%;
		text-align: center;
		color: $primary-color;
	}
</style>