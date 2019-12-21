<template>
	<form class="form" @submit="$emit('onSubmit', $event)">
		<slot/>
	</form>
</template>

<script>
export default {
	name: "VForm"
}
</script>

<style scoped lang="scss">
	.form {
		padding: $spacer * 2;
		border-radius: 40px;
		background-color: white;
		display: grid;
		grid-auto-rows: min-content;
	}
</style>