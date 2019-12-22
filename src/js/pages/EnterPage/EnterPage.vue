<template>
	<VPage class="enter-page">
		<VPageTitle>
			Ready for a great<br/>
			User experience?
		</VPageTitle>
		<VPageLead>
			Bring your media to the next<br/>
			level!
		</VPageLead>
		<div class="buttons">
			<VButton @onClick="signUpButtonClick">
				Sign Up
			</VButton>
			<VButton @onClick="signInButtonClick" theme="primary" is-square>
				<RightArrowIcon style="width: 100%; height: 100%;"/>
			</VButton>
		</div>
		<EnterPageWoman class="woman"/>
	</VPage>
</template>


<script>
import VPageTitle from "../../components/VPageTitle";
import VPageLead from "../../components/VPageLead";
import VButton from "../../components/VButton";
import RightArrowIcon from "../../icons/RightArrowIcon";
import EnterPageWoman from "./EnterPageWoman";
import VPage from "../../components/VPage";
export default {
	name: "EnterPage",
	components: {VPage, EnterPageWoman, RightArrowIcon, VPageLead, VPageTitle, VButton},
	methods: {
		signUpButtonClick() {
			this.$router.push("/sign-up");
		},
		signInButtonClick() {
			this.$router.push("/sign-in");
		}
	}
};
</script>


<style scoped lang="scss">
	.enter-page {
		position: relative;
		height: 100vh;
		overflow-y: hidden;
	}
	.buttons {
		margin-top: $spacer * 2;
		display: grid;
		grid-template-columns: repeat(2, min-content);
		grid-gap: $spacer;
		grid-auto-flow: row;
		width: 100%;
		justify-content: center;
	}
	.woman {
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		transform: translateY(2px);
		max-height: 55%;
	}
</style>