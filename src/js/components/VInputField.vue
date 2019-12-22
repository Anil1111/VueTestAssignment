<template>
	<div class="field">
		<label class="label" :for="id">{{ label }}</label>
		<span class="help" v-tooltip="{content: helpMessage, trigger: 'hover click', placement: 'auto'}" v-if="helpMessage">
			<QuestionMarkIcon class="help-icon"/>
		</span>
		<input ref="nativeInput" :class="['input', errorMessage ? 'error' : '']" :type="type" :aria-label="label"
		       :name="id" :id="id" :placeholder="placeholder" :required="isRequired"
		       v-model="inputValue" :autocomplete="autocomplete"/>
		<button type="button" v-if="hasButtonSlot" class="input-button" @click="$emit('onButtonClick')" :name="buttonName">
			<slot name="button"/>
		</button>
		<span v-if="errorMessage" class="error-message">
			{{ errorMessage }}
		</span>
	</div>
</template>

<script>
import QuestionMarkIcon from "../icons/QuestionMarkIcon";
export default {
	name: "VInputField",
	components: {QuestionMarkIcon},
	props: {
		label: {type: String},
		placeholder: {type: String},
		type: {
			type: String,
			required: true
		},
		id: {
			type: String,
			required: true
		},
		value: {type: String},
		autocomplete: {type: String},
		errorMessage: {type: String},
		isRequired: {type: Boolean},
		helpMessage: {type: String},
		buttonName: {type: String}
	},
	data() {
		return {
			inputValue: this.value
		}
	},
	computed: {
		// https://forum.vuejs.org/t/check-if-components-slot-is-empty/6015/4
		hasButtonSlot() {
			return !!this.$slots["button"];
		}
	},
	watch: {
        inputValue() {
            this.$emit("input", this.inputValue);
        }
    }
}
</script>

<style scoped lang="scss">
	.field {
		padding-bottom: $spacer * 2;
		position: relative;
	}


	.label {
		padding-left: $spacer * 1.5;
		font-weight: 600;
		font-size: 12px;
		margin-bottom: $spacer / 4;
		display: block;
		float: left;
	}

	.help {
		float: right;
		width: 14px;
		height: 14px;
		margin-right: $spacer + 4px;
		color: rgba(#1E1A3E, .2);
	}
	.help-icon {
		width: 100%;
		height: 100%;
	}


	.input {
		background-color: $primary-background-color;
		border-radius: $border-radius;
		height: $spacer * 3;
		padding: 0 $spacer * 1.5;
		width: 100%;
		border: 1px solid transparent;
		outline: none;
		transition: border-color $animation-duration;
	}


	.input::placeholder {
		color: mix(darken($primary-background-color, 30%), #aaa, 50%);
	}
	.input.error::placeholder {
		color: mix(darken($error-background-color, 50%), #aaa, 50%);
	}


	.input:focus {
		border: 1px solid $primary-border-color;
	}
	.input.error:focus {
		border: 1px solid $error-border-color;
	}


	.input.error {
		background-color: $error-background-color;
	}
	.input.error + .input-button {
		background-color: $error-background-color;
	}


	.input-button {
		cursor: pointer;
		position: absolute;
		right: 1px;
		padding-right: $spacer;
		top: $spacer * 2;
		padding-left: $spacer;
		height: calc(#{$spacer} * 3 - 2px); // input height - 2px for borders
		background-color: $primary-background-color;
		outline: none;
		border: none;
		display: flex;
		align-items: center;
		border-radius: $border-radius;
	}


	.error-message {
		display: block;
		font-size: 11px;
		margin-left: $spacer * 1.5;
		color: $error-color;
	}
</style>