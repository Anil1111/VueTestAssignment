<template>
	<div class="page">
		<slot/>
		<NotificationsContainer/>
	</div>
</template>

<script>
import NotificationsContainer from "./NotificationsContainer";
export default {
	name: "VPage",
	components: {NotificationsContainer}
};
</script>

<style scoped lang="scss">
	.page {
		padding: $spacer * 3 $spacer;
		min-height: 100%;
	}
</style>