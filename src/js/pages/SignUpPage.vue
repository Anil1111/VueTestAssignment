<template>
	<VPage class="sign-up-page">
		<VPageTitle>
			Sign Up
		</VPageTitle>
		<VForm class="form" @onSubmit="submit">
			<VInputField autocomplete="name" id="full-name" type="text" label="Full name" placeholder="John Doe" v-model="fullName"/>
			<VInputField autocomplete="email" id="email" type="email" label="Email" placeholder="example@mail.com" v-model="email"/>

			<PasswordInputField autocomplete="new-password" id="password" label="Password" placeholder="Password" v-model="password"/>
			<PasswordInputField autocomplete="new-password" id="repeatPassword" label="Repeat password" placeholder="Password" v-model="repeatPassword"/>

			<VButton class="sign-up-button" theme="primary">
				Sign Up
			</VButton>
		</VForm>
		<VPageProposal class="sign-in-proposal">
			Already have an account?<br/>
			<router-link to="/sign-in">Sign In</router-link>
		</VPageProposal>
	</VPage>
</template>


<script>
import VPageTitle from "../components/VPageTitle";
import VForm from "../components/VForm";
import VPage from "../components/VPage";
import VInputField from "../components/VInputField";
import VButton from "../components/VButton";
import VPageLead from "../components/VPageLead";
import VPageProposal from "../components/VPageProposal";
import CrossedEyeIcon from "../icons/CrossedEyeIcon";
import EyeIcon from "../icons/EyeIcon";
import PasswordInputField from "../components/PasswordInputField";
export default {
	name: "SignUpPage",
	components: {PasswordInputField, EyeIcon, CrossedEyeIcon, VPageProposal, VPageLead, VButton, VInputField, VPage, VForm, VPageTitle},
	data: () => ({
		fullName: "",
		email: "",
		password: "",
		repeatPassword: ""
	}),
	methods: {
		submit(event) {
			event.preventDefault();
			console.log(this);
		}
	}
};
</script>

<style scoped lang="scss">
	.sign-up-page {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.form {
		width: 100%;
		max-width: 400px;
	}
	.sign-up-button {
		margin-top: $spacer;
	}
</style>