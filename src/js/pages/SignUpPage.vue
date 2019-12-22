<template>
	<VPage class="sign-up-page">
		<VPageTitle>
			Sign Up
		</VPageTitle>
		<VForm class="form" @onSubmit="submit">

			<VInputField is-required autocomplete="name" id="full-name" type="text"
			             label="Full name" placeholder="John Doe" v-model="fullName"/>

			<VInputField is-required autocomplete="email" id="email" type="email" label="Email"
			             placeholder="example@mail.com" v-model="email"/>

			<PasswordInputField ref="password" is-required autocomplete="new-password" id="password"
			                    :error-message="passwordErrorMessage" label="Password"
			                    placeholder="Password" v-model="password"
			                    help-message="Password must contain 8+ symbols, 1 special and 2 capital letters"/>

			<PasswordInputField ref="repeatPassword" is-required autocomplete="new-password" id="repeatPassword"
			                    :error-message="repeatPasswordErrorMessage" label="Repeat password"
			                    placeholder="Password" v-model="repeatPassword"/>

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
import PasswordInputField from "../components/PasswordInputField";
export default {
	name: "SignUpPage",
	components: {PasswordInputField, VPageProposal, VPageLead, VButton, VInputField, VPage, VForm, VPageTitle},
	data: () => ({
		fullName: "",
		email: "",
		password: "",
		repeatPassword: "",
		passwordErrorMessage: "",
		repeatPasswordErrorMessage: ""
	}),
	methods: {
		submit(event) {
			event.preventDefault();
			if (!this.validateForm())
				return;

			const {fullName, password, email} = this;

			this.$store
				.dispatch("signUp", {fullName, password, email})
				.then(() => {
					this.$router.push("/").catch(() => {});
					this.$store.dispatch("addNotification", {message: "You have signed up as " + this.$store.state.auth.user.fullName, type: "success"});
				});
		},
		validateForm() {
			this.resetErrorMessages();

			if (!this.validatePassword()) {
				this.$refs.password.nativeInput.focus();
				return false;
			}

			if (this.password !== this.repeatPassword) {
				this.passwordErrorMessage = "Passwords do not match";
				this.repeatPasswordErrorMessage = "Passwords do not match";
				this.$refs.repeatPassword.nativeInput.focus();
				return false;
			}

			return true;
		},
		validatePassword() {
			const specialCharacters = "!#$%&()*+-=:;<>@?[]^_{}|~";
			const englishCharacters = "abcdefghijklmnopqrstuvwxyz";
			const englishCharactersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			const numbers = "1234567890";
			const alphabet = englishCharacters + englishCharactersUppercase + numbers + specialCharacters;
			const minLength = 8;
			const maxLength = 128;

			const allCharactersAreInAlphabet = Array.from(this.password).every(c => alphabet.includes(c));
			if (!allCharactersAreInAlphabet) {
				this.passwordErrorMessage = "Password must contain only english letters, numbers and special characters";
				return false;
			}

			const satisfiesMinLengthLimit = this.password.length >= minLength;
			if (!satisfiesMinLengthLimit) {
				this.passwordErrorMessage = `Password must contain at least ${minLength} characters`;
				return false;
			}

			const satisfiesMaxLengthLimit = this.password.length <= maxLength;
			if (!satisfiesMaxLengthLimit) {
				this.passwordErrorMessage = `Password must be ${maxLength} characters maximum`;
				return false;
			}

			const hasSpecialCharacter = Array.from(this.password).some(c => specialCharacters.includes(c));
			if (!hasSpecialCharacter) {
				this.passwordErrorMessage = `Password must contain at least 1 special character (${specialCharacters})`;
				return false;
			}

			const hasTwoUpperCaseCharacters = Array.from(this.password).filter(c => englishCharactersUppercase.includes(c)).length >= 2;
			if (!hasTwoUpperCaseCharacters) {
				this.passwordErrorMessage = "Password must contain at least 2 capital characters";
				return false;
			}

			return true;
		},
		resetErrorMessages() {
			this.passwordErrorMessage = "";
			this.repeatPasswordErrorMessage = "";
		}
	},
	watch: {
		fullName() { this.resetErrorMessages(); },
		email() { this.resetErrorMessages(); },
		password() { this.resetErrorMessages(); },
		repeatPassword() { this.resetErrorMessages(); }
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