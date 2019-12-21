<template>
	<div>
		<PageTitle>
			Ready for a great<br/>
			User experience?
		</PageTitle>
		<PageLead>
			Bring your media to the next<br/>
			level!
		</PageLead>
		<div class="buttons">
			<BaseButton @onClick="signUpButtonClick">
				Sign Up
			</BaseButton>
			<BaseButton @onClick="signInButtonClick" theme="primary" is-square>
				<RightArrowIcon/>
			</BaseButton>
		</div>
		<EnterPageWoman class="woman"/>
	</div>
</template>


<script>
import PageTitle from "../../components/PageTitle";
import PageLead from "../../components/PageLead";
import BaseButton from "../../components/BaseButton";
import RightArrowIcon from "../../icons/RightArrowIcon";
import EnterPageWoman from "./EnterPageWoman";
export default {
	name: "EnterPage",
	components: {EnterPageWoman, RightArrowIcon, PageLead, PageTitle, BaseButton},
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
		max-height: 55%;
	}
</style>