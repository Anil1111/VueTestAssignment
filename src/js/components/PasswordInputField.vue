<template>
	<VInputField :type="showPassword ? 'text' : 'password'" v-bind="$attrs"
	             @onButtonClick="showPassword = !showPassword" v-model="inputValue">
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
	watch: {
        inputValue() {
            this.$emit("input", this.inputValue);
        }
    }
};
</script>