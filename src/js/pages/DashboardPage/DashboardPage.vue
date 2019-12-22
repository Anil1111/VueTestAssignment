<template>
	<VPage class="dashboard-page">
		<VPageTitle class="page-title">
			Hello, {{fullName}}!
		</VPageTitle>
		<VPageLead>
			<router-link to="/sign-out">Sign out</router-link>
		</VPageLead>
		<DashboardPageWoman class="woman"/>
	</VPage>
</template>


<script>
import VPage from "../../components/VPage";
import VPageTitle from "../../components/VPageTitle";
import DashboardPageWoman from "./DashboardPageWoman";
import VPageLead from "../../components/VPageLead";
export default {
	name: "DashboardPage",
	components: {VPageLead, DashboardPageWoman, VPageTitle, VPage},
	computed: {
		fullName() {
			return this.$store.state.auth.user.fullName;
		}
	}
};
</script>

<style scoped lang="scss">
	.dashboard-page {
		position: relative;
		height: 100vh;
		overflow: hidden;
	}
	.page-title {
		margin-top: $spacer * 8;
	}
	.woman {
		position: absolute;
		bottom: 0;
		left: 0;
		max-height: 80%;
	}
</style>