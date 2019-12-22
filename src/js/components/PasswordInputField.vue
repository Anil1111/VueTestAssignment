<template>
	<VInputField ref="input" :type="showPassword ? 'text' : 'password'" v-bind="$attrs"
	             @onButtonClick="showPassword = !showPassword" v-model="inputValue" button-name="Show or hide password">
		<template v-slot:button>
			<CrossedEyeIcon v-if="showPassword"/>
			<EyeIcon v-else/>
		</template>
	</VInputField>
</template>

<script>
import VInputField from "./VInputField";
import CrossedEyeIcon from "../icons/CrossedEyeIcon";
import EyeIcon from "../icons/EyeIcon";
export default {
	name: "PasswordInputField",
	components: {EyeIcon, CrossedEyeIcon, VInputField},
	data() {
		return {
			showPassword: false,
			inputValue: this.value
		}
	},
	computed: {
		nativeInput() {
			return this.$refs.input.$refs.nativeInput;
		}
	},
	watch: {
        inputValue() {
            this.$emit("input", this.inputValue);
        }
    }
};
</script>