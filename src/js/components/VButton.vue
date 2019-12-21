<template>
	<button :class="['button', themeClass, isSquare ? 'square' : '']" @click="$emit('onClick')">
		<slot/>
	</button>
</template>


<script>
export default {
	name: "VButton",
	props: {
		theme: {type: String},
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
		cursor: pointer;
		border-radius: $border-radius;
		padding: $spacer $spacer * 2.5;
		outline: none;
		border: 1px solid transparent;
		background-color: white;
		font-weight: 500;
		white-space: nowrap;
		height: 48px;

		transition: border-color $animation-duration;
	}
	.button.theme-primary {
		background-color: $primary-color;
		color: white;
		border: 1px solid $primary-color;
		transition: opacity $animation-duration, background-color $animation-duration, color $animation-duration;
	}
	.button:disabled {
		background-color: #d5d5d5;
	}
	.button.theme-primary:disabled {
		background-color: $primary-color;
		opacity: .4;
	}
	.button:not(:disabled):hover {
		border: 1px solid $primary-color;
	}
	.button.theme-primary:not(:disabled):hover {
		color: $primary-color;
		background-color: white;
	}
	.button.square {
		width: 48px;
		padding: $spacer;
	}
</style>