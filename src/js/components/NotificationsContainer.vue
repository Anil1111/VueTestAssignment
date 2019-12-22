<template>
	<transition-group name="fade" tag="div" class="notifications">
		<VNotification v-for="notification in notifications" :key="notification.id"
		               @onCloseButtonClicked="deleteNotification(notification.id)"
		               @onTimeout="deleteNotification(notification.id)" :type="notification.type">
			{{ notification.message }}
		</VNotification>
	</transition-group>
</template>

<script>
import VNotification from "./VNotification";
export default {
	name: "NotificationsContainer",
	components: {VNotification},
	computed: {
		notifications() {
			return this.$store.state.notifications.notifications;
		}
	},
	methods: {
		deleteNotification(id) {
			this.$store.dispatch("deleteNotification", id);
		}
	}
}
</script>

<style scoped lang="scss">
	.notifications {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		padding: $spacer;
		max-width: 400px;
		display: grid;
		grid-auto-rows: min-content;
		grid-gap: $spacer;
	}
</style>

