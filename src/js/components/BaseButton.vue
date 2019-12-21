<template>
	<button :class="['btn', themeClass, isSquare ? 'square' : '']" @click="$emit('onClick')">
		<slot/>
	</button>
</template>


<script>
export default {
	name: "BaseButton",
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
	.btn {
		border-radius: $border-radius;
		padding: $spacer $spacer * 2.5;
		outline: none;
		border: none;
		background-color: white;
		font-weight: 500;
		white-space: nowrap;
	}
	.btn.theme-primary {
		background-color: $primary-color;
		color: white;
		transition: opacity $transition-duration;
	}
	.btn:disabled {
		background-color: #d5d5d5;
	}
	.btn.theme-primary:disabled {
		background-color: $primary-color;
		opacity: .4;
	}
	.btn.square {
		width: 48px;
		height: 48px;
		padding: $spacer;
	}
</style>