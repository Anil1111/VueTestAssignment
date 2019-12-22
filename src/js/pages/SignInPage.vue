<template>
	<VPage class="sign-in-page">
		<VPageTitle>
			Sign In
		</VPageTitle>
		<VForm class="form" @onSubmit="submit">
			<VInputField is-required autocomplete="email" id="email" type="email"
			             label="Email" placeholder="John Doe" v-model="email"/>

			<PasswordInputField ref="password" is-required autocomplete="password" id="password"
			                    label="Password" placeholder="Password" v-model="password"/>

			<VButton class="sign-in-button" theme="primary">
				Sign In
			</VButton>
		</VForm>
		<VPageProposal>
			Don't have an account yet?<br/>
			<router-link to="/sign-up">Sign Up</router-link>
		</VPageProposal>
	</VPage>
</template>


<script>
import VPage from "../components/VPage";
import VForm from "../components/VForm";
import VInputField from "../components/VInputField";
import PasswordInputField from "../components/PasswordInputField";
import VButton from "../components/VButton";
import VPageTitle from "../components/VPageTitle";
import VPageProposal from "../components/VPageProposal";
export default {
	name: "SignInPage",
	components: {VPageProposal, VPageTitle, VButton, PasswordInputField, VInputField, VForm, VPage},
	data: () => ({
		email: "",
		password: ""
	}),
	methods: {
		submit(event) {
			event.preventDefault();

			const {email, password} = this;
			this.$store.dispatch("signIn", {email, password})
				.then(() => {
					this.$router.push("/").catch(() => {});
					this.$store.dispatch("addNotification", {message: "You have signed in as " + this.$store.state.auth.user.fullName, type: "success"})
				})
				.catch(() => this.$store.dispatch("addNotification", {message: "Wrong email or password", type: "error"}));
		}
	}
};
</script>

<style scoped lang="scss">
	.sign-in-page {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.form {
		width: 100%;
		max-width: 400px;
	}
	.sign-in-button {
		margin-top: $spacer;
	}
</style>