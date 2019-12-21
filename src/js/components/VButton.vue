<template>
	<button :class="['button', themeClass, isSquare ? 'square' : '']" @click="$emit('onClick')">
		<slot/>
	</button>
</template>


<script>
export default {
	name: "VButton",
	props: {
		theme: {
			type: String
		},
		isSquare: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		themeClass() {
			return this.theme ? `theme-${this.theme}` : "";
		}
	}
};
</script>

<style scoped lang="scss">
	.button {
		border-radius: $border-radius;
		padding: $spacer $spacer * 2.5;
		outline: none;
		border: none;
		background-color: white;
		font-weight: 500;
		white-space: nowrap;
		height: 48px;
	}
	.button.theme-primary {
		background-color: $primary-color;
		color: white;
		transition: opacity $transition-duration;
	}
	.button:disabled {
		background-color: #d5d5d5;
	}
	.button.theme-primary:disabled {
		background-color: $primary-color;
		opacity: .4;
	}
	.button.square {
		width: 48px;
		padding: $spacer;
	}
</style>