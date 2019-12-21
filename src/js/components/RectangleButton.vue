<template>
	<button @click="$emit('onClick')">
		<slot/>
	</button>
</template>


<script>
export default {
	name: "RectangleButton"
};
</script>

<style scoped lang="scss">
	button {
		border-radius: $border-radius;
		padding: $spacer $spacer * 2;
		outline: none;
		border: none;
		background-color: white;
		font-weight: 500;
	}
</style>