<template>
	<div :class="['notification', 'notification-' + type]">
		<slot/>
		<button class="close-button" @click="$emit('onCloseButtonClicked')">
			<CloseIcon/>
		</button>
	</div>
</template>

<script>
import CloseIcon from "../icons/CloseIcon";
export default {
	name: "VNotification",
	components: {CloseIcon},
	props: {
		type: {
			type: String,
			required: true
		}
	},
	data: () => ({ timeout: null }),
	mounted() {
		this.timeout = setTimeout(() => this.$emit("onTimeout"), 3000);
	},
	beforeDestroy() {
		clearTimeout(this.timeout);
	}
}
</script>

<style scoped lang="scss">
	.notification {
		background-color: black;
		border-radius: $border-radius;
		color: white;
		padding: $spacer $spacer * 2;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 500;
	}
	.close-button {
		cursor: pointer;
		display: block;
		color: white;
		outline: none;
		border: none;
		background: none;
		width: 14px;
		height: 14px;
		padding: 0;
	}
	.notification-success {
		background-color: $success-color;
	}
	.notification-error {
		background-color: $error-color;
	}
</style>

